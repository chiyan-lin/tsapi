import { GetMatchEntryInfoReq } from "../../interface/moneyapifamily";
export default function (req: GetMatchEntryInfoReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
    current_phase: {
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
    style: string;
    channel_owner_family: {
        fid: string;
        name: string;
        avatar: string;
        member_count: string;
        member_limit: string;
        owner: string;
        cute_id: string;
    };
    channel_owner_family_score: string;
    channel_owner_family_rank: string;
    channel_owner_rival: {
        fid: string;
        name: string;
        avatar: string;
        member_count: string;
        member_limit: string;
        owner: string;
        cute_id: string;
    };
    channel_owner_rival_score: string;
    channel_owner_rival_rank: string;
    has_join_family: string;
};
