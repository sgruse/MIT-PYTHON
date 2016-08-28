
// que first in first out
// stack last in first out
//
// function Que() {
//   this.que = new Array();
// }

function Stacked() {
  this.primary = [];
  this.secondary = [];
}

Stacked.prototype.push = function(x) {
  this.secondary.unshift(x);
  while (this.primary.length) {
    this.secondary.push(this.primary.shift());
  }
  var temp = this.primary;
  this.primary = this.secondary;
  this.secondary = temp;
}

Stacked.prototype.pop = function() {
  if (!this.primary.length) return false;

  return this.primary.pop();
}


var sam = new Stacked();
sam.push(1);
sam.push(2);
sam.push(3);
sam.push(4);
sam.pop();
sam.pop();


console.log(sam);
