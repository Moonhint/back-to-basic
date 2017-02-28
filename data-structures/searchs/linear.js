
/**
 * Array.prototype.linear_search - linear search implementation
 *
 * @param  {any} n  value for search
 * @return {number}   first index found in the array, return -1 if not found
 */
Array.prototype.linear_search = function(n){
  var a = this.valueOf();
  var index = -1;
  if (!isNaN(n)){
    for (var i = 0; i < a.length; i++) {
      if (a[i] === n){
        index = i;
        return index;
      }
    }
  }else{
    throw new Error("Not doing NaN business here!");
  }

  return index;
}

var arr = [];
for (var i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 101)); //push random number 0 - 100
}

console.time("watcher");

var index = arr.linear_search(4);
console.log(index);

console.timeEnd("watcher");
