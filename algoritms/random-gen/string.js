var arr = [];
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for( var i=0; i < 10; i++ ){
  arr.push( possible.charAt(Math.floor(Math.random() * possible.length)) );
}

console.log(arr.toString());
