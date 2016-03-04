var $ = require('jquery');
// ####################################
//players are set up
// ####################################
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
// ####################################
//enemy is chosen randomly on page load
// ####################################
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

// ####################################
//show dropdown menu on click
// ####################################
$('.dropdown').on('click', function(){
  $('.dropdown-menu').show();
});

// ####################################
//display hero image on click & hide dropdown menu
// ####################################
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

// ####################################
var attackButton = $('.attack-button');
var enemyHealthMeter = $('.enemy-health-meter');
// var newProgressBar = $('.progress-bar-striped');
// var progressBar = {
//   newProgressBar
// }
// console.log(progressBar);

// ####################################
//hero takes action
//alert that enemy is attacking
//enemy takes action after 1 second
// ####################################
attackButton.on('click', function heroAttacks(event){
  enemyHealthMeter.addClass('minus-5');
  var timeout = setTimeout(function(){
    alert('enemy is attacking!');
    $('.health-meter').addClass('minus-5');
  }, 1000)
  attackButton.on('click', function(){
    enemyHealthMeter.addClass('minus-10');
    // var timeout = setTimeout(function(){
    //   alert('enemy is attacking!');
    //   $('.health-meter').addClass('minus-10');
    // }, 1000)
    attackButton.on('click', function(){
      enemyHealthMeter.addClass('minus-15');
      // var timeout = setTimeout(function(){
      //   alert('enemy is attacking!');
      //   $('.health-meter').addClass('minus-15');
      // }, 1000)
      attackButton.on('click', function(){
        enemyHealthMeter.addClass('minus-20');
        // var timeout = setTimeout(function(){
        //   alert('you win!');
        // }, 1000)
        var timeout2 = setTimeout(function(){
          document.location.reload(true);
        }, 2000)
      });
    });
  });
});
