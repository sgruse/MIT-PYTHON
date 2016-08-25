var permutations = [];

function doPerm(str, arr) {
    console.log('DO PERM HIT WITH STRING : ', str, ' AND ARRAY : ', arr);
    if (typeof (str) == 'string') str = str.split('');
    if (str.length == 0) permutations.push(arr.join(''));
    for (var i = 0; i < str.length; i++) {
        console.log('STRING ARRAY IS : ', str);
        console.log('I IS : ', i);
        var x = str.splice(i, 1);
        console.log('SPLICED IS : ', x);
        arr.push(x);
        doPerm(str, arr);
        console.log('POP HIT ON : ', arr, ' AND STRING ARRAY IS : ', str);
        arr.pop();
        str.splice(i, 0, x);
        console.log('STRING ARRA IS : ', str)
    }
}
doPerm('ab', []);
console.log(permutations);


// BETTER WAY AND UTILIZING HEAPS ALGORITHM

function perms(data) {
    if (!(data instanceof Array)) {
        throw new TypeError("input data must be an Array");
    }

    data = data.slice();  // make a copy
    var permutations = [],
        stack = [];

    function doPerm() {
        if (data.length == 0) {
            permutations.push(stack.slice());
        }
        for (var i = 0; i < data.length; i++) {
            var x = data.splice(i, 1);
            stack.push(x);
            doPerm();
            stack.pop();
            data.splice(i, 0, x);
        }
    }

    doPerm();
    return permutations;
}

var input = "abcd".split('');
var result = perms(input);
for (var i = 0; i < result.length; i++) {
    result[i] = result[i].join('');
}
console.log(result);


//  GET MIN INDEX

function getMinIndex (arr) {
  var minIndex = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

// IS PERMUTATION :: IF WHITE SPACE DOESN'T MATTER


function isPerm (string1, string2) {
  var wrong = 'Not a permuatation';
  var x1 = string1.toLowerCase().replace(/\W/g, '').split('').sort('');
  var x2 = string2.toLowerCase().replace(/\W/g, '').split('').sort('');
  if (x1.length !== x2.length) return wrong;

  for (var i = 0; i < x1.length; i++) {
    if (x1[i] !== x2[i]) return wrong;
  }
  return true;
}

// REPLACE WHITE SPACE WITH %20

function replay (string) {
  var replaceWith = '%20';
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] == ' ') {
      output += replaceWith;
      while (string[i] == ' ') {
        i++
      }
    }
    output += string[i];
  }
  return output;
}

// CHECKING ARRAY'S OF EQUAL LENGTH FOR THE SAME INPUTS

function check (arr1, arr2) {
  var j = 0;
  for (var i = 0; i < arr1.length; i++) {
    j = 0;
    while (j < arr1.length + 1) {
     if (arr2[j] == arr1[i]) {
       break;
     }
     if (arr2[j] !== arr1[i]) {
       j++
     }
     if (j == arr1.length + 1) return false
  }
}
  return true;
}

// Rotating matrix

var grid = [
  [0,0], [0,1], [0,2], [0,3],
  [1,0], [1,1], [1,2], [1,3],
  [2,0], [2,1], [2,2], [2,3],
  [3,0], [3,1], [3,2], [3,3]
];

var newGrid = [];
var rowLength = Math.sqrt(grid.length);
newGrid.length = grid.length

for (var i = 0; i < grid.length; i++)
{
    //convert to x/y
    var x = i % rowLength;
    var y = Math.floor(i / rowLength);

    //find new x/y
    var newX = rowLength - y - 1;
    var newY = x;

    //convert back to index
    var newPosition = newY * rowLength + newX;
    newGrid[newPosition] = grid[i];
}

for (var i = 0; i < newGrid.length; i++)
{
    console.log(newGrid[i])
}

//  Simplified

var grid = [
  [0,0], [0,1], [0,2], [0,3], [0,4],
  [1,0], [1,1], [1,2], [1,3], [1,4],
  [2,0], [2,1], [2,2], [2,3], [2,4],
  [3,0], [3,1], [3,2], [3,3], [3,4],
  [4,0], [4,1], [4,2], [4,3], [4,4]
];

var side = Math.sqrt(grid.length);

var rotate = function(d,i){
   return [Math.abs(i % side - side+1), Math.floor(i/side)]
}
grid = grid.map(rotate);
