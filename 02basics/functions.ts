function hello(str : string){
    return str;
}
//getNum can only return number function.
function getNum(num : number): number{
  return 5;
  //return "hello"; --> We can return anything if we remove specific type of the function
  //here that specific type is a number.
}
const hellos = (s : string): string => {
    return "";
}

function getUpper(val : string){
  return val.toUpperCase();
}
let user = (name : string, email : string, isPad : boolean) => {   
}
const country = ["India","Switcherland","Thailand"];
//here we can specify return type of map as well.
country.map((coun):string => {
return `Country name ${coun}`
});

function getError(msg : string) : never {
throw new Error(msg);
}
user("hey","hey@gmail.com",false);
hello("hey");
getUpper("uppercase");
export {}