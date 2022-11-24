// const fs = require('fs')
// function p(url){
//     return new Promise(function(resolve,reject){
//         fs.readFile(url,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// p('./桃花源记.md').then(res=>{
//     return res.toString()
// })
// .then((data)=>{
//     console.log(data);
//     p('./出师表.md').then(res=>{
//         console.log(res.toString());
//     })
// })
// .then(()=>{
//     p('./出居庸关.md').then(res=>{
//         console.log(res.toString());
//     })
// })

// const fs = require('fs')
// function p(url){
//     return new Promise(function(resolve,reject){
//         fs.readFile(url,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// p('./桃花源记.md').then(res=>{
//     return res.toString()
// })
// .then((data)=>{
//     console.log(data);
//     p('./出师表.md').then(res=>{
//         console.log(res.toString());
//     })
// })
// .then(()=>{
//     p('./出居庸关.md').then(res=>{
//         console.log(res.toString());
//     })
// })

const fs = require('fs')
function p(url){
    return new Promise(function(resolve,reject){
        fs.readFile(url,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

p('./桃花源记.md').then(res=>{
    return res.toString()
})
.then((data)=>{
    console.log(data);
    p('./出师表.md').then(res=>{
        console.log(res.toString());
    })
})
.then(()=>{
    p('./出居庸关.md').then(res=>{
        console.log(res.toString());
    })
})