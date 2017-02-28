var arr = [];
for (var i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 101)); //push random number 0 - 100
}

/**
 * Array - bubble numberic sort
 *
 * @return {Array}  sort will return sorted numberic array
 */
Array.prototype.bubble_sort = function(){
  var a = this.valueOf();

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length - 1; j++) {
      if (a[j + 1] < a[j]) {
        var swap = a[j];
        a[j] = a[j + 1];
        a[j+1] = swap;
      }
    }
  }

  return a;
}



console.time("watcher");

console.log(arr);

var arr = arr.bubble_sort();

console.log(arr);

console.timeEnd("watcher");
