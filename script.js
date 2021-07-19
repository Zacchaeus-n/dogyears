// human age in years
const myAge = 22;
// const myAge = 8;

// early years
let earlyYears = 2;

// ealy years calculation
earlyYears *= 10.5;

// taking 2years out of human years
let laterYears = myAge - 2;

// calculate the number of dog years accounted for by your later years
laterYears *= 4;

// human age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// convert my name to lowercase letters
const myName = "Zacchaeus".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge}  
  years old in human years which is
  ${myAgeInDogYears}  years old in dog years.`
);
