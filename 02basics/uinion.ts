let score : number | string = 50;
score = 10;
score = "Hello";

type User = {
    name : string,
    id : number 
}

type Admin = {
    username :  string,
    id : number
}
let m : User | Admin = { name : "", id : 11} 
m = { username : "", id : 22}

//array union.
const data : number[] = [1,2,3];
const data1 : string[] = ["1","2","3"];
const data2 : number[] | string[] = ["1","2"];//All data can be either number or string.
const data3 : (number | string)[] = ["1",2,3];//So now you can have  combination of both data types.

//pi 
let pi : 3.14 = 3.14;
// pi = 3.145

