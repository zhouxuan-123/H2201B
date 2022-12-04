# Vux知识点总结

## vuex是什么

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态。

## 市场上同类型的状态管理工具有

1.react

​	(1)Recoil[1]

​	(2)MobX[2]

​	(3)XState[3]

​	(4)Redux (with hooks)[4]

​	(5)Context

2.vue

​	(1)vuex

3.vue3

​	(1)pinia

状态管理工具,因为语言发展的历史,react的问世早于vue,所以很多状态管理工具都是为react服务的,vuex是专门为Vue服务的，吸取了redux的单数据管理,去掉了redux的限制,更加适合vue.所以vue选择了,vuex,当然也能用其他的,但是会比vuex复杂很多

## 核心及使用

1.state 存储数据 组件中使用 this_$store.silate.”

2.rmulalians 对象 里面是方法 可以直接操作slale中的数据

注意: cormmit只能传一个参数 如果需奖传递多个数据用复杂数据类型 比如 数组 对象

同步数据
在组件中 this.Ssre.commit(“模块名/方法名”,参数)

3.getters 是最state中的数套做逐组处理 类似于计算属性

在组件中 this.Sstore.getters.方法名
在模块中同理: this.sslor.getters.模块名方法名

4.actions 也是可以操作数据，但是不能直接操作数据 它调用mutations中的方法来操作的数据

actions中的方法是异步的 mutations中的方法是同步的
在组件中异步修改数据:
在组件中通过dispich调用actiong中的方法，在actlons中调用mutatons中的方法，在mutations中可以直接操作state中的数据在组件中 this.Sstore.cispalch(“模块名/方法名”，参数)

## 5大核心

state

mutations

actions

getters

modules

## vuex的运行原理

在组件中通过dispatch调用actions中的方法，在actions方法中commits调用mutations中的方法，在mutations中的方法中可以直接操作state中的数据，只要state中的数据发生改变就会立刻响应到组件的视图上。 (异步)
在组件中通过commit调用mutations中的方法，在mutations中的方法中可以直接操作state中的数据，只要state中的数据发生改变就会刻响应到组件的视图上。 (同步)

## vuex中的数据刷新丢失怎么办 (vuex的数据持久化)

1.手动的将数据添加到本地存储中

2.可以使用vuex数据的持久化
	下载插件
	cnpm install vuex-persistedstate --save
	导入插件 store
	import persistedState from 'vuex-persistedstate'
	挂载插件
	默认的使用localStorage
	plugins: [persistedState()]
	还可以配置成sessionStorage
	plugins: [persistedState(fstorage: window.sessionStorage])]

## vuex的运用场景

Vuex是通过全局注入store对象，来实现组件间的状态共享.

总之，假如你需要 数据 和 组件 分离，分别处理，那么使用 uex 是非常合适的相反，如果不需要分离处理，那么不使用 Vuex 也没关系。比如某个数据只跟某组件打交道，是强褐合的。那么这个数据就应该存放在该组件的 data 属性中
如果只是简单的父子组件间传递数据，使用vuex未免有点大材小用，其实只用使用组件间常用的通信方法即可，在大型复杂的项目中《多级组件嵌意》，需要实现一个组件更改某个数据，多个组件自动获取更改后的数据进行业务逻担处理，这时候传用vuex比较合适。
涉及到非父子关系的组件，例如兄弟关系、祖孙关系，甚至更远的关系;他们之间如果有数据交互，需要数据和组件的分离，那么应该使用Vuex来实现:如果页面复杂度比较低的话，也可以考虑使用 global-event-bus 来实现;如果只是父子关系的组件数据交互，那么应该考点使用props进行单向传递;如果涉及到子组件向父组件的数据传递，那么应该考总使用 emmil利on;

## 映射函数和组件方法的对应关系

mapState---->this.$store.state

mapActions----> this.$store.dispath

mapGetters-->this.$store.getters

mapMutations-->this.$store.commit

1.分模块
	mapState(模块名/方法名，值
	mapState(模块名,[方法名,值])

​	不分模块

​	mapState('方法名'，'值')

2.使用地方
	mapState------>computed
	mapActions -----> methods
	mapGetters ---> computed
	mapMutations ---> methods
3.如何进行分模块操作
	1.新建modules文件
	2.在文件夹中新建每个模块的js文件: 例如 user.js

​	第一种写法：

![image-20221204151103653](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221204151103653.png)



namespaced是用来隔离开启独立的作用域

第二种写法：

![image-20221204151150151](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221204151150151.png)

3.getters独立创建一个文件，和index.js同级 新建一个getter.js

![image-20221204151807635](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221204151807635.png)

4.在新建一个index.js文件中引入

![image-20221204151909850](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221204151909850.png)