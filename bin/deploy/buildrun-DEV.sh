#!/usr/bin/env bash
s=$BASH_SOURCE ; s=$(dirname "$s") ; s=$(cd "$s" && pwd) ; SCRIPT_HOME="$s"  # get SCRIPT_HOME=executed script's path, containing folder, cd & pwd to get container path
a="$SCRIPT_HOME/../.."; a=$(cd "$a" && pwd); APP_HOME=$a; ROOT="$APP_HOME/../../.."; ROOT=$(cd "$ROOT" && pwd)


 b=deploy/DEV && git fetch && git checkout $b && git pull &&  git --no-pager log -1 && $APP_HOME/docker/build.sh && $APP_HOME/docker/run.sh