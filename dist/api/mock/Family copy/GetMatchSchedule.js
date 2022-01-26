"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        sequence: "number",
        current_phase: {
            phase: {
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
            begin_ts: "number",
            end_ts: "number",
            is_rest: "boolean",
            join_count: "number",
            win_count: "number"
        },
        phase_infos: {
            phase: {
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
            begin_ts: "number",
            end_ts: "number",
            is_rest: "boolean",
            join_count: "number",
            win_count: "number"
        },
        is_in_rank: "boolean"
    };
}
exports.default = default_1;
//# sourceMappingURL=GetMatchSchedule.js.map