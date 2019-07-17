//labeena's game
// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score = 0;
var labelscore;
var player;
var pipes = [];

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
  game.load.image("character","../assets/flappy-cropped.png");
  game.load.audio("score", "../assets/point.ogg");
  game.load.image("pipeBlock","../assets/pipe2-body.png");
  game.load.audio("flap","../assets/0128.ogg");
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene
    game.stage.setBackgroundColor("#5796b3");
    //to make images appear where you click

    game.input
    .keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    .onDown.add(playerJump);

//to move in different directions


    labelscore = game.add.text(10, 10, score.toString(),{font:"30px Arial"});
    //for the player image
    player = game.add.sprite(50,50,"character");
    generatePipe();

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(player);
    player.body.gravity.y = 200;

    var pipeInterval = 1.75 * Phaser.Timer.SECOND;
        game.time.events.loop(
         pipeInterval,
         generatePipe,
        );

        game.time.events.loop(
          pipeInterval,
          changeScore,
        );

}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
  game.physics.arcade.overlap(player, pipes, gameOver);
  if(player.body.y<0 || player.body.y>400){
    gameOver();
  }
}

function gameOver() {
 location.reload();
}
//this function makes images appear where you click
//this function is called when the spacebar is played to play a sound

//this will make a score counter
function changeScore() {
  score = score + 1;
  game.sound.play("score");
  labelscore.setText(score.toString());
}

function generatePipe() {

  var gapStart = game.rnd.integerInRange(1,5)
  for(var count = 0; count < 8; count += 1){
    if(count != gapStart && count!= gapStart+1){addPipeBlock(750, count * 50);
  }
    }
}

function addPipeBlock(x,y) {
  var pipeBlock = game.add.sprite(x,y,"pipeBlock");
  pipes.push(pipeBlock);
  game.physics.enable(pipeBlock);
  pipeBlock.body.velocity.x = -200;

}

function playerJump(){
  player.body.velocity.y = -100;
  game.sound.play("flap");
}
