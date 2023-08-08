This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Full-stack GitHub Repo Manager

This project is a full-stack web application built with React, Next.js, TypeScript, and Tailwind CSS. It provides a simple interface for users to clone a GitHub repository, create a new file in the cloned repository, and push the changes back to the original repository.

## Features
* Clone a GitHub repository.
* Create a new file in the cloned repository.
* Push the changes back to the original repository.
* Validation for GitHub repository URLs.
* Interactive feedback on the status of each operation.

## User Story
![git_mock_userstory](https://github.com/phootako630/gitmock/assets/114458211/c8c42368-cad5-43f7-b6d9-2c27a7896260)


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

## Known Limitation && Improvements
Known Limitations & Future Improvements for the Git Repo Management Application
1. Authentication:
   Limitation: Currently, the application uses a single GitHub token stored in environment variables, which means it operates under a single user's context.
   Improvement: Implement user authentication, allowing individual users to log in and use their own GitHub tokens.
   Solution: Integrate OAuth with GitHub using platforms like Auth0 or Firebase Authentication to manage user sessions and tokens securely.
2. Sync/Conflicts:
   Limitation: If a user makes changes to the repo outside of the application, the app isn't aware of these changes.
   Improvement: Implement a sync feature to check the repo's current status before making any changes. If there are conflicts, prompt the user to resolve them.
   Solution: Use GitHub webhooks to listen for changes in the repository and notify the application in real-time.
3. Branch Selection:
   Limitation: The application operates only on the default branch of the repository.
   Improvement: Allow users to select which branch they'd like to work on and make changes accordingly.
   Solution: Use the GitHub API to list and select branches, and then apply operations to the chosen branch.
4. Repository Location:
   Limitation: Repositories are cloned to a predetermined location based on the application's directory.
   Improvement: Allow users to choose the destination directory for cloning the repo, giving them more control.
   Solution: Integrate with cloud storage solutions like AWS S3, letting users decide where to store the cloned repo.
5. Pull Requests:
   Limitation: The application can commit and push changes, but it cannot create pull requests.
   Improvement: Add functionality to create pull requests, enabling users to suggest changes without directly altering the main branch.
   Solution: Use the GitHub API to facilitate the creation and management of pull requests.
6. Scalability:
   Limitation: The current design might not efficiently handle a large number of simultaneous users.
   Improvement: Consider serverless architecture or container orchestration for scalability. Implement caching mechanisms and optimize database queries if applicable.
   Solution: Adopt serverless frameworks like AWS Lambda or container orchestration with Kubernetes. Use caching solutions like Redis for improved performance.
7. Security:
   Limitation: Using a single stored GitHub token is a security risk, and there's no encryption for sensitive operations.
   Improvement:
   Use individual tokens for each authenticated user.
   Encrypt sensitive data and ensure secure data transmission.
   Add rate limiting and monitoring to detect and prevent malicious activities.
   Solution: Implement Vault for secret management, use HTTPS for secure data transmission, and tools like AWS WAF for rate limiting and monitoring.
8. User Experience and Feedback:
   Limitation: Users might not be aware of what the application is doing in the background or if there are delays.
   Improvement: Implement real-time feedback mechanisms like progress bars, spinners, and toasts to keep the user informed.
   Solution: Integrate libraries like react-toastify for notifications and use built-in components or libraries like @chakra-ui/react for spinners and progress indicators.
9. Error Handling and Recovery:
   Limitation: Unhandled exceptions or errors can cause the application to crash or behave unexpectedly.
   Improvement: Develop a robust error handling mechanism to catch, log, and gracefully recover from errors.
   Solution: Implement a global error boundary in React to catch UI errors. Integrate logging mechanisms like winston or external services like Sentry to log and monitor errors.
10. Extensibility:
    Limitation: The application currently supports a set of predefined operations.
    Improvement: Design the application in a modular way to easily add new features or operations related to Git or other version control systems in the future.
    Solution: Adopt a microservices architecture or modular code design, which allows for easy integration of new features without affecting existing functionality.
11. Support for Other VCS (Version Control Systems):
    Limitation: The application currently only supports Git and GitHub.
    Improvement: Extend the application to support other version control systems like Mercurial, SVN, or platforms like GitLab and Bitbucket.
    Solution: Use abstraction layers in the application design, allowing for the integration of different VCS APIs seamlessly.
12. Automated Testing:
    Limitation: Without automated tests, changes to the codebase might introduce bugs or regressions.
    Improvement: Implement a comprehensive testing strategy, including unit tests, integration tests, and end-to-end tests.
    Solution: Use testing libraries like Jest for unit testing, Testing Library for component testing, and tools like Cypress for end-to-end testing.
13. Continuous Integration and Deployment (CI/CD):
    Limitation: Manual deployments can be error-prone and inefficient.
    Improvement: Set up a CI/CD pipeline to automate testing, building, and deploying the application.
    Solution: Integrate with CI/CD platforms like GitHub Actions, Jenkins, or CircleCI to automate the software delivery process.

## Deployment
At this stage, the project is not ready for deployment. It currently lacks user authentication and individual user-based repository interaction. The user's cloned repositories are stored locally, which may not be suitable for deployment to a public server. Future improvements could include adding user authentication (e.g. OAuth) and storing cloned repositories in a cloud storage service like AWS S3.
