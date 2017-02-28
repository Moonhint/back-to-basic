var NameSpace = (function (person_list) {
  // Private
  var person_list = person_list || [];
  var alien_list = alien_list || [];

  var Person = function(name) { //create person
    this.name = name;
  };

  Person.prototype = {
    say: function(topic) {
      console.log(this.name + " say something " + topic);
    }
  };

  var Alien = function(name){
    Person.call(this, name);
    this.type = "alien";
  };

  Alien.prototype = Object.create(Person.prototype);
  Alien.prototype.constructor = Alien;

  var add_person = function(person){
    person_list.push(person);
    console.log("Adding person to namespace with name: " + person.name);
  };

  var add_alien = function(alien){
    alien_list.push(alien);
    console.log("Adding alien somewhere on namespace: " + alien.name);
  }

  // Public
  var public_obj = {
    born: function (name, type){
      var obj = {};
      if (type){
        var obj = new Alien(name);
        add_alien(obj);
      }else{
        var obj = new Person(name);
      }

      add_person(obj);

      return obj;
    },
    list_all: function (){
      return person_list;
    },
    only_alien: function (){
      return alien_list;
    }
  };

  return public_obj;
})();


var willy = NameSpace.born('Willy');
var toni = NameSpace.born('Toni');
var angel = NameSpace.born('Angel');
var people = NameSpace.list_all();
console.log(people);

willy.say("funny");
toni.say("silly");

console.log("\n\n");
// Inherit in namespacing
var xxx = NameSpace.born('XXX', 'alien');
xxx.say("zzz");

console.log("\n\n");
var people = NameSpace.list_all();
var alien = NameSpace.only_alien();
console.log(people);
console.log(alien);

console.log("\n\n");
console.info(NameSpace);
