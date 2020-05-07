mkdir ..\deploy
cd ..\deploy
git clone https://heroku:607ec359-91ae-45aa-8155-ceb2339346fc@git.heroku.com/bikeshop-react.git .
mkdir build
cd build
xcopy ..\..\build . /S /Y
cd ..
xcopy ..\package.json . /Y
xcopy ..\server.js . /Y
xcopy ..\Procfile . /Y
git add .
git commit -m "Azure devops deploy"