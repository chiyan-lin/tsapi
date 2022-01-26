"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageVisitor = void 0;
var PackageVisitor = /** @class */ (function () {
    function PackageVisitor() {
        var _this = this;
        this.package = {};
        this.visitor = {
            Proto: {
                enter: function (path) {
                    path.context.package = _this.package;
                },
            },
            Package: {
                exit: function (path) {
                    var packageNode = path.node;
                    _this.package.type = packageNode.type;
                    _this.package.identifier = packageNode.identifier;
                },
            },
        };
    }
    PackageVisitor.prototype.getVisitor = function () {
        return this.visitor;
    };
    return PackageVisitor;
}());
exports.PackageVisitor = PackageVisitor;
//# sourceMappingURL=package.js.map