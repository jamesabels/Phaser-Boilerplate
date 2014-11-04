// Preload State
PhaserBp.Preload = function(game) {
};

PhaserBp.Preload.prototype = {

	preload: function () {
    this.load.image('renderTest', 'library/assets/mario.png');
    console.log('Mario Loaded!');
	},

	create: function () {

	},

	update: function () {
    this.state.start('Game');
	}
};
