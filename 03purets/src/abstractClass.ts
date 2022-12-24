abstract class Takephoto{
    constructor(
    public cameraMode : string,
    public filter : string){

    }
    abstract getSepia() : void;
    //Marked as abstract class needs to be there in inherited class.
}
//const m = new Takephoto("","");
//we cannot create instance of a abstract class.
class Instagram extends Takephoto{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst: string 
        ){
         super(cameraMode,filter)
        }
        getSepia(): void {
            console.log("hey");
            
        }
}
// const m = new Instagram("","");
