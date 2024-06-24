"use strict";
const score = [];
const names = [];
// only boolean or number accept and return
function identityOne(val) {
    return val;
}
// accept any type and return any type like give number type and return string type
function identityTwo(val) {
    return val;
}
// input type and return type are same,if you give number returs number type
function identityThree(val) {
    return val;
}
identityThree('3');
// short cut for Type as T
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({})
function getSearchProducts(products) {
    // do some database operations 
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne, valTwo
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
