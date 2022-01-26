"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        sequence: "number",
        join_count: "number",
        win_count: "number",
        remain_sec: "number",
        total_ranks: {
            user: { uid: "number", nick: "string", avatar: "string" },
            family: {
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
            sub_value: "number"
        },
        daily_ranks: {
            user: { uid: "number", nick: "string", avatar: "string" },
            family: {
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
            sub_value: "number"
        }
    };
}
exports.default = default_1;
//# sourceMappingURL=GetMatchScoreRank.js.map