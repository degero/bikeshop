Write-Host "Staring deploy for $Env:SYSTEM_TEAMPROJECT"
rm -r -fo .\heroku-deploy
mkdir .\heroku-deploy
cd .\heroku-deploy
Write-Host "Retriving heroku git for $Env:HEROKUAPPNAME.git"
git clone https://heroku:$Env:HEROKUTOKEN@git.heroku.com/$Env:HEROKUAPPNAME.git .
mkdir build
cd build
xcopy ..\..\build . /S /Y
cd ..
xcopy ..\package.json . /Y
xcopy ..\json-server.js . /Y
xcopy ..\server.js . /Y
xcopy ..\db.json . /Y
xcopy ..\Procfile . /Y
git add .
Write-Host "Setting git $Env:GIT_NAME"
git config user.name $Env:GIT_NAME
git config user.email $Env:GIT_EMAIL
git commit -m "Azure devops deploy"