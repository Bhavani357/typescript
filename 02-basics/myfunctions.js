"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(6);
getUpper('bhavani');
signUpUser('dura', 'durga@gmail.com', true);
loginUser('hls', 'hls@hl.com');
// function getValue(myVal: number) //which type will you return here
// {
//     if(myVal>5){
//         return true  // boolean
//     }
//     return "200 ok"  // string
// }
var getHello = function (s) {
    return "";
};
var heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function HandleError(msg) {
    throw new Error(msg);
}
