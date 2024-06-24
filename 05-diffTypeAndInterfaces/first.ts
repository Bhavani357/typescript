type X = {
    name:string,
    number: number
}

type Y = X&{
    email:string,
    city:string
}

let y: Y = {
    email:'durga@gmail.com',
    city:"vizag",
    name: 'durga',
    number:765
}
console.log(y)

interface Person{
    name:string;
    age?:number;
}
interface Guy extends Person{
    proffession:string;
}

type Z = Person & {
    tech:string
}

interface Developer extends Y{
    skills:string
}

export {}