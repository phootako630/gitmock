import { NextApiRequest, NextApiResponse } from 'next';
import simpleGit, { SimpleGit } from 'simple-git';
import path from 'path';

/**
 * Clone a repository.
 * @param req: NextApiRequest
 * @param res: NextApiResponse
 */

export default async function cloneRepo(req: NextApiRequest, res: NextApiResponse) {
    // Check for necessary environment variables
    if (!process.env.GITHUB_USERNAME || !process.env.GITHUB_TOKEN) {
        res.status(500).json({ error: 'Please set the GITHUB_USERNAME and GITHUB_TOKEN environment variables.' });
        return;
    }
    if (req.method === 'POST') {
        const { url } = req.body;
        // Validate the url
        if (!url) {
            res.status(400).json({ error: 'The "url" field is required.' });
            return;
        }

        try {
            // Clone the repo with a unique name each time
            const localPath = path.join(process.cwd(), '../../local-repo-');
            const repoName = url.split("/").pop();
            //SimpleGit is a wrapper around the git command line tool
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
