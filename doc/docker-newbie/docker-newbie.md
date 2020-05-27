# basic flow
Dockerfile   --docker build-->   docker image   --docker run-->   docker container
file                             image                            os instance aka virtual machine


# command note
- List all running containers
```
docker ps 
```

- List all stopped & running containers
```
docker ps -a
```

- List all images:
```
docker image ls 
```


- Remove  all dockers' resources (container, network, volume)  
```
docker container prune  #TODO Kien thisi only prune container, not for network and volume?
```

```bash 
cd /path/to/git/clone/lienminhhuyenthoai/doc/docker-newbie

    docker build -t kien_image       .
    #            docker image name   source_folder

    docker run --name kc              -d                  kien_image
    #          container name as kc   run as daemon
    #                                 run as background   docker image name

    docker exec -it kc               sh
    # execute       container name   shell as sh

    output='
    / # ls
    bin    etc    lib    mnt    proc   run    srv    tmp    var
    dev    home   media  opt    root   sbin   sys    usr
    '
