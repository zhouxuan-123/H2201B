<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  beforeCreate(){
    console.log("beforeCreate");
  },
  created(){
    console.log("created");
  },
  beforeMount(){
    console.log("beforeMount");
  },
  mounted(){
    console.log("mounted");
  },
  setup(){
    console.log("setup");
    let text = "张三";
    function getage(){
      console.log("我是一个方法");
    }
    return {text,getage}
  },

  // beforeCreate(){
  //   console.log("beforeCreate");
  // },
  // created(){
  //   console.log("created");
  // },
  // beforeMount(){
  //   console.log("beforeMount");
  // },
  // mounted(){
  //   console.log("mounted");
  // },
  // setup(){
  //   console.log("setup");
  //   let text = "张三";
  //   function getage(){
  //     console.log("我是一个方法");
  //   }
  //   return {text,getage}
  // },

  // beforeCreate(){
  //   console.log("beforeCreate");
  // },
  // created(){
  //   console.log("created");
  // },
  // beforeMount(){
  //   console.log("beforeMount");
  // },
  // mounted(){
  //   console.log("mounted");
  // },
  // setup(){
  //   console.log("setup");
  //   let text = "张三";
  //   function getage(){
  //     console.log("我是一个方法");
  //   }
  //   return {text,getage}
  // },
  methods:{

  }
}
</script>
