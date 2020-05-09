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
Add the following to your pipeline (note any secret variables need to be mapped in when you setup the pipeline powershell tasks under environment variable fields)

- heroku.token (secret) - access token, you can create one with your local heroku cli logged in and run
  'heroku authorizations:create --description="<useful name>" --short' then login to heroko website and retrieve the token
  from https://dashboard.heroku.com/account/applications
- heroku.appname - name of application registered in heroku eg my-app
- git.name (secret) - for git details when pushing repo to heroku
- git.email (secret)

Devops pipeline scripts
Add the following powershell scripts to your pipeline (this includes building the app)

- build.ps1
- test.ps1 (add a Publish test results task after this script to process the test-report.xml (JUnit report) in the root)
- deployToHeroku.ps1 located in azure-pipeline-files

Notes: because heroku has limited deployment methods, git deployment results in heroku requiring a passing build to complete (however the build is done on azure devops), added "heroku-postbuild": "" to package.json "scripts" section to pass the build
