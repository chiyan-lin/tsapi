import { GetTopFamiliesReq } from "../../interface/moneyapifamily";
export default function (req: GetTopFamiliesReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
};
