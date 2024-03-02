let coinFlip;
do {
  coinFlip = Math.round(Math.random());
  if (coinFlip === 0) {
    result = "Heads";
    console.log("Result of coin flip is : ", result);
  } else if (coinFlip === 1) {
    result = "Tails";
    console.log("Result of coin flip is : ", result);
  }
} while (coinFlip === 0);
console.log("loop ends as the coinFlip becomes Tails ");
