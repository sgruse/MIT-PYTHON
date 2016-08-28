
var Queue = function() {
  this.items = [];
};

Queue.prototype.enQueue = function(val) {
  this.items.push(val);
}

Queue.prototype.deQueue = function() {
  this.items.shift();
}

Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
}

var doBfs = function(graph, source) {
  var bfsInfo = [];

  for (var i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null }
  }
  bfsInfo[source].distance = 0;

  var queue = new Queue();
  queue.enQueue(source);

  var current;
  var v;
  var adjList;

  while (!queue.isEmpty()) {
    current = queue.deQueue();
    adjList = graph[current];

    for (var j = 0; j < ajdList.length; j++) {
      v = adjList[j];
      if (ajdList[j + 1] !== null) {
        queue.enQueue(ajdList[j + 1]);
      }
      if (adjList[j - 1] !== null) {
        queue.enQueue(ajdList[j - 1]);
      }

    }

    v = adjList;

  }


  return bfsInfo;
}
