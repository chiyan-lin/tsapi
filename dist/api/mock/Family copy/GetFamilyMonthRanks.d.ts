import { GetFamilyMonthRanksReq } from "../../interface/moneyapifamily";
export default function (req: GetFamilyMonthRanksReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    ranks: {
        info: {
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
        lv: string;
    };
    my_info: {
        info: {
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
        lv: string;
    };
};
