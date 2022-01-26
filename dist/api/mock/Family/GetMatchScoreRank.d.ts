import { GetMatchScoreRankReq } from "../../interface/moneyapifamily";
export default function (req: GetMatchScoreRankReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
    join_count: string;
    win_count: string;
    remain_sec: string;
    total_ranks: {
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
    daily_ranks: {
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
