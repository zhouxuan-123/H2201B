<template>
 <div class="datuBox">
    <div class="tuBox">
        <p>慕课外销售大盘</p>
    </div>
    <div class="qyBox">
        <p>区域销售大盘环比分析</p>
        <img src="../assets/微信图片_20221226165943.png" alt="">
    </div>
 </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.datuBox{
    display: flex;
}
.tuBox{
    padding: 10px;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    width: 700px;
    background-color: #424345;
    height: 260px;
}
.qyBox{
    padding: 10px;
    width: 425px;
    background-color: #363636;
    height: 260px;
    margin-top: 10px;
    margin-left: 10px;
}
p{
    color: #fff;
}
img{
    width: 425px;
    height: 240px;
}
</style>
