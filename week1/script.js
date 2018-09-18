//1
console.log("Hello World");
console.log("Hallo wereld");
console.log("Hallo welt");

//2
//console.log('i'm awesome');
console.log("i'm awesome");

//3
let x;

console.log("the value of my variable x will be undefined");
console.log(x);
x = (4);
console.log("the value of my variable x should be the number '4' ");
console.log(x);
//4
let y;

console.log("the value of y will be undefined");
console.log(y);
y = "randomString";
console.log("the value of y should be 'randomString' ");
console.log(y);
//5
let z = (7.25);

console.log(z);
let a = Math.round(z);
console.log(a);

let highestValue;

if (z > a) {
    highestValue = z
}
else { highestValue = a };

console.log(highestValue);

//6
let myArray = [];
console.log("the value of an array is multiple values");
console.log(myArray);
let myFavoriteAnimals = ["dogs", "cats", "dinosaurs"];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push("baby pig");
console.log(myArray);

//7
let myString = "this is a test";
console.log(myString);
let myStringLength = myString.length;
console.log(myStringLength);


//8
let type1 = ("Wood");
console.log(type1);
let type2 = 69;
console.log(type2);
let type3 = (false);
console.log(type3);
let type4 = ['1', '2', '3'];
console.log(type4);

if (type1 === type2) {
    console.log('SAME TYPE');
}
else { console.log('DIFFERENT TYPES') };   

if (type1 === type3) {
    console.log('SAME TYPE');
}
else { console.log('DIFFERENT TYPES') };

if (type1 === type4) {
    console.log('SAME TYPE');
}
else { console.log('DIFFERENT TYPES') };

if (type2 === type3) {
    console.log('SAME TYPE');
}
else { console.log('DIFFERENT TYPES') };

if (type2 === type4) {
    console.log('SAME TYPE');
}
else { console.log('DIFFERENT TYPES') };

if (type3 === type4) {
    console.log('SAME TYPE');
}
else { console.log('DIFFERENT TYPES') };


console.log(" the types of my variables are strings, objects, booleans and numbers");

console.log(typeof type1);
console.log(typeof type2);
console.log(typeof type3);
console.log(typeof type4);

if (type1 === type2 || type1 === type3 || type1 === type4 || type3 === type2 || type2 === type4) {
    console.log('Same Type')
}
else { console.log('Not The Same Type') };

//9
let p = 7;

p = p % 3;
console.log(' The value of p is 1');
console.log(p);

let n = 100;

n = n % 4;
console.log(' The value of n is 0');
console.log(n);

let k = 17;

k = k % 4;
console.log(' The value of k is 1');
console.log(k);

//10
const multipleValues = ['someValue', '321', 'false', ['1', '2', '3']];
console.log("The output will be 'someValue' ")
console.log(multipleValues[0]);
console.log("The output will be '3' ")
console.log(multipleValues[3][2]);

if (6 / 0 === 10 / 0) {
    console.log('Yes, i can compare infinities');
} else {
    console.log("no, i can't compare  infinities");
};
