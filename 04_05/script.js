function findBiggestFraction(a,b) {
    var result;
    // cái này nè
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);

// console.log(fractionResult); // return result array so need to use console log
/*
  (2) ["firstFraction", 0.75]
  0: "firstFraction"
  1: 0.75
  length: 2
*/

// console.log("First fraction result: ", firstFraction);
// console.log("Second fraction result: ", secondFraction);
// console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");
