import { GetMatchFinalInfoReq } from "../../interface/moneyapifamily";
export default function (req: GetMatchFinalInfoReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
    begin_ts: string;
    remain_sec: string;
    match_pairs: {
        left_family: {
            fid: string;
            name: string;
            avatar: string;
            member_count: string;
            member_limit: string;
            owner: string;
            cute_id: string;
        };
        left_score: string;
        right_family: {
            fid: string;
            name: string;
            avatar: string;
            member_count: string;
            member_limit: string;
            owner: string;
            cute_id: string;
        };
        right_score: string;
    };
    cur_tops: {
        user: {
            uid: string;
            nick: string;
            avatar: string;
        };
        family: {
            fid: string;
            name: string;
            avatar: string;
            member_count: string;
            member_limit: string;
            owner: string;
            cute_id: string;
        };
        rank: string;
        score: string;
        sub_value: string;
    };
};
