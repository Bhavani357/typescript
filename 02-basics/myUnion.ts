let score: number | string  = 33 
score = 56 
score = "98"

type User1 = {
    name:string;
    id:number
}
type Admin = {
    username:string;
    id:number
}

let bhavani: User1 | Admin = {name:"bhavani",id:776}
bhavani = {username:"hc",id:453}

// function getDbId(id:number | string){
//     // making api req
//     console.log(`DB id is ${id}`)
// }
getDbId(3)
getDbId("4")

function getDbId(id:number | string){
    if(typeof id === 'string'){
        id.toUpperCase()
    }
    
}

// array 

const data: number[] = [1,2,3]
const data1 : string[]=['1','2','3']

let data2 :string[] | number[] = [1,2,3]
data2 = ['1','2','9']

let data3: (string|number|boolean)[] = ['6',5,true]

let seatAllotment:"aisle"|"middle"|"window"

seatAllotment = "aisle"
// seatAllotment = "crew"