
function Stack() {
  this.stackArr = new Array();
  this.top = 0;
}

Stack.prototype.pop = function() {
  this.stackArr.pop();
  this.top --;
}

Stack.prototype.push = function(val) {
  this.stackArr.push(val);
  this.top ++;
}

Stack.prototype.peek = function () {
  return this.stackArr[this.top];
}

var x = new Stack();

x.push('doggy');
x.pop();

console.log(x);
