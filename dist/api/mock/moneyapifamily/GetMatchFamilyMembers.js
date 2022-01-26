"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        sequence: "number",
        members: {
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
        cursor: "string",
        has_more: "boolean",
        family_score: "number",
        family_rank: "number",
        family_info: {
            fid: "string",
            name: "string",
            avatar: "string",
            member_count: "number",
            member_limit: "number",
            owner: "number",
            cute_id: "string"
        },
        leader: {
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
        is_my_family: "boolean",
        my: {
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
//# sourceMappingURL=GetMatchFamilyMembers.js.map