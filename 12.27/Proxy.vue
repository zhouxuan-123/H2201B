<template>
<div class=''></div>
</template>

<script>
const target = {
  name: '控制'
};

const handler = {

  get: function(target, key) {
    console.log(`${key} 被读取`);
    return target[key];
  },

  set: function(target, key, value) {
    console.log(`${key} 被设置为 ${value}`);
    target[key] = value;
  }
};

const testObj = new Proxy(target, handler);

console.log(testObj.name); // name 被读取 及输出名字 控制
testObj.name = 1; // name 被设置为 1  输出 1

</script>

<style lang='scss'>

</style>
