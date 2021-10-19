#!/bin/sh
git init
git add .

# 提交修改

git commit -m "[update] update blog"

# git push

git push -f origin master

echo "finished"