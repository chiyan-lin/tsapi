"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req) {
    return {
        result: { errcode: "number", errmsg: "string", magic: "number" },
        msgs: {
            id: "number",
            news_type: {
                NEWS_TYPE_SEND_GIFT: "0",
                NEWS_TYPE_RECEIVE_GIFT: "1",
                NEWS_TYPE_JOIN: "2",
                NEWS_TYPE_UPGRADE: "3",
                NEWS_TYPE_IDENTITY: "4"
            },
            family_info: {
                family_info: {
                    info: {
                        fid: "string",
                        name: "string",
                        avatar: "string",
                        member_count: "number",
                        member_limit: "number",
                        owner: "number",
                        cute_id: "string"
                    },
                    rank: "number",
                    score: "number",
                    lv: "number"
                },
                top_members: { uid: "number", nick: "string", avatar: "string" }
            },
            user: { uid: "number", nick: "string", avatar: "string" },
            gift_id: "number",
            gift_amount: "number",
            score: "number",
            upgraded_lv: "number",
            identity: "number",
            update_time: "number"
        }
    };
}
exports.default = default_1;
//# sourceMappingURL=GetLatestNews.js.map