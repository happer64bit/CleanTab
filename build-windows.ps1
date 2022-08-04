npm run build                               # bundle source code

Copy-Item res/ bundle/                      # Copy res folder to bundle folder

Copy-Item .\script\manifest.json bundle\

echo "Successfully Build to bundle folder"
