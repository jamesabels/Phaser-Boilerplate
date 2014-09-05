/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2014 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* Phaser - MSPointer constructor.
*
* @class Phaser.MSPointer
* @classdesc The MSPointer class handles touch interactions with the game and the resulting Pointer objects.
* It will work only in Internet Explorer 10 and Windows Store or Windows Phone 8 apps using JavaScript.
* http://msdn.microsoft.com/en-us/library/ie/hh673557(v=vs.85).aspx
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
*/
Phaser.MSPointer = function (game) {

    /**
    * @property {Phaser.Game} game - A reference to the currently running game.
    */
    this.game = game;

    /**
    * @property {Object} callbackContext - The context under which callbacks are called (defaults to game).
    */
    this.callbackContext = this.game;

    /**
    * You can disable all Input by setting disabled = true. While set all new input related events will be ignored.
    * @property {boolean} disabled
    */
    this.disabled = false;

    /**
    * @property {function} _onMSPointerDown - Internal function to handle MSPointer events.
    * @private
    */
    this._onMSPointerDown = null;

    /**
    * @property {function} _onMSPointerMove - Internal function to handle MSPointer events.
    * @private
    */
    this._onMSPointerMove = null;

    /**
    * @property {function} _onMSPointerUp - Internal function to handle MSPointer events.
    * @private
    */
    this._onMSPointerUp = null;

};

Phaser.MSPointer.prototype = {

    /**
    * Starts the event listeners running.
    * @method Phaser.MSPointer#start
    */
    start: function () {

        if (this._onMSPointerDown !== null)
        {
            //  Avoid setting multiple listeners
            return;
        }

        var _this = this;

        if (this.game.device.mspointer === true)
        {
            this._onMSPointerDown = function (event) {
                return _this.onPointerDown(event);
            };

            this._onMSPointerMove = function (event) {
                return _this.onPointerMove(event);
            };

            this._onMSPointerUp = function (event) {
                return _this.onPointerUp(event);
            };

            this.game.renderer.view.addEventListener('MSPointerDown', this._onMSPointerDown, false);
            this.game.renderer.view.addEventListener('MSPointerMove', this._onMSPointerMove, false);
            this.game.renderer.view.addEventListener('MSPointerUp', this._onMSPointerUp, false);

            //  IE11+ uses non-prefix events
            this.game.renderer.view.addEventListener('pointerDown', this._onMSPointerDown, false);
            this.game.renderer.view.addEventListener('pointerMove', this._onMSPointerMove, false);
            this.game.renderer.view.addEventListener('pointerUp', this._onMSPointerUp, false);

            this.game.renderer.view.style['-ms-content-zooming'] = 'none';
            this.game.renderer.view.style['-ms-touch-action'] = 'none';

        }

    },

    /**
    * The function that handles the PointerDown event.
    * @method Phaser.MSPointer#onPointerDown
    * @param {PointerEvent} event
    */
    onPointerDown: function (event) {

        if (this.game.input.disabled || this.disabled)
        {
            return;
        }

        event.preventDefault();
        event.identifier = event.pointerId;

        this.game.input.startPointer(event);

    },

    /**
    * The function that handles the PointerMove event.
    * @method Phaser.MSPointer#onPointerMove
    * @param {PointerEvent } event
    */
    onPointerMove: function (event) {

        if (this.game.input.disabled || this.disabled)
        {
            return;
        }

        event.preventDefault();
        event.identifier = event.pointerId;

        this.game.input.updatePointer(event);

    },

    /**
    * The function that handles the PointerUp event.
    * @method Phaser.MSPointer#onPointerUp
    * @param {PointerEvent} event
    */
    onPointerUp: function (event) {

        if (this.game.input.disabled || this.disabled)
        {
            return;
        }

        event.preventDefault();
        event.identifier = event.pointerId;

        this.game.input.stopPointer(event);

    },

    /**
    * Stop the event listeners.
    * @method Phaser.MSPointer#stop
    */
    stop: function () {

        this.game.canvas.removeEventListener('MSPointerDown', this._onMSPointerDown);
        this.game.canvas.removeEventListener('MSPointerMove', this._onMSPointerMove);
        this.game.canvas.removeEventListener('MSPointerUp', this._onMSPointerUp);

        this.game.canvas.removeEventListener('pointerDown', this._onMSPointerDown);
        this.game.canvas.removeEventListener('pointerMove', this._onMSPointerMove);
        this.game.canvas.removeEventListener('pointerUp', this._onMSPointerUp);

    }

};

Phaser.MSPointer.prototype.constructor = Phaser.MSPointer;
