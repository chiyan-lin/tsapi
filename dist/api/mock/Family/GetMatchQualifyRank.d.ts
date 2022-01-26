import { GetMatchQualifyRankReq } from "../../interface/moneyapifamily";
export default function (req: GetMatchQualifyRankReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
    join_count: string;
    win_count: string;
    remain_sec: string;
    ranks: {
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
    my_info: {
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
    has_more: string;
    cursor: string;
};
