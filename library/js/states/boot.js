//Boot State
var PhaserBp = {};

PhaserBp.Boot = function(game) {
  console.log("Boot State Initiated");
};

PhaserBp.Boot.prototype = {

    create: function() {
        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minHeight = 800;
        this.scale.minWidth = 600;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forcePortrait = false;
        this.input.addPointer();
        this.stage.backgroundColor = '#111111';

        this.state.start('Preload');
    }
}
