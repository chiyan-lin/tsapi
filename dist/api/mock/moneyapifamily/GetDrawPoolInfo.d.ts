import { GetDrawPoolInfoReq } from "../../interface/moneyapifamily";
export default function (req: GetDrawPoolInfoReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
    prizes: {
        object_id: string;
        prize_type: {
            EPrizeNone: string;
            EPrizeHeadIcon: string;
            EPrizeMedal: string;
            EPrizeInShow: string;
            EPrizePrivilegePack: string;
            EPrizeGift: string;
            EPrizeLuckyCard: string;
            EPrizeDiamond: string;
            EPrizeHagoGold: string;
            EPrizeRoomBgPic: string;
            EPrizeBigEmoji: string;
            EPrizeCoupon: string;
            EPrizeChatBubble: string;
            EPrizeMask: string;
            EPrizeHammer: string;
        };
        prize_id: string;
        prize_diamonds: string;
        prize_cnt: string;
        prize_name: string;
        icon_url: string;
        ttl: string;
        ttl_amount: string;
        create_time: string;
        extend: string;
        map_extend: {};
    };
    gears: {
        id: string;
        times: string;
        piece_cnt: string;
    };
};
