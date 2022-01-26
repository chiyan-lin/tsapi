"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCJsInterface = exports.generateInterface = void 0;
var type_1 = require("../../util/type");
var const_1 = require("./const");
function getType(field, it, addRepeated) {
    if (addRepeated === void 0) { addRepeated = true; }
    var scopeNames = it.children.map(function (c) { return c.node.name; });
    var name = type_1.typeMapping(field.typeName, addRepeated ? undefined : 'integer');
    var fullName = scopeNames.indexOf(name) === -1 ? name : it.node.name + "." + name;
    if (field.repeated && addRepeated) {
        fullName += '[]';
    }
    return fullName;
}
function generateNormalField(f, it) {
    return "" + f.name + (f.optional ? '?' : '') + ": " + getType(f, it) + ";";
}
function generateMapField(f, it) {
    return "" + f.name + (f.optional ? '?' : '') + ": {\n    [key: string]: " + getType(f, it) + ",\n  };";
}
exports.generateInterface = function (mode) { return function (i) {
    return "\n" + (mode === const_1.GenerateMode.Global ? '' : 'export ') + "interface " + i.node.name + " {\n  " + i.node.fields
        .map(function (f) {
        if (f.type === 'normal') {
            return generateNormalField(f, i);
        }
        if (f.type === 'map') {
            return generateMapField(f, i);
        }
        return '';
    })
        .join('') + "\n}\n\n" + (i.children.length <= 0
        ? ''
        : (mode === const_1.GenerateMode.Global ? 'declare' : 'export') + " namespace " + i.node.name + " {\n  " + i.children.map(function (j) { return exports.generateInterface(const_1.GenerateMode.Module)(j); }).join('\n') + "\n}");
}; };
var BASEDATA = ['number', 'string', 'boolean', 'integer'];
exports.generateCJsInterface = function () { return function (i) {
    return "\n  var " + i.node.name + " = {\n  " + i.node.fields
        .map(function (f) {
        if (f.type === 'normal') {
            var type = getType(f, i, false);
            return f.name + ": " + (BASEDATA.includes(type) ? "'@" + type + "'" : type) + ",";
        }
        if (f.type === 'map') {
            return f.name + ": {},";
        }
        return '';
    })
        .join('') + "\n}\n  module.exports." + i.node.name + " = " + i.node.name + "\n" + (i.children.length <= 0
        ? ''
        : "var " + i.node.name + " = {\n  " + i.children.map(function (j) { return exports.generateCJsInterface()(j); }).join('\n') + "\n}\nmodule.exports." + i.node.name + " = " + i.node.name + "\n");
}; };
//# sourceMappingURL=interface.js.map