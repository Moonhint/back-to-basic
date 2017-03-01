var is_really_object = function(obj){
  if ((obj instanceof Array) === false && (obj !== null) && (typeof obj === 'object')){
    return true;
  }else{
    return false;
  }
}
