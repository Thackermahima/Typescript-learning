// class User{
//    public email : string;
//     name : string;
//    private readonly city : string = "Bhuj";

//     constructor(email : string, name : string){
//      this.email = email;
//      this.name = name
//     }
// }
class User{
    private readonly city : string = "Bhuj";
// private _courseCount = 1
protected _courseCount = 1
//protected keyword is accessible to extended class as well.

        constructor( 
            public email : string,
            public name : string
            )
        {
       
        }
        get getEmail() : string {
            return `email ${this.email}`
        }
        get getCount() : number {
            return this._courseCount
        }
        set getCount(num){
         if(num <= 1){
            throw new Error(`num value must be greater than 1`);
         }
         this._courseCount = num;
        }
}

class family extends User{
    changeCourseCount(){
        this._courseCount = 4;
    }
}

const mahima = new User("","");
console.log(mahima);
