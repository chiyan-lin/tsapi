import { ExchangeItemReq } from "../../interface/moneyapifamily";
export default function (req: ExchangeItemReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
};
