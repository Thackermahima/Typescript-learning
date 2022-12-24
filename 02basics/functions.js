"use strict";
exports.__esModule = true;
function hello(str) {
    return str;
}
//getNum can only return number function.
function getNum(num) {
    return 5;
    //return "hello"; --> We can return anything if we remove specific type of the function
    //here that specific type is a number.
} 

var hellos = function (s) {
    return "";
};
function getUpper(val) {
    return val.toUpperCase();
}
var user = function (name, email, isPad) {
};
var country = ["India", "Switcherland", "Thailand"];
//here we can specify return type of map as well.
country.map(function (coun) {
    return "Country name ".concat(coun);
});
user("hey", "hey@gmail.com", false);
hello("hey");
getUpper("uppercase");
