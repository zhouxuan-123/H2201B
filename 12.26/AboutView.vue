<template>
  <div class="about">
    <h1>姓名:{{text}}</h1><br>
    <button @click="getage">获取年龄</button>

    <!-- <h1>姓名:{{text}}</h1><br>
    <button @click="getage">获取年龄</button> -->
    <!-- <h1>姓名:{{text}}</h1><br>
    <button @click="getage">获取年龄</button> -->
  </div>
</template>
<script>
export default {
  setup(props){
    let text = "我是张三";
    function getage(params){
      console.log("我是一个方法");
    }
    return{
      text,
      getage,
    }
  }
  // setup(props){
  //   let text = "我是张三";
  //   function getage(params){
  //     console.log("我是一个方法");
  //   }
  //   return{
  //     text,
  //     getage,
  //   }
  // }
  // setup(props){
  //   let text = "我是张三";
  //   function getage(params){
  //     console.log("我是一个方法");
  //   }
  //   return{
  //     text,
  //     getage,
  //   }
  // }
}
</script>
