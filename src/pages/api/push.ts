import { NextApiRequest, NextApiResponse } from 'next';
import simpleGit, { SimpleGit } from 'simple-git';
import path from 'path';

/**
 * Commit and push changes.
 * @param req: NextApiRequest
 * @param res: NextApiResponse
 */

export default async function pushChanges(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const localPath = path.join(process.cwd(), '../../local-repo-');
            const localGit = simpleGit(localPath);
            await localGit.commit('Made a change');
            await localGit.push('origin', 'main');

            res.status(200).json({ message: 'Successfully committed and pushed changes.' });
        } catch (error) {
            console.error('An error occurred:', error);
            res.status(500).json({ error: 'An error occurred: ' + error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed. Please use POST.' });
    }
}
