#!/usr/bin/env bash
s=$BASH_SOURCE ; s=$(dirname "$s") ; s=$(cd "$s" && pwd) ; SCRIPT_HOME="$s"  # get SCRIPT_HOME=executed script's path, containing folder, cd & pwd to get container path
a="$SCRIPT_HOME/../.."; a=$(cd "$a" && pwd); APP_HOME=$a; ROOT="$APP_HOME/../../.."; ROOT=$(cd "$ROOT" && pwd)

cd ~/lienminhhuyenthoai
  b=deploy/DEV && git fetch && git checkout $b && git pull &&  git --no-pager log -1 && ./docker/build.sh && ./docker/run.sh
cd - 1>/dev/null
