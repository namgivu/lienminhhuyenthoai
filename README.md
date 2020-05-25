# lienminhhuyenthoai
My version of league of legend web portal to collect the helpful info to play this game that not easy to google from the internet or from offical riot game itself.

# install-run @ localhost
require node+yarn - recommended install via nvm ref. bit.ly/nnnodejs

node version TODO by now use latest
yarn version TODO by now use latest

command notes
```bash
# install node+yarn
nvm install node ; nvm use node ; node --version    ; shuold_see='v14.3.0'  # install node 
npm install -g yarn             ; yarn --version    ; should_see='1.22.4'   # install yarn

# install app package
npm install

# run app 
npm start  # should see web app opened in your local browser as [snapshot](./doc/run-localhost-200523.png)
```


# install & run with docker
```bash
cd /path/to/git/clone/lienminhhuyenthoai
    docker build -t lienminhhuyenthoai:DEV   .
    #            docker image name     env   source_folder

    docker run --name lmht            -d                  lienminhhuyenthoai:DEV
    #          container name as kc   run as daemon
    #                                 run as background   docker image name

```


# task note
```
Create a blank reactjs web app so that we can make a docker image from it on dockerhub and deploy it to the cloud.
# done                                        todo                                         todo             

Should we reove package.lock?
# todo Kien

Make package.json smallest to run plain helloworld
