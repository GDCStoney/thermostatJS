const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');
const Weather = require('../src/weather.js');

airport01 = new Airport('Airport01', new Weather);
airport02 = new Airport('Airport02', new Weather);

plane01 = new Plane('Plane01', airport01);
plane02 = new Plane('Plane02', airport02);

console.log('Check the different objects are created correctly:');
console.log(airport01);
console.log(airport02);
console.log(plane01);
console.log(plane02);

console.log('\nCheck that a plane can take off');
do {
  console.log('\t' + plane01.takeOff(airport02));
} while (plane01.location != "In Air");

console.log('\ncheck that a plane can land');
do {
  console.log('\t' + plane01.land());
} while (plane01.location === "In Air");

console.log('\nMove plane to airport01, so that we can check edge cases');
do {
  console.log('\t' + plane01.takeOff(airport01));
} while (plane01.location != "In Air");
do {
  console.log('\t' + plane01.land());
} while (plane01.location === "In Air");

console.log("\nCheck that a plane can't take off without a valid destination");
console.log('\t' + plane02.takeOff(''));
console.log('\t' + plane02.takeOff(airport02));

console.log("\ncheck that a plane can't land if an airport is full");
do {
  console.log('\t' + plane01.takeOff(airport02));
} while (plane01.location != "In Air");
airport02.capacity = 1;
console.log('\t' + plane01.land());
console.log('\nCheck the Airport02 details, inc capacity');
console.log(airport02);
