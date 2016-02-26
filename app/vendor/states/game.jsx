// Game State
PhaserBp.Game = function(game) {
  console.log("Game State Initiated");
};

PhaserBp.Game.prototype = {

    create: function() {
      this.add.sprite(400 - 32, 300 - 32, 'renderTest');
    },

    update: function() {}

};
