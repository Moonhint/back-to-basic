// 'use strict'; // use it to get direct result for this in prototype binding

String.prototype.occurences_of = function(str){
    var occ = (temp.match(/is/g) || []).length;
    return occ;
}

var temp = "This is a string.";
console.log(temp.occurences_of("is"));
