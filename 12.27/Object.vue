<template>
<div class=''></div>
</template>

<script>
// 这是将要被劫持的对象
const data = {
  name: '',
};
// 遍历对象,对其属性值进行劫持
Object.keys(data).forEach(function(key) {
  console.log('1')
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function(newVal) {
      return val
    },
    set: function(newVal) {
      // 当属性值发生变化时我们可以进行额外操作
      console.log(`大家好,我是${newVal}我被劫持了`);
      val = newVal;
    },
  });
});
data.name = '111';
</script>

<style lang='scss'>

</style>
