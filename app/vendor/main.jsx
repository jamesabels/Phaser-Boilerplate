// INIT FUNCTION 
window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-stage');

  game.state.add('Boot', PhaserBp.Boot);
  game.state.add('Preload', PhaserBp.Preload);
  game.state.add('Game', PhaserBp.Game);
  
  game.state.start('Boot');
};