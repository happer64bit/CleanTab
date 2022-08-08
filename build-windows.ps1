npm run build                               # bundle source code

Copy-Item res/ bundle/                      # Copy res folder to bundle folder

Copy-Item .\script\manifest.json bundle\
Copy-Item .\res\icon_128.png .\bundle\res

Remove-Item bundle/*.map

Write-Output "Successfully compiled to bundle folder"
