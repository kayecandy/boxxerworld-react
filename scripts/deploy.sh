eval $(egrep -v '^#' .env | xargs)

ssh $SSH_HOST "cd $SSH_PATH; 

git fetch; 
git reset --hard $GIT_DEPLOY_BRANCH; 

pm2 delete $PM2_NAME; 
npm install; 
npm run build; 
pm2 start npx --name \"$PM2_NAME\" -- next start -p $DEPLOY_PATH; 
pm2 logs $PM2_NAME"