window.foreign = {
    'sanitize': function (record) {
        var spaces = Array.prototype.slice.call(arguments, 1);
        return spaces.reduce(function (r, space) {
            return (function () {
                r[space] ? void 0 : r[space] = {};
                return r[space];
            })();
        }, record);
    }
};
var make = function make(localRuntime) {
    return function () {
        var Task01 = Elm.Native.Task.make(localRuntime);
        var Utils01 = Elm.Native.Utils.make(localRuntime);
        var Signal01 = Elm.Native.Signal.make(localRuntime);
        var Tuple001 = (Utils01 || 0)['Tuple0'];
        return (function () {
            foreign.sanitize(localRuntime, 'Native', 'LocalStorage');
            return localRuntime.Native.LocalStorage.values ? localRuntime.Native.LocalStorage.values : localRuntime.Native.LocalStorage.values = {
                'get': function (key) {
                    return Task01.asyncFunction(function (callback) {
                        return function () {
                            var x01 = localStorage.getItem(key);
                            return callback(x01 == null ? Task01.fail('Key not found') : Task01.succeed(x01));
                        }.call(this);
                    });
                },
                'set': F2(function (key, value) {
                    return Task01.asyncFunction(function (callback) {
                        return (function () {
                            localStorage.setItem(key, value);
                            return callback(Task01.succeed(Tuple001));
                        })();
                    });
                })
            };
        })();
    }.call(this);
};
foreign.sanitize(Elm, 'Native', 'LocalStorage');
Elm.Native.LocalStorage.make = make;
