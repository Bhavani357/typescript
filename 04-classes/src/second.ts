interface TakePhotos {
    cameraMode: string 
    filter: string 
    burst: number
}

interface Story{
    createStory():void
}

class Instagram implements TakePhotos {
    constructor (
        public cameraMode: string,
        public filter: string ,
        public burst: number
    ){}
}

// add more props
class Youtube implements TakePhotos,Story{
    constructor (
        public cameraMode: string,
        public filter: string ,
        public burst: number,
        public short:string
    ){}
    createStory(): void {
        console.log("story was created")
    }
}