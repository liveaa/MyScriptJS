(function (scope) {

    /**
     * Represent a simple stroke input component
     *
     * @class Stroke
     * @extends AbstractComponent
     * @constructor
     */
    function Stroke () {
        this.type = 'stroke';
        this.x = [];
        this.y = [];
    }

    /**
     * Inheritance property
     */
    Stroke.prototype = new scope.AbstractComponent();

    /**
     * Constructor property
     */
    Stroke.prototype.constructor = Stroke;

    /**
     * Get the list of x coordinates
     *
     * @method getX
     * @returns {Array}
     */
    Stroke.prototype.getX = function () {
        return this.x;
    };

    /**
     * Set the list of x coordinates
     *
     * @method setX
     * @param {Array} x
     */
    Stroke.prototype.setX = function (x) {
        this.x = x;
    };

    /**
     * Add a x to the list of x coordinates
     *
     * @method addX
     * @param {Number} x
     */
    Stroke.prototype.addX = function (x) {
        this.x.push(x);
    };

    /**
     * Get the list of y coordinates
     *
     * @method getY
     * @returns {Array}
     */
    Stroke.prototype.getY = function () {
        return this.y;
    };

    /**
     * Set the list of y coordinates
     *
     * @method setY
     * @param {Array} y
     */
    Stroke.prototype.setY = function (y) {
        this.y = y;
    };

    /**
     * Add a y to the list of y coordinates
     *
     * @method addY
     * @param {Number} y
     */
    Stroke.prototype.addY = function (y) {
        this.y.push(y);
    };

    /**
     * Get the number of points for this stroke
     *
     * @method getLength
     * @returns {Number}
     */
    Stroke.prototype.getLength = function () {
        return this.x.length;
    };

    // Export
    scope.Stroke = Stroke;
})(MyScript);