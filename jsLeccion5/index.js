const showOddNumbers = () => {
    for (let index = 100; index < 500; index++) {
        if (index % 2 !== 0) {
            console.log(index);
        }
    }
}

showOddNumbers();

const pickFruit = (fruit) => {
    switch (fruit) {
        case 'orange':
        case 'banana':
            console.log('Hmmm... delicious');
            break;
        case 'melon':
            console.log('This is may favourite fruit');
            break;
        case 'apple': 
            console.log('Not a fan');
            break;
    
        default:
            console.log('Not sure what fruit this is');
            break;
    }
}

pickFruit('orange');
pickFruit('banana');
pickFruit('melon');
pickFruit('apple');
pickFruit('mango');

const checkVacationPlan = (hasBeachHouse, degrees) => {
    if (hasBeachHouse && degrees > 20) {
        console.log('Beach, here I come!');
    } else if (!hasBeachHouse && degrees > 20) {
        console.log("I guess I\'ll just die of heat in Madrid");
    } else {
        console.log('Happy to stay in Madrid');
    }
}

checkVacationPlan(true, 30);
checkVacationPlan(false, 30);
checkVacationPlan(true, 10);
checkVacationPlan(false, 10);