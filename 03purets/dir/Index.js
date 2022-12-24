"use strict";
// class User{
//    public email : string;
//     name : string;
//    private readonly city : string = "Bhuj";
//     constructor(email : string, name : string){
//      this.email = email;
//      this.name = name
//     }
// }
class User {
    //protected keyword is accessible to extended class as well.
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Bhuj";
        // private _courseCount = 1
        this._courseCount = 1;
    }
    get getEmail() {
        return `email ${this.email}`;
    }
    get getCount() {
        return this._courseCount;
    }
    set getCount(num) {
        if (num <= 1) {
            throw new Error(`num value must be greater than 1`);
        }
        this._courseCount = num;
    }
}
class family extends User {
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const mahima = new User("", "");
console.log(mahima);
