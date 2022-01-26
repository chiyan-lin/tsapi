"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        sequence: "number",
        items: {
            prize: {
                object_id: "string",
                prize_type: {
                    EPrizeNone: "0",
                    EPrizeHeadIcon: "1",
                    EPrizeMedal: "2",
                    EPrizeInShow: "3",
                    EPrizePrivilegePack: "4",
                    EPrizeGift: "5",
                    EPrizeLuckyCard: "6",
                    EPrizeDiamond: "7",
                    EPrizeHagoGold: "8",
                    EPrizeRoomBgPic: "9",
                    EPrizeBigEmoji: "10",
                    EPrizeCoupon: "11",
                    EPrizeChatBubble: "12",
                    EPrizeMask: "13",
                    EPrizeHammer: "14"
                },
                prize_id: "number",
                prize_diamonds: "number",
                prize_cnt: "number",
                prize_name: "string",
                icon_url: "string",
                ttl: "number",
                ttl_amount: "number",
                create_time: "number",
                extend: "string",
                map_extend: {}
            },
            piece_cnt: "number",
            remain_cnt: "number",
            daily_cnt: "number",
            status: {
                STATUS_NONE: "0",
                STATUS_CAN: "1",
                STATUS_NOT_MEET: "2",
                STATUS_NOT_ENOUGH: "3",
                STATUS_LIMITED: "4"
            }
        }
    };
}
exports.default = default_1;
//# sourceMappingURL=GetExchangeItems.js.map