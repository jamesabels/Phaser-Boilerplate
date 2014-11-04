// Preload State
PhaserBp.Preload = function(game) {
  console.log("Load State Initiated");
};

PhaserBp.Preload.prototype = {

	preload: function () {
    this.load.image('renderTest', 'library/assets/mario.png');
	},

	create: function () {

	},

	update: function () {
    this.state.start('Game');
	}
};
