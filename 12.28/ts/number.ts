// let num1 :number = 1
// let num2 :number = 2
// let sum :number = num1 + num2
// let str1:string = "ts初始之路"
// let str2:string = '哈哈哈哈'
// let str:string = str1+str2

let a:null = null
let b:undefined = undefined
declare function create(o:object | null):void
create({props:0})
create(null)
let obj:{name:string,age:number}
obj = {name:'小红',age:13}


function getName1(name:string,age:number):void{
    console.log();

}
function getName2(name:string,age:number):string{
    return name + age
}


// interface类似于{}代码块
// 接口的高阶用法
interface Person {
    name:string,
    age:number,
    sex:number,
    isJob:boolean,
    hobby:string[],
    former:number,
    formerName:[string,string,string]
}
let person:Person = {

}
