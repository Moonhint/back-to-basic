function Counter(action) {
  // i only accessable via Counter
  var i = 0;

  switch (action) {
    case "add":
      return function(num) {
        //have a previlage to access i;
        i = i + num;
        return i;
      }
      break;
    case "remove":
      return function(num) {
        //have a previlage to access i;
        i = i - num;
        return i;
      }
      break;
    default:
  }
}

var watch1 = Counter('add');
var watch2 = Counter('remove');

console.log(watch1(2));
console.log(watch1(2))
console.log(watch2(1));
