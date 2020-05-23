# create server instance
- choose digitalocean as cloud provider aka :do - cloud server instance on :do is called droplet
- create :do droplet 
- set PS1
- create swapfile ref. bit.ly/nnswapfile
- create lmht sudoer user [view detail](./create-user-sudoer.md)
    - format bash prompt
      PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
