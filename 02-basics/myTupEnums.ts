// const user: (string | number)[] = [1,'hc']
let tUser: [string,number,boolean]
tUser = ['hc',123,true] //order of type is important
// tUser = [23,false,'3t'] // wrong order

let rgb : [number,number,number] = [3,4,2]
type Users = [number,string]

const newUser: Users = [34,'examle@gmail.com']

newUser[1] = 'hc.com'
// newUser.push(true)