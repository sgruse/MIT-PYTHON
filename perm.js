var permutations = [];

function doPerm(str, arr) {
    console.log('DO PERM HIT WITH STRING : ', str, ' AND ARRAY : ', arr);
    if (typeof (str) == 'string') str = str.split('');
    if (str.length == 0) permutations.push(arr.join(''));
    for (var i = 0; i < str.length; i++) {
        console.log('STRING ARRAY IS : ', str);
        var x = str.splice(i, 1);
        console.log('SPLICED IS : ', x);
        arr.push(x);
        doPerm(str, arr);
        console.log('POP HIT ON : ', arr, ' AND STRING ARRAY IS : ', str);
        arr.pop();
        str.splice(i, 0, x);
        console.log('I IS : ', i);
        console.log('STRING ARRA IS : ', str)
    }
}
doPerm('ab', []);
console.log(permutations);
