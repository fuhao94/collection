#!/usr/bin/env sh

echo '开始执行命令'
# 生成静态文件
echo '执行命令：yarn build'
yarn build

# 进入生成的文件夹
echo "执行命令：cd ./dist\n"
cd ./dist

# 初始化一个仓库，仅仅是做了一个初始化的操作，项目里的文件还没有被跟踪
echo "执行命令：git init\n"
git init

# 保存所有的修改
echo "执行命令：git add -A"
git add -A

# 把修改的文件提交
echo "执行命令：commit -m 'deploy'"
git commit -m 'deploy'

# 发布到 https://<fuhao94>.github.io/<REPO>
git push -f https://github.com/fuhao94/collection.git master:gh-pages

# 返回到上一次的工作目录
echo "回到刚才工作目录"
cd -
