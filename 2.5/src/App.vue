<template>
  <div id="app">
    <router-view class="page" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body,
#app,
.page {
  height: 100%;
  margin: 0;
  padding: 0;
}

.el-dialog__headerbtn .el-dialog__close {
  color: #fff !important;
}
.is-active {
  background-color: #fff !important;
  .el-icon-star-off {
    color: #4474fa !important;
  }
}
.el-dialog__header {
  background-color: #66b1ff !important;
  color: #fff !important;
}
.el-dialog__header {
  text-align: left !important;
  margin: 0 !important;
  background-color: #68b0fe !important;
}
.el-dialog__body {
  text-align: left !important;
}
.el-dialog__title {
  color: #fff !important;
}
.el-dialog__headerbtn .el-dialog__close {
  color: #fff !important;
}
</style>
