"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        sequence: "number",
        win: "boolean",
        prizes: {
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
        }
    };
}
exports.default = default_1;
//# sourceMappingURL=LuckyDraw.js.map