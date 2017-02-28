
// Old Way
// var object_the_default = (obj) => {
//     var name = obj.name;
//     var status = obj.status;
//     var fix = obj.fix;
//     var times = obj.times;
//
//     console.log("What Happen: " + obj.name);
//     console.log("Locals said: " + obj.status);
//     console.log("Solution: " + obj.fix);
//     console.log("Occurences: " + obj.times);
// }


// The New Way, Default is Usefull Guys! (Now using node v6.3.1 (npm v3.10.5))
'use strict';
let object_the_default = ({name, status, fix, times} = {}) => {
  console.log("What Happen: " + name);
  console.log("Locals said: " + status);
  console.log("Solution: " + fix);
  console.log("Occurences: " + times);
}


console.info(object_the_default({
  name: 'Error',
  status: 'It keep happening',
  fix: 'Not found yet',
  times: 20
}));
