// var init = 0;
// var burger_count = [1,2,3,4,5,6,7,8,9,10];
//
// var filtered_burger = burger_count.filter(function(n, index, arr){
//   return n > 5 ? true : false;
// }); // n required
// var mapped_burger = filtered_burger.map(function(n, index, arr){
//   return n * 2;
// }); // n required
// var reduce_burger = mapped_burger.reduce(function(acc, n, index, arr){
//   return acc + n;
// }, init); // acc, n required


'use strict';
const init = 0;
let burger_count = [1,2,3,4,5,6,7,8,9,10];

let filtered_burger = burger_count.filter((n, index, arr)=>{ return n > 5 ? true : false; }); // n required
let mapped_burger = filtered_burger.map((n, index, arr)=>{ return n * 2; }); // n required
let reduce_burger = mapped_burger.reduce((acc, n, index, arr)=>{ return acc + n; }, init); // acc, n required


console.info(reduce_burger);
