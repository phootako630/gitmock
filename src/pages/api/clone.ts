import { NextApiRequest, NextApiResponse } from 'next';
import simpleGit, { SimpleGit } from 'simple-git';
import path from 'path';

export default async function cloneRepo(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { url } = req.body;

        if (!url) {
            res.status(400).json({ error: 'The "url" field is required.' });
            return;
        }

        try {
            // Clone the repo with a unique name each time
            const localPath = path.join(process.cwd(), '../../local-repo-');
            const repoName = url.split("/").pop();

            const git: SimpleGit = simpleGit();
            await git.clone(`https://${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_USERNAME}/${repoName}.git`, localPath);

            res.status(200).json({ message: 'Successfully cloned repository.', localPath: localPath });
        } catch (error) {
            console.error('An error occurred:', error);
            res.status(500).json({ error: 'An error occurred: ' + error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed. Please use POST.' });
    }
}
