// bound function to context but not invoke it immediately

var context = {
  prop: "prop1"
}

var bound = function(arg1, arg2){
  console.info(this);
  return "return: " + this.prop + " | " + arg1 + " | " + arg2;
}

bound = bound.bind(context, "okinit");
console.log(bound("ok"));
