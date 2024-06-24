function addTwo(num: number): number{
    return num +2 
}

function getUpper(val: string){
    return val.toUpperCase()
} 

function signUpUser(name:string,email:string,isPaid: boolean){}

let loginUser = (name:string,email:string,isPaid:boolean=false)=>{} //default values
addTwo(6) 
getUpper('bhavani')
signUpUser('dura','durga@gmail.com',true)
loginUser('hls','hls@hl.com')


// function getValue(myVal: number) //which type will you return here
// {
//     if(myVal>5){
//         return true  // boolean
//     }
//     return "200 ok"  // string
// }

const getHello = (s:string):string=>{
    return ""
}

const heros = ['thor','spiderman','ironman']
// const heros = [1,2,3]

heros.map((hero):string =>{
    return  `hero is ${hero}`
})

function consoleError(errmsg: string):void{
    console.log(errmsg);
}
function HandleError(msg: string):never{
    throw new Error(msg)
}

// declaring type of a function 
let printName: (name:string)=>void;
// void returns undefined 
// never doesn't return anything

let heroname:unknown; // this unknown is recommended when compared to type any

export {} 