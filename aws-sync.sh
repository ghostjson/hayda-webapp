
echo "Starting Building Application"
sudo npm run build --prod

echo "Synchronize files with cloud"
sudo aws s3 sync ./dist/ s3://hayda-web-application/