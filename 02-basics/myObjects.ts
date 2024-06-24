const User = {
    name:"bhavani",
    email: "bhavani@lco.dev",
    isActive: true
}

function createUser({name:string,isPaid:boolean}){}

function createCourse():{name:string,price:number}{
    return {name:'reactjs',price:321}
}

createUser({name:"bhavaani",isPaid:false})



type User = {
    readonly _id: string
    name:string;
    email:string;
    isActive:boolean
    creditcardDetails?:number
}

let myUser:User = {
    _id:'1234',
    name: "b",
    email:"b@b.com",
    isActive:false
}
myUser.email = '@bhali.com'

// adding all types 

type cardNumber = {
    cardnumber:string
} 

type cardDate ={
    cardDate:string
}
type cardDetails = cardNumber & cardDate & {
    cvv:number
}




// function createUser(user:User):User{
//     return {name:"",email:"",isActive:true}
// }
// createUser({name:"",email:"",isActive:true})

export {}