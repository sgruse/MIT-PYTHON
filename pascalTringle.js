function pascalSimple(numTiers) {

  var triangle = [
    [1]
  ],
  tier;

  if (numTiers === 1) return triangle;

  for (var j = 0; j < numTiers - 1; j++) {
    tier = [1];
    for (var k = 1; k < triangle[j].length; k++) {
      tier[k] = triangle[j][k] + triangle[j][k-1];
    }
    tier.push(1);
    triangle.push(tier);
  }
  for (var u = 0; u < triangle.length -1; u++) {
    var x = triangle[u].concat(triangle[u+1])
  }
  return x;
  // return triangle;
}


console.log(pascalSimple(6));
