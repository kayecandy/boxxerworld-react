set NODE_ENV=production

call next build
type nul >out/.nojekyll
git add out/.
git commit -m "Deployment"
git push