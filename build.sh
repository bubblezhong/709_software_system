#!/bin/bash
cd frontend/
npm run build
rm -rfv ../backendTest/public/static
rm ../backendTest/public/asset-manifest.json
rm ../backendTest/views/index.ejs
cp -r build/static ../backendTest/public/
cp build/asset-manifest.json ../backendTest/public/
cp build/index.html ../backendTest/views/index.ejs
cd ../
