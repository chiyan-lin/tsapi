"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        ranks: {
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
        my_info: {
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
        }
    };
}
exports.default = default_1;
//# sourceMappingURL=GetFamilyMonthRanks.js.map