//Boot State
var PhaserBp = {};

PhaserBp.Boot = function(game) {};

PhaserBp.Boot.prototype = {

    preload: function() {
      this.load.image('preloaderBar', 'images/loader_bar.png');
      this.load.image('titleimage', 'images/TitleImage.png');
    },

    create: function() {
    this.input.maxPointers = 1;
		// this.stage.disableVisibilityChange = false;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minHeight = 800;
    this.scale.minWidth = 600;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = false;
		this.scale.setScreenSize(true);
		this.input.addPointer();
		this.stage.backgroundColor = '#111111';

    this.state.start('Preload');
    }
}
