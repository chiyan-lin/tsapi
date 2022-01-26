import * as common from "./common";
import * as moneycom from "./moneycommon";
export declare enum ECode {
    CODE_OK = 0,
    CODE_SERVER_ERROR = 1000,
    CODE_FREQ_ERROR = 1001,
    CODE_INNER_ERROR = 1003,
    CODE_PARAM_ERROR = 1004,
    CODE_ACT_IS_OVER = 20000,
    CODE_NOT_ENOUGH_PIECE = 21000,
    CODE_EXCHANGE_ITEM_NONE = 21001,
    CODE_EXCHANGE_LIMITED = 21002
}
export declare enum OrderType {
    ORDER_TYPE_DESC = 0,
    ORDER_TYPE_ASC = 1
}
export declare enum OrderSource {
    ORDER_SOURCE_SCORE = 0,
    ORDER_SOURCE_CHARM = 1,
    ORDER_SOURCE_CONTRIBUTION = 2,
    ORDER_SOURCE_ACTIVITY = 3
}
export declare enum NewsType {
    NEWS_TYPE_SEND_GIFT = 0,
    NEWS_TYPE_RECEIVE_GIFT = 1,
    NEWS_TYPE_JOIN = 2,
    NEWS_TYPE_UPGRADE = 3,
    NEWS_TYPE_IDENTITY = 4
}
export declare enum EPhase {
    PHASE_NONE = 0,
    PHASE_NOT_STARTED = 10,
    PHASE_NOT_REST = 11,
    PHASE_QUALIFY = 20,
    PHASE_KNOCKOUT1 = 30,
    PHASE_KNOCKOUT2 = 31,
    PHASE_SCORE = 40,
    PHASE_SEMIFINALS = 50,
    PHASE_FINALS = 60,
    PHASE_FINISHED = 1000
}
export declare enum EWinLogType {
    TYPE_EXCHANGE = 0,
    TYPE_DRAW = 1
}
export declare enum EItemStatus {
    STATUS_NONE = 0,
    STATUS_CAN = 1,
    STATUS_NOT_MEET = 2,
    STATUS_NOT_ENOUGH = 3,
    STATUS_LIMITED = 4
}
export interface FamilyLvConf {
    lv: number;
    score: number;
    icon: string;
    big_bg_colors: string[];
    upgrade_icon: string;
    minicard_bg: string;
    base_color: string;
    name: string;
    long_icon: string;
}
export interface GetFamilyLvConfsReq {
    sequence: number;
}
export interface GetFamilyLcConfsRes {
    result: common.Result;
    confs: FamilyLvConf[];
}
export interface GetFamilyBaseInfoReq {
    sequence: number;
    uid: number;
}
export interface GetFamilyBaseInfoRes {
    result: common.Result;
    fid: string;
    name: string;
    avatar: string;
    lv: number;
}
export interface GetFamilyProfile4AppReq {
    sequence: number;
    fid: string;
}
export interface GetFamilyProfile4AppRes {
    result: common.Result;
    lv_info: FamilyLvInfo;
    top_members: moneycom.User[];
}
export interface GetTopFamiliesReq {
    sequence: number;
}
export interface GetTopFamiliesRes {
    result: common.Result;
    top_infos: FamilyLvInfo[];
}
export interface FamilyInfo {
    fid: string;
    name: string;
    avatar: string;
    member_count: number;
    member_limit: number;
    owner: number;
    cute_id: string;
}
export interface FamilyLvInfo {
    info: FamilyInfo;
    rank: number;
    score: number;
    lv: number;
}
export interface FamilyBaseInfo {
    fid: string;
    name: string;
    avatar: string;
    lv: number;
}
export interface GetFamilyBaseInfosReq {
    sequence: number;
    fids: string[];
}
export interface GetFamilyBaseInfosRes {
    result: common.Result;
    infos: FamilyBaseInfo[];
}
export interface GetFamilyMonthRanksReq {
    sequence: number;
    last_rank: number;
    month: string;
}
export interface GetFamilyMonthRanksRes {
    result: common.Result;
    ranks: FamilyLvInfo[];
    my_info: FamilyLvInfo;
}
export interface FamilyContribInfo {
    rank: number;
    user: moneycom.User;
    value: number;
}
export interface FamilyContribDetail {
    rank: number;
    user: moneycom.User;
    score: number;
    charm: number;
    contribution: number;
    activity: number;
}
export interface GetFamilyProfileReq {
    sequence: number;
    fid: string;
}
export interface GetFamilyProfileRes {
    result: common.Result;
    family_info: FamilyLvInfo;
    top_infos: FamilyContribDetail[];
}
export interface GetTopMembersReq {
    sequence: number;
    fid: string;
    last_rank: number;
}
export interface GetTopMembersRes {
    result: common.Result;
    top_infos: FamilyContribDetail[];
    my_detail: FamilyContribDetail;
}
export interface GetFamilyMembersReq {
    sequence: number;
    fid: string;
    order_source: OrderSource;
    order_type: OrderType;
    last_rank: number;
}
export interface GetFamilyMembersRes {
    result: common.Result;
    infos: FamilyContribDetail[];
}
export interface FamilySimpleInfo {
    family_info: FamilyLvInfo;
    top_members: moneycom.User[];
}
export interface NewsMsg {
    id: number;
    news_type: NewsType;
    family_info: FamilySimpleInfo;
    user: moneycom.User;
    gift_id: number;
    gift_amount: number;
    score: number;
    upgraded_lv: number;
    identity: number;
    update_time: number;
}
export interface GetLatestNewsReq {
    sequence: number;
    last_id: number;
}
export interface GetLatestNewsRes {
    result: common.Result;
    msgs: NewsMsg[];
}
export interface GetAllFamilyIDsReq {
    sequence: number;
}
export interface GetAllFamilyIDsRes {
    result: common.Result;
    fids: string[];
}
export interface GetMatchEntryInfoReq {
    sequence: number;
}
export interface GetMatchEntryInfoRes {
    result: common.Result;
    sequence: number;
    current_phase: EPhase;
    style: number;
    channel_owner_family: FamilyInfo;
    channel_owner_family_score: number;
    channel_owner_family_rank: number;
    channel_owner_rival: FamilyInfo;
    channel_owner_rival_score: number;
    channel_owner_rival_rank: number;
    has_join_family: boolean;
}
export interface GetMatchScheduleReq {
    sequence: number;
}
export interface PhaseInfo {
    phase: EPhase;
    begin_ts: number;
    end_ts: number;
    is_rest: boolean;
    join_count: number;
    win_count: number;
}
export interface GetMatchScheduleRes {
    result: common.Result;
    sequence: number;
    current_phase: PhaseInfo;
    phase_infos: PhaseInfo[];
    is_in_rank: boolean;
}
export interface RankItem {
    user: moneycom.User;
    family: FamilyInfo;
    rank: number;
    score: number;
    sub_value: number;
}
export interface GetMatchQualifyRankReq {
    sequence: number;
    limit: number;
    cursor: string;
}
export interface GetMatchQualifyRankRes {
    result: common.Result;
    sequence: number;
    join_count: number;
    win_count: number;
    remain_sec: number;
    ranks: RankItem[];
    my_info: RankItem;
    has_more: boolean;
    cursor: string;
}
export interface GetMatchKnockoutRankReq {
    sequence: number;
    limit: number;
    cursor: string;
    phase: EPhase;
}
export interface GetMatchKnockoutRankRes {
    result: common.Result;
    sequence: number;
    join_count: number;
    win_count: number;
    remain_sec: number;
    ranks: RankItem[];
    has_more: boolean;
    cursor: string;
    last_tops: RankItem[];
}
export interface GetMatchScoreRankReq {
    sequence: number;
}
export interface GetMatchScoreRankRes {
    result: common.Result;
    sequence: number;
    join_count: number;
    win_count: number;
    remain_sec: number;
    total_ranks: RankItem[];
    daily_ranks: RankItem[];
}
export interface GetMatchFinalInfoReq {
    sequence: number;
}
export interface PKMatchPair {
    left_family: FamilyInfo;
    left_score: number;
    right_family: FamilyInfo;
    right_score: number;
}
export interface GetMatchFinalInfoRes {
    result: common.Result;
    sequence: number;
    begin_ts: number;
    remain_sec: number;
    match_pairs: PKMatchPair[];
    cur_tops: RankItem[];
}
export interface GetMatchFamilyMembersReq {
    sequence: number;
    family_fid: string;
    limit: number;
    cursor: string;
}
export interface GetMatchFamilyMembersRes {
    result: common.Result;
    sequence: number;
    members: RankItem[];
    cursor: string;
    has_more: boolean;
    family_score: number;
    family_rank: number;
    family_info: FamilyInfo;
    leader: RankItem;
    is_my_family: boolean;
    my: RankItem;
}
export interface GetUserPieceInfoReq {
    sequence: number;
}
export interface GetUserPieceInfoRes {
    result: common.Result;
    sequence: number;
    piece_cnt: number;
}
export interface GetUserWinLogsReq {
    sequence: number;
    limit: number;
    cursor: string;
    log_type: EWinLogType;
}
export interface WinLog {
    prize: moneycom.PrizeInfo;
    ts: number;
}
export interface GetUserWinLogsRes {
    result: common.Result;
    sequence: number;
    logs: WinLog[];
    cursor: string;
    has_more: boolean;
}
export interface GetDrawPoolInfoReq {
    sequence: number;
}
export interface DrawGear {
    id: string;
    times: number;
    piece_cnt: number;
}
export interface GetDrawPoolInfoRes {
    result: common.Result;
    sequence: number;
    prizes: moneycom.PrizeInfo[];
    gears: DrawGear[];
}
export interface LuckyDrawReq {
    sequence: number;
    gear_id: string;
}
export interface LuckyDrawRes {
    result: common.Result;
    sequence: number;
    win: boolean;
    prizes: moneycom.PrizeInfo[];
}
export interface ExchangeItem {
    prize: moneycom.PrizeInfo;
    piece_cnt: number;
    remain_cnt: number;
    daily_cnt: number;
    status: EItemStatus;
}
export interface GetExchangeItemsReq {
    sequence: number;
}
export interface GetExchangeItemsRes {
    result: common.Result;
    sequence: number;
    items: ExchangeItem[];
}
export interface ExchangeItemReq {
    sequence: number;
    prize_object_id: string;
}
export interface ExchangeItemRes {
    result: common.Result;
    sequence: number;
}
export interface GetLatestDrawLogsReq {
    sequence: number;
}
export interface UserWinLog {
    user: moneycom.User;
    prize: moneycom.PrizeInfo;
}
export interface GetLatestDrawLogsRes {
    result: common.Result;
    sequence: number;
    logs: UserWinLog[];
}
export interface TestInterfaceReq {
    sequence: number;
    cmd: string;
    map_extend: {
        [key: string]: string;
    };
}
export interface TestInterfaceRes {
    result: common.Result;
    sequence: number;
    map_extend: {
        [key: string]: string;
    };
    array_extend: string[];
}
