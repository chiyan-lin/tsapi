import { GetFamilyLvConfsReq } from "../../interface/moneyapifamily";
export default function (req: GetFamilyLvConfsReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    confs: {
        lv: string;
        score: string;
        icon: string;
        big_bg_colors: string;
        upgrade_icon: string;
        minicard_bg: string;
        base_color: string;
        name: string;
        long_icon: string;
    };
};
