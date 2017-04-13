# Simple POS with ExpressJS, NodeJS and Firebase SDK 3
A simple Point-of-sale application and website built with **ExpressJS** and **NodeJS**. The app features a **Firebase** backend and authentication. View the current release at <a href="https://tastebytes-e421e.appspot.com" target="_blank">tastebytes-e421e.appspot.com</a>.

- ExpressJS `4.15.2`
- Firebase SDK `3.7.5`
  - JSON Datastore
  - Simple email/password OAuth authentication. Support for Google/Twitter/Github possible later
- Google App Engine Hosting
- Semantic UI with SASS
- Handlebars


CMPS 115 Class Files
--------
All class files can be found under the <a href="https://github.com/TasteBytes/dashboard/tree/master/CMPS115" target="_blank">CMPS115 folder</a>.

Quick Start
-----------

Ensure you have the latest version of node and npm installed. You can install these @ https://nodejs.org/en/

```shell
$ git clone https://gitlab.com/tasteBytes/dashboard
$ cd dashboard
$ npm install
$ npm run-script run
```
The server will now be open at localhost:3000 and will restart with any changes to the project.

## Deploying to Google App Engine
#### Prerequisites:
- Make sure that you have privilege to deploy
- Install the Google Cloud SDK <a href="https://cloud.google.com/sdk/" target="_blank">Grab it here</a>

```shell
$ cd dashboard
$ npm run-script deploy
```

This will deploy to google app engine @ <a href="https://tastebytes-e421e.appspot.com" target="_blank">tastebytes-e421e.appspot.com</a>.

Commands
--------

|Script|Description|
|---|---|
|`npm start`|Necessary command to deploy to google app engine.|
|`npm run-script run`|Start the express server @ `localhost:3000`; watches for changes to re-run the server on change.|
|`npm run-script deploy`|Starts the deployment process to google app engine|
|`npm test`|Run unit tests with Karma and Jasmine|
