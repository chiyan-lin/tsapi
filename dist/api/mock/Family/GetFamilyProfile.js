"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        family_info: {
            info: {
                fid: "string",
                name: "string",
                avatar: "string",
                member_count: "number",
                member_limit: "number",
                owner: "number",
                cute_id: "string"
            },
            rank: "number",
            score: "number",
            lv: "number"
        },
        top_infos: {
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
//# sourceMappingURL=GetFamilyProfile.js.map