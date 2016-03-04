var $ = require('jquery');

function Player(kind, health, damage, items){
  this.kind = kind || enemy;
  this.health = health || 100;
  this.damage = damage || 0;
  this.items = ['purse', 'sword'];
}
// Player.prototype.health = 100;
// Player.prototype.damage = 0;

var soldier = new Player('soldier');
var medic = new Player('medic', 70);
var general = new Player('general', 200);
var enemy = new Player('enemy', 50);
var strongEnemy = new Player('enemy', 100);

var playerOption = {
  soldier,
  medic,
  general
}
console.log(playerOption);

console.log(soldier.health);
console.log(medic.health);
console.log(general.health);

function enemyChoice(){
  var enemyChoice = Math.random();
  if (enemyChoice < 0.51) {
      enemyChoice = enemy;
      $('.enemy-display').append('<img src="http://worldartsme.com/images/scary-beast-clipart-1.jpg"/>')
  } else {
    enemyChoice = strongEnemy;
    $('.enemy-display').append('<img src="http://www.mascotdesigngallery.com/wp/wp-content/themes/pinboard/themify/img.php?src=http://www.mascotdesigngallery.com/wp/wp-content/uploads/2014/06/how-to-draw-funny-cartoons-goblin.jpg&w=280&h=&zc=1"/>')
  };
  console.log(enemyChoice);
}
enemyChoice();

function takeDamage(playerOption){
  console.log(playerOption);
  console.log(enemyChoice);
  if (enemyChoice = enemy) {
      playerOption.health = (playerOption.health - 10);
      enemy.health = (enemy.health - 10);
  }
  else {
      playerOption.health = (playerOption.health / 4 * 3);
      enemy.health = (enemy.health / 4 * 3);

  };
}

// function takeDamage(medic){
//   if (enemy.item = 'sword') {
//     medic.health = (medic.health / 4 * 3);
//   }
//   if (enemy.item = 'club') {
//     medic.health = (medic.health - 10);
//   };
// }
//
// function takeDamage(general){
//   if (enemy.item = 'sword') {
//     general.health = (general.health / 4 * 3);
//   }
//   if (enemy.item = 'club') {
//     general.health = (general.health - 10);
//   };
// }






//show dropdown menu on click
$('.dropdown').on('click', function(){
  $('.dropdown-menu').show();
});

//display hero image on click & hide dropdown menu
$('#soldier').on('click', function(){
  $('.player-display').append('<img src="http://icons.iconarchive.com/icons/martin-berube/people/256/soldier-icon.png"/>')
  $('.dropdown-menu').addClass('hide');
  var playerOption = soldier;
  console.log(playerOption);
  return soldier;
});

$('#medic').on('click', function(){
  $('.player-display').append('<img src="http://icons.iconarchive.com/icons/martin-berube/people/256/soldier-icon.png"/>')
  $('.dropdown-menu').addClass('hide');
  var playerOption = medic;
  console.log(playerOption);
  return medic;
});

$('#general').on('click', function(){
  $('.player-display').append('<img src="http://png.clipart.me/graphics/thumbs/154/general-officer_154122491.jpg"/>')
  $('.dropdown-menu').addClass('hide');
  var playerOption = general;
  console.log(playerOption);
  return general;
});

var attackButton = $('.attack-button');
var enemyHealthMeter = $('.enemy-health-meter');
//soldier attacks and takesDamage (needs to have a setTimeout for damage to show)
// attackButton.on('click', function(){
//   takeDamage(soldier);
//   console.log(soldier.health);
// })

//hero takes action
attackButton.on('click', function(){
  console.log('clicked');
  enemyHealthMeter.addClass('minus-5');
  attackButton.on('click', function(){
    enemyHealthMeter.addClass('minus-10');
    attackButton.on('click', function(){
      enemyHealthMeter.addClass('minus-15');
      attackButton.on('click', function(){
        enemyHealthMeter.addClass('minus-20');
        alert('you win!');
        document.location.reload(true);
      });
    });
  });
});

//enemy takes action
function 


//give attack button
//setTimeout for enemy respond
//if attacked, subtract 5 from health and add 5 to damage
//or maybe could just subtract from health each time attacked


var userChoice = function(prompt) {
    prompt("Do you choose soldier, medic, or general?");
}



function compare (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        };
    }
}
compare (userChoice, computerChoice);
