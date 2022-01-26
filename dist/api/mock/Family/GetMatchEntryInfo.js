"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        sequence: "number",
        current_phase: {
            PHASE_NONE: "0",
            PHASE_NOT_STARTED: "10",
            PHASE_NOT_REST: "11",
            PHASE_QUALIFY: "20",
            PHASE_KNOCKOUT1: "30",
            PHASE_KNOCKOUT2: "31",
            PHASE_SCORE: "40",
            PHASE_SEMIFINALS: "50",
            PHASE_FINALS: "60",
            PHASE_FINISHED: "1000"
        },
        style: "number",
        channel_owner_family: {
            fid: "string",
            name: "string",
            avatar: "string",
            member_count: "number",
            member_limit: "number",
            owner: "number",
            cute_id: "string"
        },
        channel_owner_family_score: "number",
        channel_owner_family_rank: "number",
        channel_owner_rival: {
            fid: "string",
            name: "string",
            avatar: "string",
            member_count: "number",
            member_limit: "number",
            owner: "number",
            cute_id: "string"
        },
        channel_owner_rival_score: "number",
        channel_owner_rival_rank: "number",
        has_join_family: "boolean"
    };
}
exports.default = default_1;
//# sourceMappingURL=GetMatchEntryInfo.js.map