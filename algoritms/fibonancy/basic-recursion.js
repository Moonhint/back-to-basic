function fibo(n) {
  if (n === 0){
    return 0;
  }else if (n === 1) {
    return 1;
  }else{
    return fibo(n-1) + fibo(n-2);
  }
}

console.time("watcher");
for (var i = 0; i < 40; i++) {
  console.log("F" + i + " : " + fibo(i));
}
console.timeEnd("watcher");
