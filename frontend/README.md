# 前端

使用 `create-react-app` 工具构建工程，基于 `ant-design` 构建页面。

## 启动

```
$ npm start
```


## TODO

#### 逻辑

+ 对于树来说，没有 parent_id 的项，其 parent_id 为 0

#### 前端

+ [ ] 根据谱系id查询所拥有的带版本软件和不带版本软件


#### 后端 Fix Bug

+ [ ] 修改的时候，谱系不能作为自己的父级谱系 -- 
+ [ ] 谱系有子谱系的时候，不能删除?还是连子谱系都删除了？谱系有软件，则不能删除
+ [ ] addSoftwareModules 单元少了一个单元规模
+ [ ]  "id": 0 和 "id":1 是什么 ==> http://114.215.30.227:8081/api/v0.1/getsoftwaresoftwareModulesList
+ [ ] 软件信息还包括单元列表（从单元表里面查询）、版本列表（从软件版本表查询）
+ [ ] 软件信息需要直接查询出软件谱系名称，而不只是ID getsoftwaresoftwareModulesList ==> module_list, version_list
+ [ ] update software 更新软件

#### 

软件版本显示列表

context


#### 入库

- [ ]我的任务，显示我所有需要审批的列表


#### 用户管理

单位查看所有单位

TODO 单位列表树 1表示顶级单位.do not delete