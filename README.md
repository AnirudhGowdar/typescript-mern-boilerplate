# Typescript MERN Boilerplate

## Build and Run

### Development

1. Clone the repository and run `npm run setup` to install dependencies.
2. Create `.env` file with required configuration as specified in `.env-example`. Update `.env-example` as well when adding more environment variables to the pplication.
3. Execute one of the following commands as required for development. These commands have been defined under "scripts" in package.json.
    - `npm run backend` to run the backend server. Concurrently updates the development build with code changes.
    - `npm run frontend` to run the frontend application server.
    - `npm run dev` to concurrently run both the backend and frontend servers.

### Deployment

During deployment, frontend build will be served as static files by the backend node.js server. Both of these commands have been defined under "scripts" in package.json file.

- Use the command `npm run build` to generate static builds for the frontend and transpiled js for backend.
- Use the command `npm run prod` to start the backend server with PM2 in production mode.
