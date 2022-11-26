# 一、vue的简介

v2: 是将vue构造函数引入进来，是实例化对象进行函数引入和挂载调用render函数进行页面加载，h函数进行页面挂在

### 1.5vue周边库

vue-cli: vue 脚手架
vue-resource
axios
vue-router: 路由
vuex: 状态管理
element-ui: 基于 vue 的 UI 组件库(PC 端)

# 二、初始vue

### 2.1安装环境

全局安装node环境,检查node版本
"npm
源: 外网源 淘宝镜像源

全局安装vue-cli脚手架

创建项目

### 2.2创建项目

# 三、项目的目录

![image-20221126154846774](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221126154846774.png)

### 3.1项目简介

vue.config.js ----- 配置webpack文件(包括配置跨域,请求接口,第三插件配置,rule配置）
Package.json ---
	scripts: 配置启动命令,打包命令,eslint校验代码命令
	browserslist: 浏览器适配配置
	devDependenciesdependencies: 项目node-modules大版本的限制
	^: 最大兼容版本
	~: 大约在这个版本上下就行
package-lock.json
	约束每个node-modules版本下的其他依赖的固定版本
babel.config.js: babel插件设置
.gitignore: 忽略文件
Public: 公共入口文件和公共配置配置
src 放置组件和axios配置
	Assets -- 放置图片.img.css.js
	components -- 放置其他组件所需要的公共组件
	router -- 配置路由表,(动态路由,静态路由,权限路由
	store -- 存放vuex的仓库

​	Views -- 放置页面的地方
​		Home
​		App.vue 入口的总文件
​		main.js 实例化vue挂载
Utils -- 所有封装axios,封装token,封装公共方法-----工具类文件

### 3.2 vue的语法

1.插值语法({})
2.动态绑定 v-bind()
3，条件渲染: v-if v-else
概念: 控制dom元素的创建和销毁,实现渲染和更新页面
特点: 如果没有v-else的存在,会在dom元索被删除的地方,添加一个标识,在下次进行重新染的时候,优先寻找有标识的地方,尽量减少dom的循环和查载
4.v-show
1.通过添加或者移除 display: none样式进行控制dom元素的显示与隐藏

5.v-for
1.Key: 作用为了防止Dom元素的重复渲染,如果以index为key的话会造成页面的多次渲染和渲染不同

2.diff算法对比节点: 同级节点对比,确认和获取每个节点,通过key标识来进行对比



