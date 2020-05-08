mkdir ..\deploy
cd ..\deploy
git clone https://heroku:$(heroku.token)@git.heroku.com/$(heroku.appname).git .
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