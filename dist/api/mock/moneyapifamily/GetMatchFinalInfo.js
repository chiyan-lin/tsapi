"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        sequence: "number",
        begin_ts: "number",
        remain_sec: "number",
        match_pairs: {
            left_family: {
                fid: "string",
                name: "string",
                avatar: "string",
                member_count: "number",
                member_limit: "number",
                owner: "number",
                cute_id: "string"
            },
            left_score: "number",
            right_family: {
                fid: "string",
                name: "string",
                avatar: "string",
                member_count: "number",
                member_limit: "number",
                owner: "number",
                cute_id: "string"
            },
            right_score: "number"
        },
        cur_tops: {
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
//# sourceMappingURL=GetMatchFinalInfo.js.map