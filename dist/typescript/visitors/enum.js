"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumVisitor = void 0;
var EnumVisitor = /** @class */ (function () {
    function EnumVisitor() {
        var _this = this;
        this.enums = [];
        this.visitor = {
            Proto: {
                exit: function (path) {
                    path.context.enums = _this.enums;
                },
            },
            Enum: {
                exit: function (path) {
                    _this.enums.push(path.node);
                },
            },
        };
    }
    EnumVisitor.prototype.getVisitor = function () {
        return this.visitor;
    };
    return EnumVisitor;
}());
exports.EnumVisitor = EnumVisitor;
//# sourceMappingURL=enum.js.map