import { GetLatestNewsReq } from "../../interface/moneyapifamily";
export default function (req: GetLatestNewsReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    msgs: {
        id: string;
        news_type: {
            NEWS_TYPE_SEND_GIFT: string;
            NEWS_TYPE_RECEIVE_GIFT: string;
            NEWS_TYPE_JOIN: string;
            NEWS_TYPE_UPGRADE: string;
            NEWS_TYPE_IDENTITY: string;
        };
        family_info: {
            family_info: {
                info: {
                    fid: string;
                    name: string;
                    avatar: string;
                    member_count: string;
                    member_limit: string;
                    owner: string;
                    cute_id: string;
                };
                rank: string;
                score: string;
                lv: string;
            };
            top_members: {
                uid: string;
                nick: string;
                avatar: string;
            };
        };
        user: {
            uid: string;
            nick: string;
            avatar: string;
        };
        gift_id: string;
        gift_amount: string;
        score: string;
        upgraded_lv: string;
        identity: string;
        update_time: string;
    };
};
