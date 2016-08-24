var sortit = [6, 20, 17, 0, 32, -7, 45, 4];

quickSort(sortit);

function partition(arr, low, high) {
  var pivotIdx = low;
  var pivotVal = arr[pivotIdx];
  var i = low;
  var j = high;
  console.log('Pivot Value is : ', pivotVal);
  console.log('Array is : ', arr);

  while (i <= j) {
    while (arr[i] < pivotVal) {
      console.log('i count');
      i++;
    }
    while (arr[j] > pivotVal) {
      console.log('js is : ', j);
      console.log('j count');
      j--;
    }
    if (i <= j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }

  if (low < j) {
    partition(arr, low, j);
  }
  if (i < high) {
    partition(arr, i, high);
  }
}

function quickSort(arr) {
  var sorted = '';
  partition(arr, 0, arr.length - 1);
  for (var i = 0; i < arr.length; i++) {
    sorted += arr[i] + ' ,';
  }
  console.log(sorted);
}
