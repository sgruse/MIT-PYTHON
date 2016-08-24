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
