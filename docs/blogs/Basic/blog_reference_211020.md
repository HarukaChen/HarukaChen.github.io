---
title: 基于GitHub Pages 的Blog 维护-LTS
date: 2021-10-20
sidebar: "auto"
categories:
  - Web
tags:
  - git
  - shell
  - vuepress
---

## 基础使用

### 写作位置
在```/docs/blogs```文件加中创建md文件开始写作。
### 部署前检查
在在myBlog根目录下运行
```shell
yarn run dev
```
即可本地8080端口打开页面检查部署效果。
### 上传
在myBlog根目录下运行
```shell
bash update.sh
```
即可将编辑内容上传到主分支。
### 部署到GitHub Pages
在myBlog根目录下运行：
```shell
bash deploy.sh
```
或者
```yarn
yarn run depoly
```
即可推送编辑内容到pages分支，并部署到GitHub的静态页面上。
## 配置说明
### 修改主题样式
在```/docs/.vuepress/config.js```中修改。
### 安装插件
在文件package.json中的devDependencies下加入"插件名": "版本号",如：
```json
"devDependencies": {
    "vuepress": "^1.8.2",
    "vuepress-theme-reco": "^1.6.6",
    "@maginapp/vuepress-plugin-katex": "^1.0.11",
    "vuepress-plugin-nuggets-style-copy": "^1.0.3"
}
```
接着在```/docs/.vuepress/config.js```中配置plugins,如：
```json
 plugins: [
      "vuepress-plugin-nuggets-style-copy",
      "@maginapp/vuepress-plugin-katex"
 ]
 ```
### 进一步修改主题
主题的启动流程为：未指定config的情况下，系统会默认检查```/docs/.vuepress/theme```，可以在theme文件中编辑修改主题配置。
颜色方面可以配置``` /docs/.vuepress/styles/palette.styl ```来快速修改主题的一些颜色属性。VuePress会先于前面提到的index.styl解析palette.styl 中的全局变量，之后再作用于主题的各个样式。

## 鸣谢
本博客的特别技术支持是kcqnly。
他的 Github 主页是[链接](https://github.com/kcqnly)。

