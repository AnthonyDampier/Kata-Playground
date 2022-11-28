function narcissistic(value){
    let total = 0;
    const digitArray = value.toString().split("");
    for (digit of digitArray){
        total += Math.pow(digit, digitArray.length);
    }
    return value === total;
}

console.log(narcissistic(153));
console.log(narcissistic(1654));