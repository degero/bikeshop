Write-Host "Staring deploy for $Env:SYSTEM_TEAMPROJECT"
if (Test-Path .\heroku-deploy) { rm -r -fo .\heroku-deploy }
mkdir .\heroku-deploy
cd .\heroku-deploy
Write-Host "Retriving heroku git for $Env:HEROKUAPPNAME.git"
git clone https://heroku:$Env:HEROKUTOKEN@git.heroku.com/$Env:HEROKUAPPNAME.git .
if (Test-Path .\build) { rm -r -fo .\build }
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
Write-Host "Commit and Push to heroku"
$GitDetails = $Env:GITNAME + " <" + $Env:GITEMAIL + ">"
git config user.name "$Env:GITNAME"
git config user.email "$Env:GITEMAIL"
git commit -m "Azure devops deploy" --author=$GitDetails
git push https://heroku:$Env:HEROKUTOKEN@git.heroku.com/$Env:HEROKUAPPNAME.git 