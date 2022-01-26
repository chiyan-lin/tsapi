import { GetMatchScheduleReq } from "../../interface/moneyapifamily";
export default function (req: GetMatchScheduleReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
    current_phase: {
        phase: {
            PHASE_NONE: string;
            PHASE_NOT_STARTED: string;
            PHASE_NOT_REST: string;
            PHASE_QUALIFY: string;
            PHASE_KNOCKOUT1: string;
            PHASE_KNOCKOUT2: string;
            PHASE_SCORE: string;
            PHASE_SEMIFINALS: string;
            PHASE_FINALS: string;
            PHASE_FINISHED: string;
        };
        begin_ts: string;
        end_ts: string;
        is_rest: string;
        join_count: string;
        win_count: string;
    };
    phase_infos: {
        phase: {
            PHASE_NONE: string;
            PHASE_NOT_STARTED: string;
            PHASE_NOT_REST: string;
            PHASE_QUALIFY: string;
            PHASE_KNOCKOUT1: string;
            PHASE_KNOCKOUT2: string;
            PHASE_SCORE: string;
            PHASE_SEMIFINALS: string;
            PHASE_FINALS: string;
            PHASE_FINISHED: string;
        };
        begin_ts: string;
        end_ts: string;
        is_rest: string;
        join_count: string;
        win_count: string;
    };
    is_in_rank: string;
};
