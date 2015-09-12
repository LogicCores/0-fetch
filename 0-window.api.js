
// TODO: Load adapters as needed on demand

exports.adapters = {
    window: require("./for/window/0-window.api")
}

exports.forContexts = function (contexts) {

    var exports = {};

    var Context = exports.Context = function (defaults) {
        var self = this;
    
        var state = window._.extend({
        }, defaults || {});


        self.resolveUri = function () {
            return contexts.page.resolveUri.apply(contexts.page, arguments);
        }
    }
    Context.prototype = Object.create(window.EventEmitter.prototype);
    Context.prototype.contexts = contexts;

    return exports;
}
