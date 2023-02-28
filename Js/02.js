const numbers = [23, 1, 45, 87, 4, 55, 6];
let biggestNumber = numbers[0];

for (let number of numbers) {
  if (number > biggestNumber) {
    biggestNumber = number;
  }
}

console.log(biggestNumber);
