// typeof NaN is "number"
// NaN === NaN is false
var not_NaN = function(n){
  if (!isNaN(n)){
    return true;
  }else{
    return false;
  }
}
