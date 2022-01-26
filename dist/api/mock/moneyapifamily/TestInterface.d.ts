import { TestInterfaceReq } from "../../interface/moneyapifamily";
export default function (req: TestInterfaceReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
    map_extend: {};
    array_extend: string;
};
