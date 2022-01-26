import { GetUserPieceInfoReq } from "../../interface/moneyapifamily";
export default function (req: GetUserPieceInfoReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
    piece_cnt: string;
};
