//1 Strings
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);

//2 Arrays
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice([1], 0, 'meerkat');
console.log(favoriteAnimals);
let favoriteAnimalsLength = (favoriteAnimals.length);
console.log('The array has a length of ' + favoriteAnimalsLength);
let removed = favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
let indexOfMeerkat = (favoriteAnimals.indexOf('meerkat'));
console.log('The item you are looking for is at index: ' + indexOfMeerkat);

//More JavaScript
// 1

function myFunction(a, b, c, ) {
  return (a + b + c);
};

console.log(myFunction(100, 100, 100));

//2

function coloredCar() {
  const color = ('red ')
  console.log('a ' + color + 'car ');
};
coloredCar();

//3

function myFunction2() {
  let vehicle = {
    type: "Nissan",
    model: "350z",
    color: 'matte black'
  };
  console.log(vehicle);
};
myFunction2();

//4

function vehicleType(color, code) {
  if (code === 1) {
    console.log('a ' + color + ' Motorbike');
  }
  if (code === 2) {
    console.log('a ' + color + 'Car');
  }
};
vehicleType('Blue', 1);

//5

console.log(3 === 3 ? "Yes" : "No");

//6

function vehicle(color, code, age) {
  if (code === 1 && age > 2) {
    console.log('a ' + color + ' Used car');
  }
}
vehicle('Blue', 1, 5);

//7 

let vehicles = [{
    type: 'motorbike'
  }, {
    type: 'caravan'
  }, {
    type: 'bike'
  }, {
    type: 'tractor'
  }, {
    type: 'buggy'
  }

];
console.log(vehicles);

//8
console.log(vehicles[2].type);

//alternative
let vehicles0 = [" motorbike's", " caravan's", " bike's", " tractor's", " buggy's "];
console.log(vehicles0);
console.log(vehicles0[2]);

//9

function vehicle(color, code, type) {
  if (code === 3 && type === 1) {
    console.log('a ' + color + ' new ' + vehicles[2].type);
  }
}
vehicle('Green', 3, 1);

//10
let advertisingText = "Amazing Joe's Garage, we service :"

for (let i = 0; i < vehicles.length; i++) {
  console.log(advertisingText + vehicles0 + "and car's.");
}

//11
vehicles0.push("boat");

vehicles.push({
  type: 'boat'
});

//12
let emptyObject = {};

//13
let ourTeachers = {
  ivana: "",
  unmesh: "",
  "Arco & Vincent": "",
  jim: "",
};

console.log(ourTeachers);

//14
ourTeachers.ivana = "HTML & CSS";
ourTeachers.unmesh = "CLI";
ourTeachers["Arco & Vincent"] = "Git";
ourTeachers.jim = "JavaScript";

//15

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

//16

let o1 = {
  foo: 'bar'
};
let o2 = {
  foo: 'bar'
};
let o3 = o2;
console.log(o1);
console.log(o2);
console.log(o3);

o2 = {
  foo2: 'bar2'
};
console.log(o2);
console.log(o3);

o1 = {
  foo3: 'bar3'
};
console.log(o1);
console.log(o3);

//17
let bar = 42;
console.log(typeof typeof bar);
/*
it returns string because its inspecting the typeof the value of bar which is "number" 
  (typeof 42 === 'number') which is a string
*/