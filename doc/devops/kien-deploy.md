##Deploy React App to VPS

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
```
sudo nginx -t
```


#Check Hello World in user's browser (via IP VPS)

#install npm + nodejs by using nodesource (https://github.com/nodesource/distributions).
Recommend using ver 12 (now) - stable version (LTS).

--install curl
sudo apt-get install curl

--install npm + nodejs 
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

#Deploy
--clone project into /var/www/{your_project} (for better management)

--tell Nginx to serve the New Html File (in build folder) by modifying the default nginx config file:
```
sudo vim /etc/nginx/sites-available/default
```

Change this line to the new directory:
> root /var/www/example.com/html; --> /var/www/{your_project}

--Check configure file to make sure no syntax errors:
sudo nginx -t

--Restart nginx: 
sudo systemctl restart nginx









