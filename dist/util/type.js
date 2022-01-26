"use strict";
/**
 * typeMapping
 * 把 pb 中的类型转换为 ts 的类型
 *
 * @param {Type} typeName - typeName
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendedTypeMapping = exports.keywordTypeMapping = exports.typeMapping = void 0;
var NUM = 'number';
function typeMapping(typeName, numberType) {
    if (numberType === void 0) { numberType = NUM; }
    if (typeName.type === 'KeywordType') {
        return keywordTypeMapping(typeName, numberType);
    }
    return extendedTypeMapping(typeName);
}
exports.typeMapping = typeMapping;
function keywordTypeMapping(typeName, numberType) {
    var map = {
        bool: 'boolean',
        string: 'string',
        bytes: 'string',
        int32: numberType,
        fixed32: numberType,
        uint32: numberType,
        sint32: numberType,
        sfixed32: numberType,
        int64: numberType,
        fixed64: numberType,
        uint64: numberType,
        sint64: numberType,
        sfixed64: numberType,
        // int64: 'string',
        // fixed64: 'string',
        // uint64: 'string',
        // sint64: 'string',
        // sfixed64: 'string',
        float: numberType,
        double: numberType,
    };
    return map[typeName.typeName] || 'any';
}
exports.keywordTypeMapping = keywordTypeMapping;
/**
 * extendedTypeMapping
 *
 * @param {Type} typeName - typeName
 */
function extendedTypeMapping(typeName) {
    if (!typeName.path || typeName.path.length === 0) {
        return typeName.identifier.name;
    }
    return __spreadArrays(typeName.path.map(function (id) { return id.name; }), [typeName.identifier.name]).join('.');
}
exports.extendedTypeMapping = extendedTypeMapping;
//# sourceMappingURL=type.js.map