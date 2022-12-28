interface use {
    name:string,
    age:number
}
interface per{
    sex:number
}
type allInfo = use & per
let person :use & per = {name:"小刘",age:1,sex:1}
