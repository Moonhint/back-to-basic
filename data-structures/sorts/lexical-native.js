var arr = ['ab', 'e', 'ac', 'bc', 'z', 'd', 'b', 'a', 'c', 'abc', 'ABC', 'D', 'E', 'A'];

console.time("watcher");

console.log(arr);

var arr = arr.sort();

console.log(arr);

console.timeEnd("watcher");
