// CREATE || Object.create for inheritence by prototyping
'use strict';

class Thing {
  constructor (name){
    this.type = "universal";
    this.name = name;
  }

  say(something) {
    console.log(this.name + " say something " + something);
  }

  check_soul() {
    console.log(this.name + " soul is " + this.type);
  }
}

class God extends Thing { // inherit God from Thing and implement the constructor
  constructor (name){
    super(name); // Execute parent constructor also with current context
    this.type = "pure"; // overwrite the type
  }
}

class Demon extends Thing { // inherit Demon from Thing and implement the constructor
  constructor (name){
    super(name); // Execute parent constructor also with current context
    this.type = "corrupted"; // overwrite the type
  }

  say(something) { // Overwrite Thing prototype for say
    super.say.call(this, something); //call super
    console.info(this.name + " say: Hei let's destory " + something + " instead!");
  }
}


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
