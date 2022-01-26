"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCJsEnum = exports.generateEnum = void 0;
var const_1 = require("./const");
// 转化成 ts 模式
exports.generateEnum = function (mode) {
    if (mode === void 0) { mode = const_1.GenerateMode.Global; }
    return function (ast) {
        return "\n    " + (mode === const_1.GenerateMode.Global ? 'declare' : 'export') + " enum " + ast.name.name + " {\n      " + ast.body.map(function (f) { return f.name.name + " = " + f.value.value + ","; }).join('\n') + "\n    }\n  ";
    };
};
// 转换成 commonjs 的形式
exports.generateCJsEnum = function () { return function (ast) {
    return "\n    var " + ast.name.name + " = function() {\n      var enums = {\n        " + ast.body.map(function (f) { return f.name.name + ": " + f.value.value + ","; }).join('\n') + "\n      }\n      return enums['" + ast.body[0].name.name + "']\n    }\n    module.exports." + ast.name.name + " = " + ast.name.name + "\n  ";
}; };
// var ${ast.name.name} = function() {
//   var enum = {
//     ${ast.body.map((f: EnumField): string => `'${f.name.name}': '${f.value.value}',`).join('\n')}
//   }
//   return enum[${ast.body[0].name.name}]
// }
// module.exports.${ast.name.name} = ${ast.name.name}
//# sourceMappingURL=enum.js.map