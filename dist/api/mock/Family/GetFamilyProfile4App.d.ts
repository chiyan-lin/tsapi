import { GetFamilyProfile4AppReq } from "../../interface/moneyapifamily";
export default function (req: GetFamilyProfile4AppReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    top_members: {
        uid: string;
        nick: string;
        avatar: string;
    };
};
