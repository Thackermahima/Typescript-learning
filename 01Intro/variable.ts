let myname : string = "Hey mahima here";
console.log(myname);
//number.
let userId = 112223.7;
userId.toFixed();

//boolean
let isLoggedIn : boolean = false;

//any
let hero;

//It will return as a any type so it can be anything for instance string, number etc.
//but to make sure some function can only give dynamic value in specific type.
//For that we can write let hero : string;


function getHero(){
    return "thor";
}
hero = getHero();

export {}