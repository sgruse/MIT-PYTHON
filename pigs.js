
function solve(numLegs, numHeads) {
  var numPigs, numChicks, totLegs;
  for (numChicks = 0; numChicks <= numHeads; numChicks++) {
    numPigs = numHeads - numChicks;
    totLegs = 4 * numPigs + 2 * numChicks;
    if (totLegs == numLegs) {
      return {
        numPigs: numPigs,
        numChicks: numChicks
      }
    }
    else {
      continue
    }
    return -1
  }
}

console.log(solve(56, 20));
