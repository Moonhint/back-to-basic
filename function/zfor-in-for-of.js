let plants = ["Oak", "Elm", "Beech"];
plants["Tree"] = "Ash";
plants["Tree"] = "Cherry";
plants["Flower"] = "Rose";

var garden = [];

console.info(plants);

console.info("\n");
console.info("For in loop: ");
for (let plant in plants) {
  console.info(plant);
}

console.info("\n");
console.info("For of loop: ");
for (let plant of plants) {
  console.info(plant);
}
