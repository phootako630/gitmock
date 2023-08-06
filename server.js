const express = require('express');
const git = require('simple-git');
const fs = require("fs");
const app = express();
const port = 3000;

app.post('/clone', (req, res) => {
    const repoUrl = req.body.url;

    // validate the URL
    if (!repoUrl) {
        return res.status(400).json({ error: 'The "url" field is required.' });
    }
    let localGit;
    // clone the repository to a local directory
    git().clone(repoUrl, './local-repo')
        .then(() => {
            // navigate into the local repository
            localGit = git('./local-repo');

            // make a change in the repository
            // you need to define what kind of change you want to make here
            // for example, you might want to create a new file
            fs.writeFileSync('./local-repo/new-file.txt', 'Hello, World!');

            // add the changed files to the staging area
            return localGit.add('./new-file.txt');
        })
        .then(() => {
            // commit the changes
            return localGit.commit('Made a change');
        })
        .then(() => {
            // push the changes back to the repository
            return localGit.push();
        })
        .then(() => res.status(200).json({ message: 'Successfully cloned, modified and pushed.' }))
        .catch((err) => res.status(500).json({ error: 'An error occurred: ' + err.message }));
});
