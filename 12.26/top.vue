<template>
 <div class="datBox">
    <div class="topBox">
        <div class="jinBox">
            <img src="../assets/微信图片_20221226160040.png" alt="">
            <div>
                <p>今日销售额</p>
                <span>Taday's Solos Amount</span>
                <h2>56,998,472</h2>
            </div>
        </div>
        <div class="jinBox">
            <img src="../assets/微信图片_20221226161407.png" alt="">
            <div>
                <p>今日订单量</p>
                <span>Taday's Total Orders</span>
                <h2>3,496,490</h2>
            </div>
        </div>
        <div class="jinBox">
            <img src="../assets/微信图片_20221226161417.png" alt="">
            <div>
                <p>今日交易用户数</p>
                <span>Taday's Payed users</span>
                <h2>758,349</h2>
            </div>
        </div>
        <div class="jinBox">
            <img src="../assets/微信图片_20221226161420.png" alt="">
            <div>
                <p>今日新增用户数</p>
                <span>Taday's New users</span>
                <h2>1,739,919</h2>
            </div>
        </div>
        <div class="zhuBox">
            <img class="imageBox" src="../assets/微信图片_20221226161608.png" alt="">
            <span>转化率</span>
            <p class="p">13.00%</p>
        </div>
        <div class="zhuBox">
            <img class="imageBox" src="../assets/微信图片_20221226161613.png" alt="">
            <span>退单率</span>
            <p class="p">5.66%</p>
        </div>
    </div>
    <div class="center">
        <ul>
            <li class="AllBox">ALL</li>
            <li>北京</li>
            <li>上海</li>
            <li>深圳</li>
            <li>杭州</li>
            <li>南京</li>
            <li>武汉</li>
        </ul>
    </div>
 </div>
</template>

<script>
export default {
 
}
</script>

<style lang='scss' scoped>
.topBox{
    margin-left: 10px;
    display: flex;
    width: 1175px;
    background-color: #424345;
    height: 90px;
}
.jinBox{
    display: flex;
    margin-left: 20px;
}
p{
    margin-top: 10px;
    color: #fff;        
}
span{
    color: #fff;
    font-size: 10px;
}
h2{
    color: #fff;
}
.zhuBox{
    width: 50px;
    height: 80px;
    text-align: center;
    margin-left: 40px;
    .p{
        color: #fff;
        margin-top: -4px;
    }
    span{
        display: block;
        margin-top: -5px;
    }
    .imageBox{
        margin-top: 8px;
        width: 40px;
        height: 40px;
    }
}
.center{
    margin-left: 10px;
    display: flex;
    width: 1175px;
    background-color: #35383F;
    margin-top: 10px;
    height: 30px;
    ul{
        display: flex;
        li{
            text-align: center;
            line-height: 30px;
            list-style: none;
            color: #fff;
            width: 165px;
        }
        .AllBox{
            background-color: #8F9DAA;
        }
    }
}
</style>
