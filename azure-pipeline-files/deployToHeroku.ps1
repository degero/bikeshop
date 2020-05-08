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
git commit -m "Azure devops deploy"