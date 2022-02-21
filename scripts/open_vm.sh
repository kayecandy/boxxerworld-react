eval $(egrep -v '^#' .env | xargs)

ssh -t $SSH_HOST "cd $SSH_PATH; 


pm2 delete $PM2_NAME; bash --login"