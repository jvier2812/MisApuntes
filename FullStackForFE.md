# Full Stack for Front-End Engineers,V2 
Instructor: Jem Young (Netflix)
Platform: frontendmasters.com

### Server Setup

#### DNS
DNS Records:
A record: maps name to ip address
CNAME: maps name to name 

@ -> example.com
www -> www.example.com 

#### server setup
1. update software
```bash
// update software
apt update
// upgrade suftware
apt upgrade
```

2. create a new user 
add new user
```bash
adduser $USERNAME
```

3. make that user a super user 

add user to "sudo" group 
```bash
# usermod -aG sudo $USERNAME
```

switch user
```bash
# su $USERNAME
```

check sudo access
```bash
$ sudo cat /var/log/auth.log
```
change to home directory, create a new directory (if it doesnt exist)
```bash
$ cd ~
$ mkdir -p ~/.ssh
```
create authorized_keys file and paste PUBLIC key
```bash
$ vi ~/.ssh/authorized_keys
```
4. enable login for new user
 
5. disable root login 
```bash
//change file permissions
$ chmod 644 ~/.ssh/authorized_keys
//disable root login(permit root login: no, line)
$ sudo vi /etc/ssh/ssh_config
//restart ssh daemon
$ sudo service sshd restart
```

### NGINX

-Reverse proxy, web server, proxy server, file server, etc

```bash
//install nginx
$ sudo apt install nginx

//start nginx
$ sudo service nginx start
```

domain -> ip -> nginx -> ? 


//show nginx configuration
```bash
$ sudo less /etc/nginx/sites-avaliable/default

// create and edit index.html
$ sudo vi /var/www/html/index.html
```

### NODEJS 
It is essentially just a js engine that runs on top of V8 
```bash
// install nodejs and npm
$ sudo apt install nodejs npm

// install git (to clone your project)
$ sudo apt install git 
```

## PART 4 - MASTER OF THE STACK 

### Aplication architecture
basic: 
ui {css, js, html}


https://expressjs.com/en/starter/hello-world.html

edit nginx config, the reload nginx ($ sudo service nginx reload) 
```
location / {
  proxy_pass http://127.0.0.1:3000/; 
}
```
domain -> ip -> nginx -> nodejs


### Process manager
-keeps your apps unning , handles errors and restarts, can handle loggin and clustering. 

```
//install pm2
$ sudo npm i -g pm2

//start pm2
$ pm2 start app.js

//setup auto restart
$ pm2 startup 
```
```
```

