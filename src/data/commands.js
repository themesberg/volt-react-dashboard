
export default [
    {
        "id": 1,
        "name": "install",
        "usage": ["yarn install", "npm install"],
        "description": "This command installs a package, and any packages that it depends on.",
        "link": "https://docs.npmjs.com/cli/v6/commands/npm-install"
    },
    {
        "id": 2,
        "name": "start",
        "usage": ["yarn start", "npm start"],
        "description": "This will determinate the start of your development server.",
        "link": "https://create-react-app.dev/docs/available-scripts/#npm-start"
    },
    {
        "id": 3,
        "name": "build",
        "usage": ["yarn build", "npm build"],
        "description": "Builds the app for production to the build folder. \nIt correctly bundles React in production mode and optimizes the build \nfor the best performance.",
        "link": "https://create-react-app.dev/docs/available-scripts/#npm-run-build"
    },
    {
        "id": 4,
        "name": "test",
        "usage": ["yarn test", "npm run test"],
        "description": "Runs the test watcher in an interactive mode. \n(Note that we haven't implemented any tests - this command is by default \nfrom the create-react-app)",
        "link": "https://create-react-app.dev/docs/available-scripts/#npm-test"
    },
    {
        "id": 5,
        "name": "eject",
        "usage": ["yarn eject", "npm run eject"],
        "description": "This command will remove the single build dependency from your project. \nImportant! We don't recommend using this command because \nour product may break after using it.",
        "link": 7
    }
];