// bound function to context and call it
// for Call -> passing argruments
// for Apply -> passing array

var context = {
  prop: "prop1"
}

var bound = function(arg1, arg2){
  console.info(this);
  return "return: " + this.prop + " | " + arg1 + " | " + arg2;
}

console.log(bound.call(context, "okinit"));
