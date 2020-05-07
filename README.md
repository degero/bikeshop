# Bikeshop

## Description

Example site using react + redux for crud actions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

react / redux / json-server

## Deployment

Azure Devops - See azure-pipeline-files for scripts

### Heroku Deployment

Devops pipeline variables
Add the following to your pipeline

- heroku.token - access token, you can create one with your local heroku cli logged in and run
  'heroku authorizations:create --description="<useful name>" --short' then login to heroko website and retrieve the token
  from https://dashboard.heroku.com/account/applications
- heroku.appname - name of application registered in heroku eg my-app

Devops pipeline scripts
Add the following powershell scripts to your pipeline (this includes building the app)

- build.ps1
- deployToHeroku.ps1 located in azure-pipeline-files

Notes: because heroku has limited deployment methods, git deployment results in heroku requiring a passing build to complete (however the build is done on azure devops), added "heroku-postbuild": "" to package.json "scripts" section to pass the build
