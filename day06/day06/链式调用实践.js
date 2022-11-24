// const fd = require('fs')
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fd.fstat.readFile('./桃花源记.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./出师表.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// getPeach().then((res)=>{
//     return res.toString()
// }).then((data)=>{
//     console.log(data,'27');
//     getTroops().then((res)=>{
//         console.log(res.toString());
//     })
// })

// const fd = require('fs')
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fd.fstat.readFile('./桃花源记.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./出师表.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// getPeach().then((res)=>{
//     return res.toString()
// }).then((data)=>{
//     console.log(data,'27');
//     getTroops().then((res)=>{
//         console.log(res.toString());
//     })
// })

const fd = require('fs')
function getPeach(){
    return new Promise(function(resolve,reject){
        fd.fstat.readFile('./桃花源记.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
function getTroops(){
    return new Promise(function(resolve,reject){
        fs.readFile('./出师表.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
getPeach().then((res)=>{
    return res.toString()
}).then((data)=>{
    console.log(data,'27');
    getTroops().then((res)=>{
        console.log(res.toString());
    })
})