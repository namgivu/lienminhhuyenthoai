```bash
export u='lmht'

# create user with bash as shell ref. https://askubuntu.com/a/830836/22308  
sudo useradd -m                      $u          -s /bin/bash 
#            -m aka --create-home    user name   shell as bash

    # in case need to remove user
    sudo userdel -r $u; ls /home | grep $u ; should_see_not_found=''

# grant sudoer
sudo visudo 
    then="add this line to the end
$u ALL=NOPASSWD: ALL
"

# grant ssh 
sudo su $u
    mkdir ~/.ssh/
    nano  ~/.ssh/authorized_keys
    then="paste $u's pub key here"   # kien pub key ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAsadmJ11Lo6YWgDZGf8DavbmLTNUoAhXC2b6mrXkaoEDnhPohCu3KDi7nuLpRBz86cy86mjKHtq0w8g380vnozoN58nbkfMdjTYKjyyxhAHeHP/x36ufHpuDnPo+QwS++UmQpuY7vMM0HGlcQFTvqeGnVwSt+G3v9X6dpdX3JSDLduX5H1iCkq1SwHiu/Q2Yw9Ivr9hCMkUdjB4FNVnCGKal8RsswGTbTCvwZ3SDOeTMqhxZpVrkKx6S296k4p3mp+mqTbzAVMgoEaSk0c9+2UtKSTYOBxHTD3VCScTngHPq3nHGtrJfnucdmMey2uYm4rn+ie1XoQjdh9WSgzA1JnQ== kevin-rsa

    # must set the right ssh folder permission ref. https://askubuntu.com/a/428034/22308 
    export u='lmht'
        sudo chown -R $u:$u "/home/$u/.ssh"
        sudo chmod 0700     "/home/$u/.ssh"
        sudo chmod 0600     "/home/$u/.ssh/authorized_keys"

# aftermath test
sudo su $u -c 'echo $USER' || echo "Something not right - cannot sudo echo as user $u"

: from localhost machine, try ssh
ssh "$u@:HOST_IP"
