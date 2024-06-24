abstract class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter:string
    ){}
    abstract getSepia():void 
    getReelTime():number {
        // some complex calculations 
        return 9
    }
}

class Instagrams extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter:string,
        public burst: number
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log('instal class')
    }
}
const ydurga = new Instagrams("test",'Test',7)
