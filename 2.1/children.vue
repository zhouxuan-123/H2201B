<template>
 <div>
    <h2>我是子组件</h2>
    {{ title }}
    <button @click="getDate">子传父</button>
 </div>
</template>

<script>
export default {
    props:["title"],
 data () {
 return {

 }
 },
 methods: {
    getDate(){
        this.$emit("getChilren","我是子组件传递回来的值")
    }
 },
 created () {

 },
 mounted () {

 },
 components: {

 },
 computed: {

 },
 watch: {

 },
}
</script>

<style lang='scss' scoped>
</style>
