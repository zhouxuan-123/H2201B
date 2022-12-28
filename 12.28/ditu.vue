<template>
 <div class="datuBox">
    <div class="tuBox">
        <p>慕课外销售大盘</p>
    </div>
    <div class="qyBox">
        <p>区域销售大盘环比分析</p>
        <ul>
            <li>城市订单量</li>
            <li>店铺数</li>
            <li>接单骑手人数</li>
            <li>新店铺数量</li>
            <li>人均订单量</li>
        </ul>
        <div class="csBox">
            <div class="lsBox"></div>
            <div class="bsBox">武汉-16%</div>
            <div class="lvBox">武汉-16%</div>
            <div class="bsBox">武汉+20%</div>
            <div class="lvBox">武汉-21%</div>
            <div class="bsBox">武汉+10%</div>
        </div>
        <div class="huiBox">
            <div class="llsBox"></div>
            <div class="bsBox">武汉-16%</div>
            <div class="lvBox">武汉-16%</div>
            <div class="bsBox">武汉+20%</div>
            <div class="lvBox">武汉-21%</div>
            <div class="bsBox">武汉+10%</div>
        </div>
        <div class="huiBox">
            <div class="llsBox"></div>
            <div class="bsBox">武汉-16%</div>
            <div class="lvBox">武汉-16%</div>
            <div class="bsBox">武汉+20%</div>
            <div class="lvBox">武汉-21%</div>
            <div class="bsBox">武汉+10%</div>
        </div>
        <div class="csBox">
            <div class="lsBox"></div>
            <div class="bsBox">武汉-16%</div>
            <div class="lvBox">武汉-16%</div>
            <div class="bsBox">武汉+20%</div>
            <div class="lvBox">武汉-21%</div>
            <div class="bsBox">武汉+10%</div>
        </div>
        <div class="huiBox">
            <div class="llsBox"></div>
            <div class="bsBox">武汉-16%</div>
            <div class="lvBox">武汉-16%</div>
            <div class="bsBox">武汉+20%</div>
            <div class="lvBox">武汉-21%</div>
            <div class="bsBox">武汉+10%</div>
        </div>
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
ul{
    display: flex;
    width: 425px;
    li{
        list-style: none;
        width: 90px;
        text-align: center;
        height: 40px;
        background-color: #595959;
        line-height: 40px;
        color: #fff;
        font-size: 12px;
    }
}
.csBox{
    display: flex;
    font-size: 10px;
    height: 40px;
    line-height: 40px;
    background-color: #272727;
    .lsBox{
        width: 10px;
        height: 10px;
        border-radius: 50px;
        background-color: #325663;
        margin-top: 15px;
    }
}
.bsBox{
        color: #fff;
        margin-left: 22px;
    }
    .lvBox{
        color: #A0B379;
        margin-left: 22px;
    }
.huiBox{
    display: flex;
    font-size: 10px;
    height: 40px;
    line-height: 40px;
    background-color: #363636;
    .llsBox{
        width: 10px;
        height: 10px;
        border-radius: 50px;
        background-color: #51784C;
        margin-top: 15px;
    }
}
</style>
