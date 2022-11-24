// const { get } = require('core-js/core/dict')
// const fs = require('fs')
// const { resolve } = require('path')
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./桃花源记.md',(err,data)=>{
//             reject('我是桃花返回的错误信息')
//         })
//     })
// }

// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./出师表.md',(err,data)=>{
//             reject('我是出师表返回的错误信息')
//         })
//     })
// }

// function getAgent(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./出居庸关.md',(err,data)=>{
//             reject('我是出居庸关返回的错误信息')
//         })
//     })
// }
// getPeach().then(res=>{
//     console.log(res,'45');
// }).then((data)=>{
//     let result = getTroops().then(res=>res.toString())
//     console.log(result,'49');
// }).then((data1)=>{
//     console.log(data1);
//     getAgent().then(res=>{
//         console.log(res.toString(),'53');
//     })
// })
// .catch(err=>{
//     console.log(err,'57');
// })

// const { get } = require('core-js/core/dict')
// const fs = require('fs')
// const { resolve } = require('path')
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./桃花源记.md',(err,data)=>{
//             reject('我是桃花返回的错误信息')
//         })
//     })
// }

// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./出师表.md',(err,data)=>{
//             reject('我是出师表返回的错误信息')
//         })
//     })
// }

// function getAgent(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./出居庸关.md',(err,data)=>{
//             reject('我是出居庸关返回的错误信息')
//         })
//     })
// }
// getPeach().then(res=>{
//     console.log(res,'45');
// }).then((data)=>{
//     let result = getTroops().then(res=>res.toString())
//     console.log(result,'49');
// }).then((data1)=>{
//     console.log(data1);
//     getAgent().then(res=>{
//         console.log(res.toString(),'53');
//     })
// })
// .catch(err=>{
//     console.log(err,'57');
// })

const { get } = require('core-js/core/dict')
const fs = require('fs')
const { resolve } = require('path')
function getPeach(){
    return new Promise(function(resolve,reject){
        fs.readFile('./桃花源记.md',(err,data)=>{
            reject('我是桃花返回的错误信息')
        })
    })
}

function getTroops(){
    return new Promise(function(resolve,reject){
        fs.readFile('./出师表.md',(err,data)=>{
            reject('我是出师表返回的错误信息')
        })
    })
}

function getAgent(){
    return new Promise(function(resolve,reject){
        fs.readFile('./出居庸关.md',(err,data)=>{
            reject('我是出居庸关返回的错误信息')
        })
    })
}
getPeach().then(res=>{
    console.log(res,'45');
}).then((data)=>{
    let result = getTroops().then(res=>res.toString())
    console.log(result,'49');
}).then((data1)=>{
    console.log(data1);
    getAgent().then(res=>{
        console.log(res.toString(),'53');
    })
})
.catch(err=>{
    console.log(err,'57');
})