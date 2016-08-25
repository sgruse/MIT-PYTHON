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
