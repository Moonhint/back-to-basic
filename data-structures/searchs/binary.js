/**
 * Array - bubble numberic sort
 *
 * @return {Array}  sort will return sorted numberic array
 */
Array.prototype.merge_sort = function(){
  var a = this.valueOf();

  var divide = function(arr){
    var length, half_index, left_arr, right_arr;

    if (arr.length == 1){
      return arr;
    }else{
      length = arr.length;
      half_index = parseInt(length / 2);
      left_arr = arr.slice(0, half_index);
      right_arr = arr.slice(half_index, length);
    }

    return conquer(divide(left_arr), divide(right_arr));
  }


  /**
   * var conquer - merging sorted array
   *
   * @param  {type} left  array on the left
   * @param  {type} right array on the right
   * @return {type}       merged array
   */
  var conquer = function(left, right){
    var sorted = [];
    var i = 0; //left tracker
    var j = 0; //right tracker

    while (i < left.length || j < right.length) {
      if (i < left.length && j < right.length){
        if (left[i] < right[j]){
          sorted.push(left[i]);
          i++;
        }else{
          sorted.push(right[j]);
          j++
        }
      }else if (i < left.length){
        sorted.push(left[i]);
        i++;
      }else{
        sorted.push(right[j]);
        j++;
      }
    }

    return sorted;
  }

  return divide(a);
}


/**
 * Array.prototype.binary_search - implementation of binary search,
 * use merge_sort to make sure the array sorted first
 *
 * @param  {Number} n number to find in the array
 * @return {Number}   index of first number found, return -1 of not found
 */
Array.prototype.binary_search = function(n){
  var index = -1;
  var a = this.valueOf();

  if (!isNaN(n)){
    var lower_bound = 0;
    var upper_bound = a.length;

    while (upper_bound > lower_bound) {

      var half_index = parseInt(lower_bound + (upper_bound - lower_bound) / 2);
      var half_el = a[half_index];

      if (n === half_el){
        return half_index;
      }else if (n > half_el){
        lower_bound = half_index + 1;
      }else {
        upper_bound = half_index - 1;
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

var arr = arr.merge_sort();


console.time("watcher");

console.log(arr);
var index = arr.binary_search(4);
console.log(index);

console.timeEnd("watcher");
