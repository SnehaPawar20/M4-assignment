let coinFlip;
let noOfTime = parseInt(prompt("Enter any number to run loop no. of times"));

for (let i = 1; i <= noOfTime; i++) {
  coinFlip = Math.round(Math.random());
  if (coinFlip == 0) {
    result = "Heads";
    console.log("Result of coin flip is : ", result);
  } else if (coinFlip == 1) {
    result = "Tails";
    console.log("Result of coin flip is : ", result);
  }
}
