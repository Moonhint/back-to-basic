
// The Problem
// var loop_me = function (name_arr){
//   for (var i in name_arr) {
//     setTimeout(function () {
//       console.log(name_arr[i]);
//     }, 500);
//   }
// }

// Old Way
// var loop_me = function (name_arr){
//   for (var i in name_arr) {

//     var closured_function = function(){
//       var n = i;
//       return function () {
//         console.log(name_arr[n]);
//       }
//     }

//     setTimeout(closured_function(), 500);
//   }
// }

// New Way, The Power of Let
// 'use strict';

// let loop_me = (name_arr) => {
//   for (let i in name_arr) {
//     setTimeout(() => {
//       console.log(name_arr[i])
//     }, 500);
//   }
// }

var the_list = ["Findc", "Findg", "Findb", "Finda"];

loop_me(the_list);
