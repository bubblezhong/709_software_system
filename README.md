# 软件管理系统软件管理系统软件管理系统

## 启动

首先确保 `SoftwareManage17/`、`SoftwareManage17/backendTest`、`SoftwareManage17/frontend` 等目录都已经安装上了所需要的包，你也可以使用下面的命令一次安装：

```
$ npm run i
```

用户测试的 node.js 后端：


```
$ npm run start:backendTest
```

由 React.js 构建的前端：

```
$ npm run start:backendTest
```

## 编译项目

```shell
# 给 `build.sh` 添加可执行权限
$ sudo chmod +x build.sh
# 编译
$ ./build.sh
```

## 数据库操作

使用 oracle 账户登录服务器。

```
$ ssh -o ServerAliveInterval=60 oracle@114.215.30.227
```

####


## TODO

+ react-router 动态加载、webpack 分片


## 资料

+ [分别使用 XHR、jQuery 和 Fetch 实现 AJAX](http://nodejh.com/post/ajax-xhr-jquery-and-fetch-api/)
+ [create-react-app](https://github.com/facebookincubator/create-react-app)
+ [react-router动态路由与Webpack分片thunks](http://robin-front.github.io/2016/04/18/react-router%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E4%B8%8EWebpack%E5%88%86%E7%89%87thunks/)




##

+ 登记类型： （数据字典）
  （开机  关机 故障 重启 升级维护）
+ 登记时间
+ 软件名称（从软件列表选择）
+ 现象描述
+ 使用单位（默认当前用户所在单位 不可编辑）
+ 登记人（默认当前用户，可编辑）
