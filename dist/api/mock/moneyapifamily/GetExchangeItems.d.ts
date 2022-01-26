import { GetExchangeItemsReq } from "../../interface/moneyapifamily";
export default function (req: GetExchangeItemsReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
    items: {
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
        piece_cnt: string;
        remain_cnt: string;
        daily_cnt: string;
        status: {
            STATUS_NONE: string;
            STATUS_CAN: string;
            STATUS_NOT_MEET: string;
            STATUS_NOT_ENOUGH: string;
            STATUS_LIMITED: string;
        };
    };
};
