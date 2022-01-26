"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
var visitor_1 = require("../../semantic/visitor");
var path_1 = require("../../visitor/path");
var enum_1 = require("../visitors/enum");
var import_1 = require("../visitors/import");
var interface_1 = require("../visitors/interface");
var service_1 = require("../visitors/service");
var package_1 = require("../visitors/package");
var Generator = /** @class */ (function () {
    function Generator(ast, plugins) {
        var _this = this;
        if (plugins === void 0) { plugins = []; }
        this.context = {};
        this.currentNode = null;
        this.walk = function (node) {
            var lastNode = _this.currentNode;
            _this.currentNode = node;
            var currentPath = new path_1.Path(node, lastNode, _this.context);
            // getActions 函数会通过 visitor[node.type] 来匹配对应子visitor
            for (var _i = 0, _a = _this.visitors; _i < _a.length; _i++) {
                var visitor = _a[_i];
                var actions = Generator.getActions(node, visitor);
                actions.enter(currentPath, _this.walk);
            }
            for (var _b = 0, _c = _this.visitors; _b < _c.length; _b++) {
                var visitor = _c[_b];
                var actions = Generator.getActions(node, visitor);
                actions.in(currentPath, _this.walk);
            }
            for (var _d = 0, _e = _this.visitors; _d < _e.length; _d++) {
                var visitor = _e[_d];
                var actions = Generator.getActions(node, visitor);
                actions.exit(currentPath, _this.walk);
            }
            _this.currentNode = lastNode;
        };
        this.ast = ast;
        this.visitors = __spreadArrays([
            new enum_1.EnumVisitor().getVisitor(),
            new interface_1.InterfaceVisitor().getVisitor(),
            new service_1.ServiceVisitor().getVisitor(),
            new import_1.ImportVisitor().getVisitor(),
            new package_1.PackageVisitor().getVisitor()
        ], plugins, [
            visitor_1.semanticVisitor,
        ]);
    }
    Generator.getActions = function (node, visitor) {
        if (typeof visitor[node.type] === 'function') {
            return {
                enter: Generator.noop,
                in: visitor[node.type],
                exit: Generator.noop,
            };
        }
        // semantic 里面的操作
        return __assign({ enter: Generator.noop, in: Generator.noop, exit: Generator.noop }, visitor[node.type]);
    };
    Generator.prototype.getResult = function () {
        this.walk(this.ast);
        return this.context;
    };
    Generator.noop = function () {
        // pass
    };
    return Generator;
}());
exports.Generator = Generator;
//# sourceMappingURL=index.js.map