mkdir .\heroku-deploy
cd .\heroku-deploy
git clone https://heroku:$Env:HEROKTOKEN@git.heroku.com/$Env:HEROKAPPNAME.git .
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
Write-Verbose "Setting git $Env:GIT_NAME"
git config user.name $Env:GIT_NAME
git config user.email $Env:GIT_EMAIL
git commit -m "Azure devops deploy"