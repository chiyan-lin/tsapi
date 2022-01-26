import { GetFamilyBaseInfoReq } from "../../interface/moneyapifamily";
export default function (req: GetFamilyBaseInfoReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    fid: string;
    name: string;
    avatar: string;
    lv: string;
};
