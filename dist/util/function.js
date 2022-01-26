"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcReplacer = exports.jsonReplacer = void 0;
// keep a list of serialized functions
// https://stackoverflow.com/questions/7759200/is-there-any-possibility-to-have-json-stringify-preserve-functions
var functions = [];
// json replacer - returns a placeholder for functions
exports.jsonReplacer = function (key, val) {
    if (typeof val === 'function') {
        functions.push(val.toString());
        return '{func_' + (functions.length - 1) + '}';
    }
    return val;
};
// regex replacer - replaces placeholders with functions
exports.funcReplacer = function (match, id) {
    return functions[id];
};
//# sourceMappingURL=function.js.map