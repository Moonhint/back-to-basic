// CREATE || Object.create for inheritence by prototyping
var Thing = function (name) {
  this.type = "universal";
  this.name = name;
}

Thing.prototype = {
  say: function(something) {
    console.log(this.name + " say something " + something);
  },
  check_soul: function (){
    console.log(this.name + " soul is " + this.type);
  }
}

// constructor for God
var God = function(name){
  Thing.call(this, name); // Execute parent constructor also with current context
  this.type = "pure"; // overwrite the type
}

God.prototype = Object.create(Thing.prototype); // inherit God from Thing
God.prototype.constructor = God; // implement the constructor


// constructor for Demon
var Demon = function(name){
  Thing.call(this, name);
  this.type = "corrupted";
}

Demon.prototype = Object.create(Thing.prototype, {
  say: {
    value: function(something){ // Overwrite Thing prototype for say
    Thing.prototype.say.call(this, something); //call super 
    console.info(this.name + " say: Let's destory " + something + "!");
  }}
}); // inherit Demon from Thing
Demon.prototype.constructor = Demon;

/////////////////////////////////////////////////////////////////////////////////////
// NEW || new for instantiation
var anonymous = new Thing("Anonymous");
anonymous.check_soul();

var god = new God("Zeus");
god.check_soul();
god.say("omni");

var demon = new Demon("Lucifer");
demon.check_soul();
demon.say("human");
