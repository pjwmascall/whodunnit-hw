// Scope Homework: Who Dunnit

// Learning Objectives

// - Understand function scope
// - Know the difference in between the let and const keywords

// Brief

// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

// MVP

// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// // Prediction: The murderer is Miss Scarlet, because both scenario and declareMurderer live in the same scope.
// console.log(verdict);


// Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// // Prediction: The murderer is Professor Plum, because you cannot reassign the value of a const.
// console.log(verdict);


// Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// // Prediction: The first verdict is Mrs. Peacock, because declareMurderer is called first.
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// // Prediction: The second verdict is Professor Plum, because murderer lives in the same scope as secondVerdict.
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);


// Episode 4


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// // Prediction: The suspects are Miss Scarlet, Professor Plum, and Colonel Mustard, because suspectThree is reassigned in the scope of declareAllSuspects.
// console.log(suspects);
// // Prediction: Suspect three is Mrs. Peacock, because suspectThree lives in the global scope.
// console.log(`Suspect three is ${suspectThree}.`);


// Episode 5


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// // Prediction: The weapon is the Revolver, because the scenario is first mutated with changeWeapon, then accessed with declareWeapon.
// console.log(verdict);


// Episode 6


// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// // Prediction: The murderer is Mrs. White, because the murderer is reassigned to Mr. Green inside changeMurderer, and reassigned again inside changeMurderer to Mrs. White.
// console.log(verdict);


// Episode 7


// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// // Prediction: The murderer is Mr. Green, because the murderer variable is redeclared inside plotTwist(), meaning it does not overwrite the murderer declared on the global scope.
// console.log(verdict);


// Episode 8


// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// // Prediction: The weapon is the Candle Stick, because the room is changed in changeScenario, which changes the murderer in plotTwist, which changed the weapon in unexpectedOutcome.
// console.log(verdict);


// Episode 9


// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// // Prediction: The murderer is Professor Plum, because the murderer variable is redeclared in the if statement, meaning it does not apply to the global scope.
// console.log(verdict);

// Extensions

// Make up your own episode!

// let murderer = "Me"

// // Prediction: I am the murderer, because I wrote it that way.
// console.log(`The murderer is ${murderer}`)