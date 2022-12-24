"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFoure(val) {
    return val;
}
identityFoure({ brand: "", type: 1 });
//Generics with array.
function getSearchProducts(products) {
    const num = 3;
    // return products[3]
    return products[num];
}
//generics with arrow function.
const getSearch = (pro) => {
    return pro[4];
};
function anotherf(valO, valT) {
    return {
        valO,
        valT
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
