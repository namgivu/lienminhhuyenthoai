Dockerfile --docker build--> docker image --docker run--> docker container
file                         image                        os instance
                                                          virtual machine

#TODO Kien collect slack chat guide to this doc

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