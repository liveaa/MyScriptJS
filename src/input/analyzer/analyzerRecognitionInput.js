(function (scope) {

    /**
     * Recognition input object for analyzer recognition
     *
     * @class AnalyzerRecognitionInput
     * @extends AbstractRecognitionInput
     * @constructor
     */
    function AnalyzerRecognitionInput () {
    }

    /**
     * Inheritance property
     */
    AnalyzerRecognitionInput.prototype = new scope.AbstractRecognitionInput();

    /**
     * Constructor property
     */
    AnalyzerRecognitionInput.prototype.constructor = AnalyzerRecognitionInput;

    /**
     * Get analyzer recognition parameters
     *
     * @method getParameters
     * @returns {AnalyzerParameter}
     */
    AnalyzerRecognitionInput.prototype.getParameters = function () {
        return this.parameter;
    };

    /**
     * Set analyzer recognition parameters
     *
     * @method setParameters
     * @param {AnalyzerParameter} parameters
     */
    AnalyzerRecognitionInput.prototype.setParameters = function (parameters) {
        this.parameter = parameters;
    };

    /**
     * Get input components
     *
     * @method getComponents
     * @returns {Array}
     */
    AnalyzerRecognitionInput.prototype.getComponents = function () {
        return this.components;
    };

    /**
     * Set input components
     *
     * @method setComponents
     * @param {Array} components
     */
    AnalyzerRecognitionInput.prototype.setComponents = function (components) {
        this.components = components;
    };

    /**
     * Get switch to children
     *
     * @method getSwitchToChildren
     * @returns {Boolean}
     */
    AnalyzerRecognitionInput.prototype.getSwitchToChildren = function () {
        return this.switchToChildren;
    };

    /**
     * Set switch to children
     *
     * @method setSwitchToChildren
     * @param {Boolean} switchToChildren
     */
    AnalyzerRecognitionInput.prototype.setSwitchToChildren = function (switchToChildren) {
        this.switchToChildren = switchToChildren;
    };

    // Export
    scope.AnalyzerRecognitionInput = AnalyzerRecognitionInput;
})(MyScript);