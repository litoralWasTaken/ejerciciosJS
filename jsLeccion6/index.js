function hello (nameArray) {
    for (const name of nameArray) {
        console.log(`Hello ${name}`);
    }
}

hello (['Daniel', 'Roxana', 'Ivan']);

const helloArrow = (nameArray) => {
    for (const name of nameArray) {
        console.log(`Hello ${name}`);
    }
}

const calculationObject = {
    sum: (num1, num2) => {
        return num1 + num2;
    },
    difference: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    }
}

const calculate = (operation, num1, num2) => {
    console.log(`Result is ${calculationObject[operation](num1, num2)}`)
}

calculate('sum', 2, 4);
calculate('difference', 6, 5);
calculate('multiply', 2, 0);