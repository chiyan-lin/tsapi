import { GetMatchFamilyMembersReq } from "../../interface/moneyapifamily";
export default function (req: GetMatchFamilyMembersReq): {
    result: {
        errcode: string;
        errmsg: string;
        magic: string;
    };
    sequence: string;
    members: {
        user: {
            uid: string;
            nick: string;
            avatar: string;
        };
        family: {
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
        sub_value: string;
    };
    cursor: string;
    has_more: string;
    family_score: string;
    family_rank: string;
    family_info: {
        fid: string;
        name: string;
        avatar: string;
        member_count: string;
        member_limit: string;
        owner: string;
        cute_id: string;
    };
    leader: {
        user: {
            uid: string;
            nick: string;
            avatar: string;
        };
        family: {
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
        sub_value: string;
    };
    is_my_family: string;
    my: {
        user: {
            uid: string;
            nick: string;
            avatar: string;
        };
        family: {
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
        sub_value: string;
    };
};
