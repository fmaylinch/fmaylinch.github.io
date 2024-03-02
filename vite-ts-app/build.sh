# build vite
npm run build
# remove old build files
rm ../index.html
rm -R ../assets
rm -R ../vite-public
# move new build files
mv dist/* ..
