# My React CI/CD Project

## Overview

This project demonstrates a Continuous Integration and Continuous Deployment (CI/CD) pipeline for a simple React application using GitHub Actions. The pipeline includes building the application, running unit tests, and optionally building and pushing a Docker image or uploading the build artifacts.

## Repository Structure

*   `.github/workflows/ci.yml`: Defines the GitHub Actions workflow for the CI/CD pipeline.
*   `App.js`: The main React component.
*   `App.css`: CSS styles for the application.
*   `App.test.js`: Unit tests for the application.
*   `Dockerfile`: (Optional) Contains instructions for building a Docker image of the application.

## Build and Run Instructions

1.  Clone the repository: `git clone https://github.com/PadminiPriyanka28/PROG8860-Midterm.git`
2.  Install dependencies: `npm install`
3.  Start the development server: `npm start`

## Steps to Test the CI Pipeline

1.  Make a change to the code (e.g., modify `App.js`).
2.  Commit and push the changes to the `main` branch:
    ```bash
    git add.
    git commit -m "Test CI pipeline"
    git push origin main
    ```
3.  Go to the "Actions" tab in your GitHub repository to see the CI pipeline running.
4.  Verify that the pipeline completes successfully and performs the desired actions (build, test, and upload).

## Docker Image 

*   **Docker Hub Repository:** https://hub.docker.com/repository/docker/padminipriyankaporeddy/my-app1
*   **Pull the Docker image:**
    ```bash
    docker pull padminipriyankaporeddy/my-app1:latest
    ```
*   **Run the Docker image:**
    ```bash
    docker run -p 3000:80 padminipriyankaporeddy/my-app1:latest
    ```

## Technologies Used

*   React
*   GitHub Actions
*   Docker (optional)

## Note

This project uses the JSONPlaceholder API ([https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1)) as an example for fetching data. You can replace it with your own API endpoint if needed.
