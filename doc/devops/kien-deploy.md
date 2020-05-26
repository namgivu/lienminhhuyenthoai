##Deploy React App to VPS

#create demo react app in local
```
npx create-react-app lienminhhuyenthoai
```

#Install nginx
--Update local packages 
```
sudo apt update
sudo apt install nginx
```

command notes: 
--start / stop /restart nginx
```
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
```

--reload without dropping connections (for making configuration changes)
```
sudo systemctl reload nginx
```

--verify nginx config
```bash
sudo nginx -t
    should_see='
    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful
    '
```


#Check Hello World in user's browser (via IP VPS)

#Install npm + nodejs by using nodesource (https://github.com/nodesource/distributions).
Recommend using ver 12 (now) - stable version (LTS).

--install curl
```
sudo apt-get install -y curl
```

--install npm + nodejs 
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```


#Deploy
--clone project into /home/lmht/lienminhhuyenthoai (for better management)

--install all packages in project and build production folder (/build)
```
sudo yarn install
sudo yarn build
```

--tell Nginx to serve the New Html File (in build folder) by modifying the default nginx config file:
```
sudo vim /etc/nginx/sites-available/default
```

Change this line to the new directory:

server {
	listen 80 default_server;
	listen [::]:80 default_server;
        root /var/www/example.com/html; <-- change this line
...}

to this: 

  --> root /home/lmht/lienminhhuyenthoai 

--Check configure file to make sure no syntax errors:
```
sudo nginx -t
```

--Restart nginx: 
```
sudo systemctl restart nginx
```
