var arr = [];
for (var i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 101)); //push random number 0 - 100
}

console.time("watcher");

var index = arr.indexOf(2);
console.log(index);

console.timeEnd("watcher");
