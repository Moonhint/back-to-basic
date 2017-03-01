Date.prototype.next_day = function() {
  var currentDate = this.getDate();
  return new Date(this.setDate(currentDate +1));
}


var date = new Date("2017-03-31T10:25:56.024Z");
console.log(date);
console.log(date.next_day());
