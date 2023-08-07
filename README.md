This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Full-stack GitHub Repo Manager

This project is a full-stack web application built with React, Next.js, TypeScript, and Tailwind CSS. It provides a simple interface for users to clone a GitHub repository, create a new file in the cloned repository, and push the changes back to the original repository.

## Features
* Clone a GitHub repository.
* Create a new file in the cloned repository.
* Push the changes back to the original repository.
* Validation for GitHub repository URLs.
* Interactive feedback on the status of each operation.

## Tech Stack
* React
* Next.js
* TypeScript
* Tailwind CSS
* simple-git
  
## Local Development
1. Clone this repository.
2. Install the dependencies with npm install.
3. Run the development server with npm run dev.
4. Open http://localhost:3000 in your browser.
   
Please note that you need to provide your GitHub username and a personal access token as environment variables. Create a .env.local file in the root directory of the project and add the following lines:
GITHUB_USERNAME=YOUR_GITHUB_USERNAME
GITHUB_TOKEN=*****
Replace YOUR_GITHUB_USERNAME and ***** with your actual GitHub username and personal access token.

## Deployment
At this stage, the project is not ready for deployment. It currently lacks user authentication and individual user-based repository interaction. The user's cloned repositories are stored locally, which may not be suitable for deployment to a public server. Future improvements could include adding user authentication (e.g. OAuth) and storing cloned repositories in a cloud storage service like AWS S3.
