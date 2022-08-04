build:
	npm run dev
	cp -r res bundle
	cp scripts/manifest.json bundle
	echo "Successfully Bundled"