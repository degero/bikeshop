$env:NODE_ENV="production"
Remove-Item .\build -Recurse -Force -Confirm:$false
npm run build;
mkdir package ; mkdir package/build ; copy -R ./build/* ./package/build ; copy json-server.js ./package/app.js ; copy db.json ./package/db.json;
# For windows app service deploy (windows paths) Compress-Archive -Path .\package\* -DestinationPath .\package.zip
# For linux app service deploy (linux paths) 
.\utils\7za.exe a -r .\package.zip .\package\*
Remove-Item .\package -Recurse -Force -Confirm:$false
az webapp deployment source config-zip --src ./package.zip --name chadcrates3 --resource-group sandpit --verbose
Remove-Item .\package.zip -Force -Confirm:$false