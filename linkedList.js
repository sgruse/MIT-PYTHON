
function Node (data) {
  this.data = data;
  this.next = null;
}

function SinglyList () {
  this._length = 0;
  this.head = null;
}

SinglyList.prototype.add = function (value) {
  var node = new Node (value);
  var currentNode = this.head;

// IF THERE IS NO HEAD NODE
  if (!currentNode) {
    this.head = node;
    this._length ++;

    return node;
  }

// IF THERE IS ALREADY NODES IN THE LIST
        // While there is a node with a NEXT pointer, we set current node to the next to move along until there is a node with no NEXT pointer and then insert the node there.
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;
  this._length ++;
  return node;
}


var x = new SinglyList();

x.add('sam');
x.add('bobby');

console.log(x);
