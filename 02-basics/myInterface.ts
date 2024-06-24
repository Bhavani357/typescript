interface Useri {  // loose form of class
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: ()=>string
    startTrail(): string,
    getCoupon(couponname: string,value:number):number
}

interface Useri {
    githubToken:string
}

// interface inheritance 

interface Admin extends Useri {
    role: "admin"| "ta"|"learner"
}

const bhavani: Admin = {
    dbId:33,
    role:"admin",
    githubToken: "github",
    email:"bh@y.com",
    userId:2345,
    startTrail: ()=>{
        return 'trail started'
    },
    getCoupon:(name: 'durga11',off:10)=>{
        return 10
    }
}

bhavani.email = "bh@gmail.com"
// bhavani.dbId = 22