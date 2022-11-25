# class继承

			 1.概念:

ES6 提供了更接近传统语言的写法，引入了 class (类) 这个概念，作为对象的模板
作用：
通过~class关键字，可以定义类
优点：
新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

4.class get set 1.灵活性 2.安全性

5，class static定义方法概念:类 (class) 通过 **static** 关键字定义静态方法特点:不能在类的实例上调用静态方法，而应该通过类本身调用。这些通常是实用程序方法，例如创建或克隆对象的功能。

6.类的继承
关键字: extehds
关键方法 super()盗用构造函数 // 父类.call(this)



# 数值的拓展

## 二进制和八进制表示法

ES6 提供了二进制和八进制数值的新的写法，分别用前缀`0b`（或`0B`）和`0o`（或`0O`）表示。

ES6 进一步明确，要使用前缀`0o`表示。

1.Number.EPSILON 表示最小精度
数组的方法 Math.abs: 取绝对值a-b]1-21

2.十进制 1,2,3 0.2

3.Number.isFinite检测一个数值是否为有限数 小数和长度是有限的，无线数表示是位数是无止尽的
4.Infinity 无穷大
5.Number.isNaN 判断一个数值是不是NAN
6.Number.isInteger 判断一个数是不是整数
7.Number.parsetInt Number.parseFloat将全局方法`parseInt()`和`parseFloat()`，移植到`Number`对象上面，行为完全保持不变。可以逐步减少全局性方法，使得语言逐步模块化。

8.Math.trunc 将数字的小数部分抹掉
9Math.sign 判断一个数到底为正数 负数 还是零 返回值不是true和false 而是 为正数的时候 返回1，负数的时候返回-1 0的时候返回0



# 数组的扩展

1. [扩展运算符](https://es6.ruanyifeng.com/#docs/array#扩展运算符)

   应用:

   1.复制数组

   2.合并数组

   3.与解构赋值一起使用

   4.字符串  扩展运算符还可以将字符串转为真正的数组。

2. [Array.from()](https://es6.ruanyifeng.com/#docs/array#Array.from())

   `Array.from()`方法用于将两类对象转为真正的数组

   如果参数是一个真正的数组，`Array.from()`会返回一个一模一样的新数组

3. [Array.of()](https://es6.ruanyifeng.com/#docs/array#Array.of())

   `Array.of()`方法用于将一组值，转换为数组。

   实例方法:

   entries():entries0是对键值对的遍历

    keys():keys0是对键名的遍历

    values():values0是对键值的遍历
   entries0，keys0和values一用于遍历数组。它们都返回一个遍历器对象

    includes():includes方法返回一个布尔值，表示某个数组是否包含给定的值，与宇符串的includes方法类似。

   flat():flat0用于将嵌套的数组“拉平”，变成一维的数组，该方法返回一个新数组，对原数据没有影响

   flat0默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组可以将fat0方法的参数写成一个整数，表示想要拉平的层数，默认为1

   flatMap():flatMap0方法对原数组的每个成员执行一个函数该方法返回一个新数组，不改变原数组。

   flatMap0只能展开一层数组。

    Array.prototype.sort():这个方法是用来进行排序的

## 扩展运算符

扩展运算符（spread）是三个点（`...`）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

该运算符主要用于函数调用。

# 对象的扩展

## 属性的简洁表示法

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

## 方法的 name 属性

函数的`name`属性，返回函数名。对象方法也是函数，因此也有`name`属性。

## 属性的遍历

有 5 种方法可以遍历对象的属性

**（1）for...in**

`for...in`循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）

**（2）Object.keys(obj)**

`Object.keys`返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名

**（3）Object.getOwnPropertyNames(obj)**

`Object.getOwnPropertyNames`返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

**（4）Object.getOwnPropertySymbols(obj)**

`Object.getOwnPropertySymbols`返回一个数组，包含对象自身的所有 Symbol 属性的键名。

**（5）Reflect.ownKeys(obj)**

`Reflect.ownKeys`返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

## super 关键字

`this`关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字`super`，指向当前对象的原型对象。

需要注意的是，`super`关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。

### 解构赋值

对象的解构赋值用于从一个对象取值，相当于将目标对象自身的所有可遍历的（enumerable）、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面。



# import

import用于在一个模块中加载另一个含有export接口的模块

# export

expot用于对外输出本模块变量的接口 (一个文件可以理解为一个模块)

# proxy

概念:**Proxy**对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义(如属性查找、赋值、枚举、函数调用等)语法: const p = new Proxy(target，handler)

ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例

Proxy 实例也可以作为其他对象的原型对象。

同一个拦截器函数，可以设置拦截多个操作。

Proxy 支持的拦截操作，一共 13 种。

- **get(target, propKey, receiver)**：拦截对象属性的读取，比如`proxy.foo`和`proxy['foo']`。
- **set(target, propKey, value, receiver)**：拦截对象属性的设置，比如`proxy.foo = v`或`proxy['foo'] = v`，返回一个布尔值。
- **has(target, propKey)**：拦截`propKey in proxy`的操作，返回一个布尔值。
- **deleteProperty(target, propKey)**：拦截`delete proxy[propKey]`的操作，返回一个布尔值。
- **ownKeys(target)**：拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性。
- **getOwnPropertyDescriptor(target, propKey)**：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象。
- **defineProperty(target, propKey, propDesc)**：拦截`Object.defineProperty(proxy, propKey, propDesc）`、`Object.defineProperties(proxy, propDescs)`，返回一个布尔值。
- **preventExtensions(target)**：拦截`Object.preventExtensions(proxy)`，返回一个布尔值。
- **getPrototypeOf(target)**：拦截`Object.getPrototypeOf(proxy)`，返回一个对象。
- **isExtensible(target)**：拦截`Object.isExtensible(proxy)`，返回一个布尔值。
- **setPrototypeOf(target, proto)**：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- **apply(target, object, args)**：拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`。
- **construct(target, args)**：拦截 Proxy 实例作为构造函数调用的操作，比如`new proxy(...args)`。

应用场景
2.1 v3的reactive的双向绑定原理