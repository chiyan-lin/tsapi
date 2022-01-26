"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        infos: {
            rank: "number",
            user: { uid: "number", nick: "string", avatar: "string" },
            score: "number",
            charm: "number",
            contribution: "number",
            activity: "number"
        }
    };
}
exports.default = default_1;
//# sourceMappingURL=GetFamilyMembers.js.map