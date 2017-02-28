var arr = [];
for (var i = 0; i < 200000; i++) {
  arr.push(Math.floor(Math.random() * 101)); //push random number 0 - 100
}

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


console.time("watcher");

console.log(arr);

var arr = arr.merge_sort();

console.log(arr);

console.timeEnd("watcher");
