// function add(a, b){
//   return a+b;
// }
//
// console.log( add(3, 1) );
//
// var toAdd = [9, 5];
//
// console.log( add(...toAdd) );

// var groupA = ['Jan', 'Petru', 'Maria'];
// var groupB = ['Victor', 'Jojo'];
//
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var person2 = ['Gigi', 33];

// Hi Person, you are age
function greet (name, age) {
  console.log("Hi " + name + ". You are " + age);
}
greet(...person);
greet(...person2);

var names = ['Mike', 'Ben'];
var final = ['Vlad', ...names];
