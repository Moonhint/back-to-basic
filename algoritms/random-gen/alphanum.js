var arr = [];
var possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

for( var i=0; i < 10; i++ ){
  let isNumber = Math.floor(Math.random() * 2); // 1 or 0
  if (isNumber){
    arr.push( Math.floor(Math.random() * 101) );
  }else{
    arr.push( possible.charAt(Math.floor(Math.random() * possible.length)) );
  }
}

console.log(arr);
