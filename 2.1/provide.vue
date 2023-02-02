<template>
  <div>
    <button @click="changeMsg">触发</button>
    <h1>组件</h1>
    <providechild></providechild>
  </div>
</template>
  
  <script>
import providechild from "../components/providechild.vue";
export default {
  data() {
    return {
      obj: {
        name: "哈哈",
      },
      developer: "啦啦",
      year: 2022,
      update: "2033年1月1日",
    };
  },
  provide() {
    return {
      obj: this.obj, // 方式1.传入一个可监听的对象
      developerFn: () => this.developer, // 方式2.通过 computed 来计算注入的值
      year: this.year, // 方式3.直接传值
      app: this, // 4. 提供祖先组件的实例 缺点：实例上挂载很多没有必要的东西 比如：props，methods。
    };
  },
  components: {
    providechild,
  },
  methods: {
    changeMsg() {
      this.obj.name = "嘿嘿";
      this.developer = "嗯嗯";
      this.year = 2023;
      this.update = "2044年2月2日";
    },
  },
};
</script>
  