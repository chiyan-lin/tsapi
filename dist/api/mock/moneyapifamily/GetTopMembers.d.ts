import { GetTopMembersReq } from "../../interface/moneyapifamily";
export default function (req: GetTopMembersReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
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
    my_detail: {
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
