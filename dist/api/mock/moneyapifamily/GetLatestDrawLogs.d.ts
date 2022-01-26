import { GetLatestDrawLogsReq } from "../../interface/moneyapifamily";
export default function (req: GetLatestDrawLogsReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
    logs: {
        user: {
            uid: string;
            nick: string;
            avatar: string;
        };
        prize: {
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
    };
};
