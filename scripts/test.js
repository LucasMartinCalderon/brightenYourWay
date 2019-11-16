var aStar = require('ngraph.path').aStar;
var aGreedy = require('ngraph.path').aGreedy;
var createGraph = require('ngraph.graph');
var toDot = require('ngraph.todot');

let graph = createGraph();

graph.addLink('a', 'b', {weight: 10});
graph.addLink('a', 'c', {weight: 10});
graph.addLink('c', 'd', {weight: 5});
graph.addLink('b', 'd', {weight: 10});


var pathFinder = aStar(graph, {
  distance(a, b, link) {
    return link.data.weight;
  }
});
let path = pathFinder.find('a', 'd');

var dotContent = toDot(graph);

const fs = require('fs');

fs.writeFile("test", dotContent, function(err) {

    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
