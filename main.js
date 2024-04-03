let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}

// console.log(total)

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}

// console.log(factorial(5));

let number = 0;
while (number <= 12) {
    // console.log(number);
    number = number + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
    result *= 2;
    counter += 1;
}
// console.log(result);

for (let number = 0; number <= 12; number = number + 2) {
    // console.log(number);
}

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        // console.log(current);
        break;
    }
}

// switch (prompt("what is the weather like?")) {
//     case "rainy":
//         console.log("remember to bring an umbrella!");
//         break;
//     case "sunny":
//         console.log("dress lightly!");
//         break;
//     case "cloudy":
//         console.log("go outside!");
//         break;
//     default:
//         console.log("unknown weather type!");
//         break;
// }

// LOOPING A TRIANGLE EXERCISE 1 
let tag = "#";
while (tag.length <= 7) {
    // console.log(tag)
    tag += "#";
}
// YOO! HAHAHAH MY FIRST EXERCISE. I JUST DID IT!😭;

// FIZZBUZZ
function fizzBuzz(number) {
    let i;
    for (i = 1; i <= number; i++) {
        let word = '';
        if (i % 3 === 0) {
            word += 'Fizz';
        }
        if (i % 5 === 0) {
            word += 'Buzz';
        }
        if (word == '') {
            console.log(i);
        } else {
            console.log(word);
        }
    }
}
// fizzBuzz(100);
// Hahahahah I COPIED THIS ONE😅😮‍💨

// CHESSBOARD
let hash = "#";
let space = " ";
let size = 8;

for (let x = 1; x <= size; x++) {
    let line = ' ';
    for (let y = 1; y <= size; y++) {
        if (x % 2) {
            if (y % 2) {
                line += space;
            } else {
                line += hash;
            }
        } else {
            if (y % 2) {
                line += hash;
            } else {
                line += space;
            }
        }
    }
    // console.log(line)
}

// const square = function (x) {
//     return x * x;
// };

// console.log(square(4));

const makeNoise = function () {
    console.log("Menace!");
};
// makeNoise();

// const power = function (base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };
// console.log(power(2, 10));

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0, "teaspoon", "cumin");
};

// console.log("The future says:", future());
function future() {
    return "You'll never have flying cars";
}

// ARROW FUNCTIONS
const square1 = (x) => {
    return x * x;
};
// OR
const square2 = x => x * x;
// one and the same thing

// function with no parenthses
const horn = () => {
    console.log("Menace");
};

// The Call Stack
function greet(who) {
    console.log("Hello " + who);
}
greet("Menace");
console.log("How are you?");

// function chicken () {
//     return egg();
// }
// function egg() {
//     return chicken();
// }
// console.log(chicken(), + "came first");
// maximum call stack exceeded

function square(x) {
    return x * x;
}
// console.log(square(4, true, "hedgehog"));

// Optional Arguments
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
// console.log(minus(10));
// console.log(minus(10, 5));

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
// console.log(power(4));
// console.log(power(2, 6))

// CLOSURE
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

// console.log(wrap1());
// console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;
}
// let twice = multiplier(2);
// console.log(twice(5));

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
// console.log(power(2, 4));

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
// console.log(findSolution(24));


// 3 DIFFERENT PROGRAMS🥹 SAME RESULT

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} cows`);

    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} chickens`);
}
// printFarmInventory(7, 11);

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}
// printFarmInventory(7, 11, 3);

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

// printFarmInventory(7, 11, 3);

// EXERCISES...