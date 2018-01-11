# 测试服务器

+ 端口在 config/config.js 中配置，默认为 5000
+ 统一在 app.js 中开启跨域访问
+ 统一返回 JSON


## 启动

测试服务器使用 `supervisor` 来启动项目，如果文件有改动，`supervisor` 会自动重启。所以需要先安装：

```
$ npm i supervisor -S
```

然后启动：

```
$ npm start
```
