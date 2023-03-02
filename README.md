# Bikeshop

[![Board Status](https://dev.azure.com/weylandcorp/733f58eb-f0fa-47ad-a944-2e29975fb82b/d5c4a1fd-d021-47d3-8d57-9499052aae5f/_apis/work/boardbadge/eb94509f-4ad5-43de-98b0-c6cc5a1b5074)](https://dev.azure.com/weylandcorp/733f58eb-f0fa-47ad-a944-2e29975fb82b/_boards/board/t/d5c4a1fd-d021-47d3-8d57-9499052aae5f/Microsoft.RequirementCategory/)

## Description

Example site using react + redux for crud actions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started
npm i
npm run prestart:api
npm start (note if run-p has errors run npm i -g npm-run-all)

## Development

To launch: 'npm start'
To Debug: In vscode use .vscode/launch.json (attaches to API on debug port 9299)

## Production
Ensure you set the REACT_APP_<val> env env vars before building app in your CI (npm build)
Use 'node server.js' on heroku
OR 'npm i json-server && node json-server.js' as startup command on Azure app service

## Dependencies

react / redux / json-server

## Deployment

Azure Devops - See .\azure-pipeline-files for scripts these have REACT_APP_ env vars injected on the build

### Heroku Deployment

There are two deployment options:

- Heroku git repo (pipeline-heroku-git.yaml)
- Heroku docker registry (pipeline-heroku-docker.yaml)

NOTE: because heroku has limited deployment methods, git deployment results in heroku requiring a passing build to complete (however the build is done on azure devops), added "heroku-postbuild": "" to package.json "scripts" section to pass the build

### Devops pipeline variables

Add the following to your pipeline (note any secret variables need to be mapped in when you setup the pipeline powershell tasks under environment variable fields)

- heroku.token (secret) - access token, you can create one with your local heroku cli logged in and run
  'heroku authorizations:create --description="<useful name>" --short' then login to heroko website and retrieve the token
  from https://dashboard.heroku.com/account/applications
- heroku.appname - name of application registered in heroku eg my-app
- git.name (secret) (for pipeline-heroku-git.yaml only)
- git.email (secret) (for pipeline-heroku-git.yaml only)

### Devops pipeline scripts

You can use the provided yaml pipeline definitions or add the following powershell scripts to your custom created pipeline

- Powershell task - build.ps1
- Powershell task - test.ps1
- Publish test results task - process the test-report.xml (JUnit report) in the root folder

For git deploy

- Powershell task - deployToHeroku.ps1

For docker deploy

- Docker task - login (connect to heroku repo, you can use \_ as the username and an api key as the password - https://devcenter.heroku.com/articles/container-registry-and-runtime#using-a-ci-cd-platform)
- Docker task - buildAndPush (point to the Dockerfile-heroku)
- Docker task - logout
