//SINGLY LINKED LIST:

function Node (data) {
  this.data = data;
  this.next = null;
}

function SinglyList () {
  this._length = 0;
  this.head = null;
}

SinglyList.prototype.add = function (value) {
  var node = new Node(value);
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

// TO SEARCH NODE A CERTAIN POSITION

SinglyList.prototype.searchNodeAt = function(position) {
  var currentNode = this.head;
  var length = this._length;
  var count = 1;
  var message = {failure: 'Failure: This node is non-existant in the list'};

  // First case is invalid position
  if (length === 0 || position < 1 || position > length) {
    throw new Error(message.failure);
  }

  // Valid position
  while (count < position) {
    currentNode = currentNode.next;
    count ++;
  }
  return currentNode;
}

SinglyList.prototype.remove = function(position) {
  var currentNode = this.head;
  var count = 1;
  var length = this._length;
  var message = {failure: 'Failure: This node is non-existant in the list'};
  var beforeNodeToDelete = null;
  var nodeToDelete = null;
  var deleteNode = null;

// INVALIDE POSITION
  if (position < 0 || position > length) {
    throw new Error(message.failure);
  }

// IF THE FIRST NODE IS DELETED
  if (position === 1) {
    this.head = currentNode.next;
    deleteNode = currentNode;
    currentNode = null;
    this._length --;
    return deleteNode;
  }

// ANY OTHER NODE IS REMOVED
  while (count < position) {
    beforeNodeToDelete = currentNode
    nodeToDelete = currentNode.next;
    count ++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  // THIS IS SET SO THAT WE CAN RETURN THE DELETED NODE
  deleteNode = nodeToDelete;
  nodeToDelete = null;
  this._length --;

  return deleteNode;
}

SinglyList.prototype.removeDoup = function() {
  var prev = this.head;
  var current = prev.next;
  var hash = {};
  while (current != null) {
    if (!hash[current.data]) {
      hash[current.data] = true;
    }
    else {
      prev.next =  current.next
      this._length --;
    }
    console.log('HASH IS : ', hash);
    prev = current;
    current = current.next;
  }

}

var x = new SinglyList();

x.add('sam');
x.add('bobby');
x.add('bobby');
// x.add('zak');
// x.add('zak');
x.add('zak');
x.add('zak');
x.add('zak');
x.add('sam');
x.add({sam: 27, jerad: 27});

// console.log("NODE AT POSITION IS : ", x.searchNodeAt(2));
x.removeDoup();
// console.log('DELETE NODE AT POSITION : ', x.remove(2));

console.log(x);



// DOUBLYE LINKED LIST :
