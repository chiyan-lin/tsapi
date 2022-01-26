import { GetFamilyBaseInfosReq } from "../../interface/moneyapifamily";
export default function (req: GetFamilyBaseInfosReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    infos: {
        fid: string;
        name: string;
        avatar: string;
        lv: string;
    };
};
