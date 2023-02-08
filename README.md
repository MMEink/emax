# Project Guide

Make sure you have Node.js and Visual Studio Code(vsc) installed in your local machine before clone this project. 


## Steps

### Step 1. run `npm install` in the terminal (vsc open new terminal) at the root folder
this will install all the dependencies needed for this project only in this folder. 

### Step 2. run `npm start` in the terminal (vsc open new terminal) at the root folder
this will start a local server and avalible to load live update of the project as you modifying. 

### Step 3. run `npm run build` in the terminal (vsc open new terminal) at the root folder
this will create/update the build folder of this project, drag all the contents in folder to FTP folder will make the changes go live. 

## Folder Structure Guide
Tawk plugin is added in public/index.html
All other works are done in folder src. Project start point is index.js -> App.js -> MainView/Main.jsx
### src folder
#### App.js
Control "scroll to the top" round button, site route links, Navbar on all pages. Anything added inside <Router> tag will appear on all the site pages, for instance the Navbar. Add Route for new links. 
#### App.css
Most styles of the home page are done in this file. 
#### BlackBanner.jsx, ContactForm.jsx, LogoCarousel.jsx, Navbar.jsx
These are re-usable components and are shared in almost all the pages/Views. 
#### ScrollToTop.jsx
this helps scroll to top automatically every time the link is changed. (bug fixer)
#### styled.js
custom tags and reuseable tags. Is used for styling, save the headache of classname Convention and avoid confusion. 
#### data.js
all re-usable and shared data is stored in this file. To change the contents on home page, services home page, this might be the only file you have to modify. 
### src/View folders
folders' naming convention end with View represents the main pages of the site, include about us page, contact page, 404 page, thank you page, service home page, portfolio page. 
### src/ServicePages
inside pages for each services in the service home page. Content in here is not re-usable nor shareable, page style is the same except the header image but contents are customized for each page.
### src/images
images needed for shared components/sections. For instace, logo carousel, navbar......


## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).