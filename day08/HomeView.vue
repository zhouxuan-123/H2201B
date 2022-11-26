<template>
  <div class="home">
    <!-- 模板字符串渲染 -->
    <h1>{{ msg }}</h1>
    <span v-bind:title="mssage">鼠标停几秒查看提示信息</span><br />
    <span :title="mssage">鼠标停几秒查看提示信息</span><br />
    <span v-if="flag">阿巴阿巴</span>
    <span v-else>玛卡巴卡</span>
    <span v-if="flagVisible">唔西迪西</span>
    <button v-on:click="handleChange">替换</button><br>
    <span v-show="flag">啦啦啦啦啦</span>
    <div>
      <ul>
        <li v-for="(item,index) in week" :key="index">{{item.name}}</li>
      </ul>
      <button @click="handleUpdatelist">修改下标数组</button>
      <input @change="handleInput" v-model="inputValue">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "哈哈哈哈哈",
      mssage: "页面加载于" + new Date().toLocaleString(),
      flag: true,
      flagVisible:true,
      week:[
        {
          id:1,
          name:'张三'
        },
        {
          id:2,
          name:'李四'
        },
        {
          id:3,
          name:'王五'
        },
        {
          id:4,
          name:'小点点'
        },
      ]
    };
  },
  methods: {
    handleChange(){
      this.flag = !this.flag
      this.flagVisible = !true.flagVisible
    },
    handleUpdatelist(){
      this.week[0].name = "我是靓仔"
    },
    handleInput(e){
      console.log(e);
      console.log(this.inputValue);
    }
  },
};
</script>
