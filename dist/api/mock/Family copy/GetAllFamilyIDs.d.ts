import { GetAllFamilyIDsReq } from "../../interface/moneyapifamily";
export default function (req: GetAllFamilyIDsReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    fids: string;
};
