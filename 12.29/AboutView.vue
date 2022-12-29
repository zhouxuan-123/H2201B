<template>
    <div class='daBox'>
      <h2>点名器</h2>
          <ul>
            <li v-for="(item,index) in arr" :key="index">{{item.name}}</li>
          </ul>
          <div>
            <button @click="single">单人点名</button>
            <button @click="double">双人点名</button>
            <button @click="box">男生点名</button>
            <button @click="girl">女生点名</button>
          </div>
          <h1>{{conname}}</h1>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({
      arr: [
        {
          name: "哈哈哈",
          six: 1,
        },
        {
          name: "嘿嘿嘿",
          six: 0,
        },
        {
          name: "吼吼吼",
          six: 1,
        },
        {
          name: "嚯嚯嚯",
          six: 0,
        },
        {
          name: "啦啦啦",
          six: 0,
        },
        {
          name: "略略略",
          six: 0,
        },
        {
          name: "嗨害嗨",
          six: 0,
        },
        {
          name: "玛卡巴卡",
          six: 0,
        },
        {
          name: "唔系迪系",
          six: 0,
        },
        {
          name: "汤布力布",
          six: 0,
        },
        {
          name: "啦啦啦",
          six: 0,
        },
        {
          name: "靓仔",
          six: 0,
        },
        {
          name: "哼哼哼",
          six: 0,
        },
        {
          name: "嗡嗡嗡",
          six: 1,
        },
        {
          name: "突突突",
          six: 1,
        },
      ],
      current: "",
      conname: "",
      time: null,
      num: 0,
    });
    const single = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          var nums = Math.floor(Math.random() * data.arr.length);
          data.num++;
          data.conname = data.arr[nums].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.conname = data.arr[nums].name;
            data.arr.splice(nums, 1);
          }
        }, 100);
      }
    };
    const double = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          var num1 = Math.floor(Math.random() * data.arr.length);
          var num2 = Math.floor(Math.random() * data.arr.length);
          data.num++;
          data.conname = data.arr[num1].name + "," + data.arr[num2].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.conname = data.arr[num1].name + "," + data.arr[num2].name;
            data.arr.splice(num1, 1);
            data.arr.splice(num2, 1);
          }
        }, 100);
      }
    };
    const box = () => {
      var arr1 = [];
      if (arr1.length == 0) {
        data.arr.forEach((i) => {
          if (i.six == 0) {
            arr1.push(i);
          }
        });
      }
      if (data.time == null) {
        data.time = setInterval(() => {
          var num1 = Math.floor(Math.random() * arr1.length);
          data.num++;
          data.conname = arr1[num1].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.conname = arr1[num1].name;
            arr1.splice(num1, 1);
          }
        }, 100);
      }
    };
    const girl = () => {
      var arr1 = [];
      if (arr1.length == 0) {
        data.arr.forEach((i) => {
          if (i.six == 1) {
            arr1.push(i);
          }
        });
      }

      if (data.time == null) {
        data.time = setInterval(() => {
          var num1 = Math.floor(Math.random() * arr1.length);
          data.num++;
          data.conname = arr1[num1].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.conname = arr1[num1].name;
            arr1.splice(num1, 1);
          }
        }, 100);
      }
    };
    return { ...toRefs(data), single, double, box, girl };
  },
};
</script>

<style lang='scss' scoped>
.daBox{
  text-align: center;
  margin: 200px 510px;
}
h2{
  color: #fff;
}
ul {
  width: 500px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  li {
    list-style: none;
    flex: 20%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: greenyellow;
  }
}
button {
  margin-left: 20px;
  width: 100px;
  height: 30px;
  border: 0;
  border-radius: 15px;
  background: pink;
  color: #000;
  line-height: 30px;
}
</style>

