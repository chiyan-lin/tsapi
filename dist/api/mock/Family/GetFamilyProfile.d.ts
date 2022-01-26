import { GetFamilyProfileReq } from "../../interface/moneyapifamily";
export default function (req: GetFamilyProfileReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    family_info: {
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
    top_infos: {
        rank: string;
        user: {
            uid: string;
            nick: string;
            avatar: string;
        };
        score: string;
        charm: string;
        contribution: string;
        activity: string;
    };
};
