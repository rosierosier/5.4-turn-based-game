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

var prince = new Player('prince');
var princess = new Player('princess', 70);
var boy = new Player('boy', 100);
var king = new Player('king', 90);
var enemy = new Player('enemy', 50);
var strongEnemy = new Player('enemy', 100);

var playerOption = {
  prince,
  princess,
  boy,
  king
}

// ####################################
var attackButton = $('.attack-button');
// var enemyHealth = $('.enemy-progress-bar-striped');
// var playerHealth = $('.player-progress-bar');

// ####################################
//progress bars
// ####################################
var enemyhealth = document.getElementById("enemy-progress-bar")
console.log(enemyhealth);
// enemyhealth.value = enemyhealth.value - 10;
// console.log(enemyhealth.value);
var playerhealth = document.getElementById("player-progress-bar")


// ####################################
//enemy is chosen randomly on page load
// ####################################
function enemyChoice(){
  var enemyChoice = Math.random();
  if (enemyChoice < 0.51) {
      enemyChoice = enemy;
      $('.enemy-display').append('<img src="http://4vector.com/i/free-vector-cartoon-dragon-image-04-vector_094069_4.jpg"/>')
  } else {
    enemyChoice = strongEnemy;
    $('.enemy-display').append('<img src="http://images.all-free-download.com/images/graphiclarge/cute_cartoon_dragon_02_vector_156461.jpg"/>')
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
//player choice changes value of health meter
// ####################################
$('#prince').on('click', function(){
  $('.player-display').append('<img src="http://icons.iconarchive.com/icons/martin-berube/people/256/knight-icon.png"/>')
  $('.dropdown-menu').addClass('hide');
  var playerOption = prince;
  console.log(playerOption);
  return prince;
});

$('#princess').on('click', function(){
  $('.player-display').append('<img src="http://icons.iconarchive.com/icons/martin-berube/people/256/princess-icon.png"/>')
  $('.dropdown-menu').addClass('hide');
  var playerOption = princess;
  playerhealth.value = playerhealth.value - 30;
  console.princess;
});

$('#boy').on('click', function(){
  $('.player-display').append('<img src="http://icons.iconarchive.com/icons/martin-berube/people/256/kid-icon.png"/>')
  $('.dropdown-menu').addClass('hide');
  var playerOption = boy;
  console.boy;
});

$('#king').on('click', function(){
  $('.player-display').append('<img src="http://icons.iconarchive.com/icons/martin-berube/people/256/king-icon.png"/>')
  $('.dropdown-menu').addClass('hide');
  var playerOption = king;
  playerhealth.value = playerhealth.value - 10;
  console.log(playerOption);
  return king;
});


// ####################################
//hero takes action
//alert that enemy is attacking
//enemy takes action after 1 second
// ####################################
attackButton.on('click', function heroAttacks(event){
  enemyhealth.value = enemyhealth.value - 10;
  var timeout = setTimeout(function(){
    alert('enemy is attacking!');
    playerhealth.value = playerhealth.value - 10;
  }, 1000)

  // attackButton.on('click', function(){
  //   enemyhealth.value = enemyhealth.value - 10;
  //   var timeout = setTimeout(function(){
  //     alert('enemy is attacking!');
  //     playerhealth.value = playerhealth.value - 10;
  //   }, 1000)
  //
  //   attackButton.on('click', function(){
  //     enemyhealth.value = enemyhealth.value - 10;
  //     var timeout = setTimeout(function(){
  //       alert('enemy is attacking!');
  //       playerhealth.value = playerhealth.value - 10;
  //     }, 1000)
  //
  //     attackButton.on('click', function(){
  //       enemyhealth.value = enemyhealth.value - 10;
  //       var timeout = setTimeout(function(){
  //         alert('you win!');
  //       }, 1000)
  //       var timeout2 = setTimeout(function(){
  //         document.location.reload(true);
  //       }, 2000)
  //     });
  //   });
  // });
});
