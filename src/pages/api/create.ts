import { NextApiRequest, NextApiResponse } from 'next';
import simpleGit, { SimpleGit } from 'simple-git';
import fs from 'fs';
import path from 'path';

export default async function createFile(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const localPath = path.join(process.cwd(), '../../local-repo-');
            const localGit = simpleGit(localPath);
            fs.writeFileSync(path.join(localPath, 'gitworkflow.txt'), 'Test2!');
            await localGit.add('./*');

            res.status(200).json({ message: 'Successfully created file and added to staging area.' });
        } catch (error) {
            console.error('An error occurred:', error);
            res.status(500).json({ error: 'An error occurred: ' + error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed. Please use POST.' });
    }
}
