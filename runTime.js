var data = require('./data/MOCK_DATA.js');

function output(x) {
  console.log(x);
}


function runTime() {
  for (var i = 0; i < data.length ; i++) {
  //  console.log(data[i]);
  output();
  }
}

function runTime2() {
  var i = data.length;
  do {
    output(data[i]);
    // console.log(data[i]);
  }
  while(--i);
}

console.time('label');
console.log(runTime2());
console.timeEnd('label');
