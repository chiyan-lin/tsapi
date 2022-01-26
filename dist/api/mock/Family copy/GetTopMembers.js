"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        top_infos: {
            rank: "number",
            user: { uid: "number", nick: "string", avatar: "string" },
            score: "number",
            charm: "number",
            contribution: "number",
            activity: "number"
        },
        my_detail: {
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
//# sourceMappingURL=GetTopMembers.js.map