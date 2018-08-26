
-------how to install webpack-----------------
-------if need refresher then section 6 of video course has all the details-----
##########################
yarn add webpack@3.1.0

-------if have webpack installed already------------------

create config file, call it webpack.config.js 


###########################

node webpack.config.js (run in root folder)



(what goes inside config file )
############################
const path = require('path'); 

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    }
};
##############################

have scripts setup in package.json 

##############

  "scripts": {
    "serve": "live-server public/",
    "build": "webpack --watch",
    "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
  }

##############


then have to 

yarn run serve 
yarn run build

do not need build-babel since webpack handles that (have to set it up tho)

##############################

!!!!!
can also ommit react and react dom src in index.html 
just need to include the bundle.js file and import react and react dom in the app.js file 

first install react and react-dom then import 


##############################
yarn add react@16.0.0 react-dom@16.0.0

import React from 'react';
import ReactDOM from 'react-dom'; 

<script src="/bundle.js"></script>


##################################

setup the processing of jsx from webpack 
(setup babel with webpack)


first need to install babel 

###########################
(allows you to allow babel from tools like webpack)
yarn add babel-core@6.25.0 babel-loader@7.1.1

then configure webpack.config.js 

############################

// entry -> output
const path = require('path'); 

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            loader: 'babel-loader', 
            test: /\.js$/, 
            exclude: /node_modules/ 
        }]
    }
};

#######################

then have to create config file for babel called .babelrc

#############

{
    "presets": ["env", "react"]
}

############


after all that's done, setup source maps in webpack.config.js
can find all of the options in webpack.js.org in the devtool section 

#########
devtool: 'cheap-module-eval-source-map'
#########

######## 
instead of using live-server use webpack devserver my boi by modifying the webpack.config.js
can find all of the options in webpack.js.org in the devserver section 

1) install tool 
yarn add webpack-dev-server@2.5.1

2) setup in webpack.config.js
devServer: {
        contentBase: path.join(__dirname, 'public')
    }

3) setup script in package.json 

"scripts": {
    "serve": "live-server public/",
    "build": "webpack",
    "dev-server": "webpack-dev-server"
  },

4) run in terminal 

yarn run dev-server 

# do not need to run anything else, like yarn run build 


----------install babel plugin to allow for es6 class properties----------0

yarn add babel-plugin-transform-class-properties@6.24.1

1) configure inside .babelrc

can run 
yarn run dev-server to allow the newly added functionality


# adding components like the modal 
yarn add react-modal@2.2.2 


# setting up webpack to work with scss (use use since it allows one to setup an array of loaders)

        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }


1) specify a new rule in webpack.config.js 

2) install/setup loader (css-loader) && (style-loader)
yarn add style-loader@0.18.2 css-loader@0.28.4 

3) import stylesheeting in app.js
import './styles/styles.css'; 

4) install scss tools to convert from scss to css 
(have to install another tool loader) (choose latest versions)
yarn add sass-loader node-sass

5) configure loader in webpack.config.js

        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }


# bem naming convention used for scss

# css reset used for css is the Normalize library 
yarn add normalize.css

import it in the app.js file 

modify the webpack.config.js file with a question mark in fron of the first s in the regex for css 

# settings scss has to be imported all the way at the top 

# sass reference functions 


#  install react router 
https://reacttraining.com/react-router/


#############################
######    REDUX #########


#### npm uuid ####### 


### new babel plugin to allow for object spread ######
babel object spread operator 


#### need the react-redux library bro #####




### moment.js is a time library #######




#### airbnb react-dates to pick dates ####


##### react-test-renderer ######

# Git Commands 

git init - Create a new git repo 
git status - View the changes to your project
git add - Add files to the staging area
git commit - Creates a new commit with files from stagin area
git log - View recent commits



-----------------------------------------------------------


----- Things needed to install before running program ------
npm
yarn
    npm install -g yarn 
live-server (globally) 
    npm install -g live-server
babel (globally) (preset-react and preset-env)
    yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

both script tags in index.html 
    <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>


---Things needed on new project-------
yarn init (run on command line)
create a public folder (what is displayed in the browser)
index file needs to include the react packages 


----- Things needed to run on terminal to run the program ---- 
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
live-server public
    https://www.npmjs.com/package/live-server (options reference) (public means the public folder)

!!!! if have scripts set up in package.json then just do: 
need to install babel and live server as local modules by 

yarn add live-server babel-cli@6.24.1
or just run 
yarn install 

yarn run {name} 
i.e. yarn run build 
     yarn run serve 


-------If delete folder and need to reimport or importing somebody else's work---------
copy files to desired directory
yarn install 

