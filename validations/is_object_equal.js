Object.prototype.equal_with = function(objB){
  var objA = this.valueOf();

  var is_really_object = function(obj){
    if ((obj instanceof Array) === false && (obj !== null) && (typeof obj === 'object')){
      return true;
    }else{
      return false;
    }
  }

  if (is_really_object(objA) && is_really_object(objB)){

    var a_keys = Object.getOwnPropertyNames(objA),
        b_keys = Object.getOwnPropertyNames(objB);

    if (a_keys.length !== b_keys.length){
      return false;
    }else{

      for (var i = 0; i < a_keys.length; i++) {
        var key = a_keys[i];

        if (objA[key] !== objB[key]){
          return false;
        }
      }

    }

    return true;

  }else{
    throw new Error("cannot compare with not an object");
  }

}


var objA = {a: 1, b:2, c:3},
    objB = {a: 1, b:2, c:3},
    objC = {a: 1, b:3, c:4};

console.log(objA.equal_with(objB));
console.log(objB.equal_with(objC));
