var map = {};

function fibo(n) {
  if (map[n]){
    return map[n];
  }else{
    if (n === 0){
      return 0;
    }else if (n === 1) {
      return 1;
    }else{
      var res = fibo(n-1) + fibo(n-2);
      map[n] = res;
      return res;
    }
  }
}

console.time("watcher");
for (var i = 0; i < 100; i++) {
  console.log("F" + i + " : " + fibo(i));
}
console.timeEnd("watcher");
