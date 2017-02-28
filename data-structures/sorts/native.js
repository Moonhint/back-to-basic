var arr = [];
for (var i = 0; i < 200000; i++) {
  arr.push(Math.floor(Math.random() * 101)); //push random number 0 - 100
}


console.time("watcher");

console.log(arr);

var arr = arr.sort(function(a, b){
  if (a > b) {
    return 1;
  }else{
    return -1;
  }
});

console.log(arr);

console.timeEnd("watcher");
