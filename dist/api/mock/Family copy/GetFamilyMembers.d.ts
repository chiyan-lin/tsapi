import { GetFamilyMembersReq } from "../../interface/moneyapifamily";
export default function (req: GetFamilyMembersReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    infos: {
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
