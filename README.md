# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Task Tracker:
1. Task Component
 - When clicking on the test, the reminder(left border shown as green color) will show
 - Close button, when cliking on close button, the task will be deleted
2. Add Task Component
 - Add Task Button: click on the button, the add task form will show, and the button will change color to red and text of button become to close;
 - Add form: task, day & time, reminder input
 - Save Task button: when click on the button, the new task will be added on the following task list
 - if the input value is empty, there will be an alert;
3. Footer
 - have about link in Footer, use router to relocate to /about page

Three Server:
1. dev server: npm start
2. production build server
 - npm run build (will generate a build folder)
 - sudo npm i -g server
 - serve -s build -p 8000
3. backend server: npm run server (see below)

Mock Backend:
use json server:
https://www.npmjs.com/package/json-server
1. npm install -g json-server
2. add "server": "json-server --watch db.json --port 5000" in package.json
3. run: npm run server // will auto create db.json
4. use fetch api to get the data in server
 https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch


Router:
1. npm i react-router-dom
2. use import {BrowserRouter, Route, Link} from 'react-router-dom';
3. BrowserRouter will be the parent tag on App component
4. import { useLocation } from 'react-router-dom';
   const location = useLocation();
   location.pathname === '/' ? .. : ..



