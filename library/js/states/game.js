PhaserBp.Game = function(game) {};

PhaserBp.Game.prototype = {

    create: function() {
      game.add.sprite(400 - 32, 300 - 32, 'renderTest');
    },

    update: function() {}

};
