<template>
  <div class="body">
    <div class="daBox">
      <div class="imgBox">
        <img src="../assets/微信图片_20221126183820.png" alt="" />
      </div>
      <h3>-Today need to-</h3>
      <div class="inBox">
        <input
          class="inpuBox"
          type="text"
          placeholder="Add new todo..."
          v-model="addInput"
          @keyup.enter="add"
        />
        <!-- <button class="btBox">Submit</button> -->
        <img
          class="imggBox"
          src="../assets/微信图片_20221126215015.png"
          alt=""
        />
      </div>
      <!-- <div class="chBox" id="ul">
            
        </div> -->
      <ul v-show="list==2 || list==1">
        <li
          v-for="(item, index) in $store.state.addList"
          :key="index"
          v-show="!item.checked"
        >
          <div class="iiBox">
            <input type="checkbox" @click="change(index)" />
            <span>{{ item.name }}</span>
          </div>
          <div @click="del(index)">x</div>
        </li>
      </ul>
      <ul v-show="list==2 || list==3">
        <li
          v-for="(item, index) in $store.state.addList"
          :key="index"
          v-show="item.checked"
          class="li"
        >
          <div class="iiBox">
            <input
              type="checkbox"
              @click="change(index)"
              :checked="item.checked"
            />
            <span>{{ item.name }}</span>
          </div>
          <div @click="del(index)">x</div>
        </li>
      </ul>
      <div class="cBox">
        <p v-if="$store.state.addList.length == 0">
          Congrat,you have no more tasks to do
        </p>
        <div v-if="$store.state.addList.length !== 0">
          <span>{{ $store.state.addList.length }}item left</span>
          <span @click="list=2">All</span>
          <span @click="active">Active</span>
          <span @click="comple">Completed</span>
          <span @click="delAll(index)">Clear Completed</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addInput: "",
      list:2,
    };
  },
  methods: {
    // 添加
    add() {
      this.$store.commit("add", { name: this.addInput, checked: false });
      this.addInput = "";
    },
    // 删除
    del(index) {
      this.$store.commit("del", index);
    },
    // 复选框
    change(index) {
      let arr = this.$store.state.addList;
      arr[index].checked = !arr[index].checked;
      this.$store.commit("changeCK", arr);
    },
    comple() {
      this.list = 3
    },
    active(){
      this.list = 1
    },
    // delAll(index){
    //   item.checked = this.$store
    //   this.$store.commit("del", index);
    // }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700,300);
h3{
  font-family: "Yanone Kaffeesatz", sans-serif !important; 
} 
.body {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #ffafbd, #ffb9af, #ffc3a1);
  position: relative;
}
.daBox {
  text-align: center;
  padding: 20px;
  width: 360px;
  height: 300px;
  background-color: #f2f2f2;
  border-radius: 10px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.imgBox {
  text-align: center;
}
img {
  width: 150px;
  height: 80px;
}
.inBox {
  border-bottom: 2px dashed #ea7a52;
  width: 200px;
  display: flex;
  text-align: center;
  margin-left: 50px;
}
.inpuBox {
  outline: none;
  width: 200px;
  border: none;
  background-color: #f2f2f2;
}
.btBox {
  margin-left: 50px;
  transform: rotate(5deg);
  /* box-shadow: 0px 0px 2px 0PX black; */
  box-shadow: 4px 4px 5px black;
}
li {
  padding: 0px 10px;
  width: 300px;
  display: flex;
  margin-left: 30px;
  margin-top: 20px;
  height: 30px;
  /* text-align: center; */
  justify-content: space-between;
  /* background-color: pink; */
}
.li {
  height: 30px;
  padding: 0px 10px;
  width: 300px;
  display: flex;
  margin-left: 30px;
  margin-top: 20px;
  /* text-align: center; */
  justify-content: space-between;
  background-color: #ea7a52;
  border-radius: 10px;
}
.cBox {
  color: #b7b8b8;
  margin-top: 15px;
}
.imggBox {
  margin-left: 50px;
  width: 80px;
  height: 50px;
}
</style>
