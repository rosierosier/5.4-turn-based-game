var $ = require('jquery');
console.log("Hello World!");

function Player(kind, health, damage, items){
  this.kind = kind || enemy;
  this.health = health || 100;
  this.damage = damage || 0;
  this.items = ['purse', 'sword'];
}
// Player.prototype.health = 100;
// Player.prototype.damage = 0;

var soldier = new Player('soldier');
var medic = new Player('medic', 50);
var general = new Player('general', 200);

var enemy = new Player('enemy');

console.log(soldier.health);


function takeDamage(soldier){
  soldier.health = (soldier.health / 4 * 3);
}

$('.attack-button').on('click', function(){
  takeDamage(soldier);
  console.log(soldier.health);
})


$('.attack-button').on('click', function(){
  console.log('clicked');
  $('.health-meter').addClass('minus-5');
  // alert('lost 5 points');
  $('.attack-button').on('click', function(){
    $('.health-meter').addClass('minus-10');
    // alert('lost 5 more points');
    $('.attack-button').on('click', function(){
      $('.health-meter').addClass('minus-15');
      $('.attack-button').on('click', function(){
        $('.health-meter').addClass('minus-20');
        alert('you lose');
      });
    });
  });
})




//give attack button
//setTimeout for enemy respond
//if attacked, subtract 5 from health and add 5 to damage
//if helped, remove 5 from damage
//or maybe could just subtract from health each time attacked





// var userOneChoice = function(prompt) {
//     prompt("Do you choose rock, paper or scissors?");
// }
// var userTwoChoice = function(prompt) {
//     prompt("Do you choose rock, paper or scissors?");
// }
// var actions = function(){
//   if (userTwoChoice) {
//     userOneChoice
//   }
//   else if(computerChoice <= 0.67) {
//       computerChoice = "paper";
//   }
//   else {
//       computerChoice = "scissors";
//   };
// };
//
// function compare (choice1, choice2) {
//     if (choice1 === choice2) {
//         return "The result is a tie!";
//     } else if (choice1 === "rock") {
//         if (choice2 === "scissors") {
//             return "rock wins";
//         } else {
//             return "paper wins";
//         }
//     } else if (choice1 === "paper") {
//         if (choice2 === "rock") {
//             return "paper wins";
//         } else {
//             return "scissors wins";
//         };
//     }
// }
