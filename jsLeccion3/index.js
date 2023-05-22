const house = {
    color: 'white',
    numberOfWindows: 4,
    isVacationHouse: true
}

console.log(`My house is ${house.color} and has ${house.numberOfWindows} windows`);

Object.freeze(house);

const fruits = ['banana', 'apple', 'orange'];

console.log(fruits[1]);

fruits.push('mango');

console.log(`New array: ${fruits}, length: ${fruits.length}`);