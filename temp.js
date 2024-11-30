// let obj = {
//   name: "Tony Stark",
//   heroic_name: "Iron Man",
//   powers: "Meta Human",
//   ip: 2000,
// };

// let user = {
//   name: "Alice",
// };

// console.log(user?.address?.city);

// let z = undefined;
// let result = z ?? console.log("Hi");

// (function () {
//   console.log(5);
// })();

const triArea = (l, h) => {
  return 0.5 * l * h;
};

const recArea = (l, b) => {
  return l * b;
};

const cirArea = (r) => {
  console.log(this);
  return 3.141 * r * r;
};

calculateArea = (a, b = 1, cb) => {
  return cb(a, b, cb);
};

let arr = [1, 2, 3, 4];

let brr = [7, 8, 9];

let crr = [...arr, ...brr];
// console.log(crr);

let drr = [1, 2, 3, ...brr];
// console.log(drr);

let err = [...brr, 1, 2, 3];
// console.log(err);

let obj1 = {
  name: "Tony Stark",
  age: 48,
  stats: {
    level: "Original Avenger",
    power: "meta human",
    about: {
      occupation: "billionare",
    },
  },
};

let obj2 = { ...obj1 };

// obj2.stats.about.occupation = "Philanthropist";
// console.log(obj1);

let obj3 = JSON.parse(JSON.stringify(obj1));

obj3.stats.about.occupation = "Philanthropist";

let obbjOther = {
  name: "Susan",
  age: 26,
};
let obbj = {
  name: "John",
  age: 58,
  printName: function (a = 0, b = 0, c = 0) {
    console.log(this.name, this.age, a, b, c);
  },
};

let binded = obbj.printName.bind(obbjOther);
binded(1, 2, 3);
