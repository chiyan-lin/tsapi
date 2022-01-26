var common = require("./common");
var moneycom = require("./moneycommon");

var ECode = {
  CODE_OK: "0",
  CODE_SERVER_ERROR: "1000",
  CODE_FREQ_ERROR: "1001",
  CODE_INNER_ERROR: "1003",
  CODE_PARAM_ERROR: "1004",
  CODE_ACT_IS_OVER: "20000",
  CODE_NOT_ENOUGH_PIECE: "21000",
  CODE_EXCHANGE_ITEM_NONE: "21001",
  CODE_EXCHANGE_LIMITED: "21002"
};
module.exports.ECode = ECode;

var OrderType = {
  ORDER_TYPE_DESC: "0",
  ORDER_TYPE_ASC: "1"
};
module.exports.OrderType = OrderType;

var OrderSource = {
  ORDER_SOURCE_SCORE: "0",
  ORDER_SOURCE_CHARM: "1",
  ORDER_SOURCE_CONTRIBUTION: "2",
  ORDER_SOURCE_ACTIVITY: "3"
};
module.exports.OrderSource = OrderSource;

var NewsType = {
  NEWS_TYPE_SEND_GIFT: "0",
  NEWS_TYPE_RECEIVE_GIFT: "1",
  NEWS_TYPE_JOIN: "2",
  NEWS_TYPE_UPGRADE: "3",
  NEWS_TYPE_IDENTITY: "4"
};
module.exports.NewsType = NewsType;

var EPhase = {
  PHASE_NONE: "0",
  PHASE_NOT_STARTED: "10",
  PHASE_NOT_REST: "11",
  PHASE_QUALIFY: "20",
  PHASE_KNOCKOUT1: "30",
  PHASE_KNOCKOUT2: "31",
  PHASE_SCORE: "40",
  PHASE_SEMIFINALS: "50",
  PHASE_FINALS: "60",
  PHASE_FINISHED: "1000"
};
module.exports.EPhase = EPhase;

var EWinLogType = {
  TYPE_EXCHANGE: "0",
  TYPE_DRAW: "1"
};
module.exports.EWinLogType = EWinLogType;

var EItemStatus = {
  STATUS_NONE: "0",
  STATUS_CAN: "1",
  STATUS_NOT_MEET: "2",
  STATUS_NOT_ENOUGH: "3",
  STATUS_LIMITED: "4"
};
module.exports.EItemStatus = EItemStatus;

var FamilyLvConf = {
  lv: "number",
  score: "number",
  icon: "string",
  big_bg_colors: "string",
  upgrade_icon: "string",
  minicard_bg: "string",
  base_color: "string",
  name: "string",
  long_icon: "string"
};
module.exports.FamilyLvConf = FamilyLvConf;

var GetFamilyLvConfsReq = {
  sequence: "number"
};
module.exports.GetFamilyLvConfsReq = GetFamilyLvConfsReq;

var GetFamilyLcConfsRes = {
  result: common.Result,
  confs: FamilyLvConf
};
module.exports.GetFamilyLcConfsRes = GetFamilyLcConfsRes;

var GetFamilyBaseInfoReq = {
  sequence: "number",
  uid: "number"
};
module.exports.GetFamilyBaseInfoReq = GetFamilyBaseInfoReq;

var GetFamilyBaseInfoRes = {
  result: common.Result,
  fid: "string",
  name: "string",
  avatar: "string",
  lv: "number"
};
module.exports.GetFamilyBaseInfoRes = GetFamilyBaseInfoRes;

var GetFamilyProfile4AppReq = {
  sequence: "number",
  fid: "string"
};
module.exports.GetFamilyProfile4AppReq = GetFamilyProfile4AppReq;

var GetFamilyProfile4AppRes = {
  result: common.Result,
  lv_info: FamilyLvInfo,
  top_members: moneycom.User
};
module.exports.GetFamilyProfile4AppRes = GetFamilyProfile4AppRes;

var GetTopFamiliesReq = {
  sequence: "number"
};
module.exports.GetTopFamiliesReq = GetTopFamiliesReq;

var GetTopFamiliesRes = {
  result: common.Result,
  top_infos: FamilyLvInfo
};
module.exports.GetTopFamiliesRes = GetTopFamiliesRes;

var FamilyInfo = {
  fid: "string",
  name: "string",
  avatar: "string",
  member_count: "number",
  member_limit: "number",
  owner: "number",
  cute_id: "string"
};
module.exports.FamilyInfo = FamilyInfo;

var FamilyLvInfo = {
  info: FamilyInfo,
  rank: "number",
  score: "number",
  lv: "number"
};
module.exports.FamilyLvInfo = FamilyLvInfo;

var FamilyBaseInfo = {
  fid: "string",
  name: "string",
  avatar: "string",
  lv: "number"
};
module.exports.FamilyBaseInfo = FamilyBaseInfo;

var GetFamilyBaseInfosReq = {
  sequence: "number",
  fids: "string"
};
module.exports.GetFamilyBaseInfosReq = GetFamilyBaseInfosReq;

var GetFamilyBaseInfosRes = {
  result: common.Result,
  infos: FamilyBaseInfo
};
module.exports.GetFamilyBaseInfosRes = GetFamilyBaseInfosRes;

var GetFamilyMonthRanksReq = {
  sequence: "number",
  last_rank: "number",
  month: "string"
};
module.exports.GetFamilyMonthRanksReq = GetFamilyMonthRanksReq;

var GetFamilyMonthRanksRes = {
  result: common.Result,
  ranks: FamilyLvInfo,
  my_info: FamilyLvInfo
};
module.exports.GetFamilyMonthRanksRes = GetFamilyMonthRanksRes;

var FamilyContribInfo = {
  rank: "number",
  user: moneycom.User,
  value: "number"
};
module.exports.FamilyContribInfo = FamilyContribInfo;

var FamilyContribDetail = {
  rank: "number",
  user: moneycom.User,
  score: "number",
  charm: "number",
  contribution: "number",
  activity: "number"
};
module.exports.FamilyContribDetail = FamilyContribDetail;

var GetFamilyProfileReq = {
  sequence: "number",
  fid: "string"
};
module.exports.GetFamilyProfileReq = GetFamilyProfileReq;

var GetFamilyProfileRes = {
  result: common.Result,
  family_info: FamilyLvInfo,
  top_infos: FamilyContribDetail
};
module.exports.GetFamilyProfileRes = GetFamilyProfileRes;

var GetTopMembersReq = {
  sequence: "number",
  fid: "string",
  last_rank: "number"
};
module.exports.GetTopMembersReq = GetTopMembersReq;

var GetTopMembersRes = {
  result: common.Result,
  top_infos: FamilyContribDetail,
  my_detail: FamilyContribDetail
};
module.exports.GetTopMembersRes = GetTopMembersRes;

var GetFamilyMembersReq = {
  sequence: "number",
  fid: "string",
  order_source: OrderSource,
  order_type: OrderType,
  last_rank: "number"
};
module.exports.GetFamilyMembersReq = GetFamilyMembersReq;

var GetFamilyMembersRes = {
  result: common.Result,
  infos: FamilyContribDetail
};
module.exports.GetFamilyMembersRes = GetFamilyMembersRes;

var FamilySimpleInfo = {
  family_info: FamilyLvInfo,
  top_members: moneycom.User
};
module.exports.FamilySimpleInfo = FamilySimpleInfo;

var NewsMsg = {
  id: "number",
  news_type: NewsType,
  family_info: FamilySimpleInfo,
  user: moneycom.User,
  gift_id: "number",
  gift_amount: "number",
  score: "number",
  upgraded_lv: "number",
  identity: "number",
  update_time: "number"
};
module.exports.NewsMsg = NewsMsg;

var GetLatestNewsReq = {
  sequence: "number",
  last_id: "number"
};
module.exports.GetLatestNewsReq = GetLatestNewsReq;

var GetLatestNewsRes = {
  result: common.Result,
  msgs: NewsMsg
};
module.exports.GetLatestNewsRes = GetLatestNewsRes;

var GetAllFamilyIDsReq = {
  sequence: "number"
};
module.exports.GetAllFamilyIDsReq = GetAllFamilyIDsReq;

var GetAllFamilyIDsRes = {
  result: common.Result,
  fids: "string"
};
module.exports.GetAllFamilyIDsRes = GetAllFamilyIDsRes;

var GetMatchEntryInfoReq = {
  sequence: "number"
};
module.exports.GetMatchEntryInfoReq = GetMatchEntryInfoReq;

var GetMatchEntryInfoRes = {
  result: common.Result,
  sequence: "number",
  current_phase: EPhase,
  style: "number",
  channel_owner_family: FamilyInfo,
  channel_owner_family_score: "number",
  channel_owner_family_rank: "number",
  channel_owner_rival: FamilyInfo,
  channel_owner_rival_score: "number",
  channel_owner_rival_rank: "number",
  has_join_family: "boolean"
};
module.exports.GetMatchEntryInfoRes = GetMatchEntryInfoRes;

var GetMatchScheduleReq = {
  sequence: "number"
};
module.exports.GetMatchScheduleReq = GetMatchScheduleReq;

var PhaseInfo = {
  phase: EPhase,
  begin_ts: "number",
  end_ts: "number",
  is_rest: "boolean",
  join_count: "number",
  win_count: "number"
};
module.exports.PhaseInfo = PhaseInfo;

var GetMatchScheduleRes = {
  result: common.Result,
  sequence: "number",
  current_phase: PhaseInfo,
  phase_infos: PhaseInfo,
  is_in_rank: "boolean"
};
module.exports.GetMatchScheduleRes = GetMatchScheduleRes;

var RankItem = {
  user: moneycom.User,
  family: FamilyInfo,
  rank: "number",
  score: "number",
  sub_value: "number"
};
module.exports.RankItem = RankItem;

var GetMatchQualifyRankReq = {
  sequence: "number",
  limit: "number",
  cursor: "string"
};
module.exports.GetMatchQualifyRankReq = GetMatchQualifyRankReq;

var GetMatchQualifyRankRes = {
  result: common.Result,
  sequence: "number",
  join_count: "number",
  win_count: "number",
  remain_sec: "number",
  ranks: RankItem,
  my_info: RankItem,
  has_more: "boolean",
  cursor: "string"
};
module.exports.GetMatchQualifyRankRes = GetMatchQualifyRankRes;

var GetMatchKnockoutRankReq = {
  sequence: "number",
  limit: "number",
  cursor: "string",
  phase: EPhase
};
module.exports.GetMatchKnockoutRankReq = GetMatchKnockoutRankReq;

var GetMatchKnockoutRankRes = {
  result: common.Result,
  sequence: "number",
  join_count: "number",
  win_count: "number",
  remain_sec: "number",
  ranks: RankItem,
  has_more: "boolean",
  cursor: "string",
  last_tops: RankItem
};
module.exports.GetMatchKnockoutRankRes = GetMatchKnockoutRankRes;

var GetMatchScoreRankReq = {
  sequence: "number"
};
module.exports.GetMatchScoreRankReq = GetMatchScoreRankReq;

var GetMatchScoreRankRes = {
  result: common.Result,
  sequence: "number",
  join_count: "number",
  win_count: "number",
  remain_sec: "number",
  total_ranks: RankItem,
  daily_ranks: RankItem
};
module.exports.GetMatchScoreRankRes = GetMatchScoreRankRes;

var GetMatchFinalInfoReq = {
  sequence: "number"
};
module.exports.GetMatchFinalInfoReq = GetMatchFinalInfoReq;

var PKMatchPair = {
  left_family: FamilyInfo,
  left_score: "number",
  right_family: FamilyInfo,
  right_score: "number"
};
module.exports.PKMatchPair = PKMatchPair;

var GetMatchFinalInfoRes = {
  result: common.Result,
  sequence: "number",
  begin_ts: "number",
  remain_sec: "number",
  match_pairs: PKMatchPair,
  cur_tops: RankItem
};
module.exports.GetMatchFinalInfoRes = GetMatchFinalInfoRes;

var GetMatchFamilyMembersReq = {
  sequence: "number",
  family_fid: "string",
  limit: "number",
  cursor: "string"
};
module.exports.GetMatchFamilyMembersReq = GetMatchFamilyMembersReq;

var GetMatchFamilyMembersRes = {
  result: common.Result,
  sequence: "number",
  members: RankItem,
  cursor: "string",
  has_more: "boolean",
  family_score: "number",
  family_rank: "number",
  family_info: FamilyInfo,
  leader: RankItem,
  is_my_family: "boolean",
  my: RankItem
};
module.exports.GetMatchFamilyMembersRes = GetMatchFamilyMembersRes;

var GetUserPieceInfoReq = {
  sequence: "number"
};
module.exports.GetUserPieceInfoReq = GetUserPieceInfoReq;

var GetUserPieceInfoRes = {
  result: common.Result,
  sequence: "number",
  piece_cnt: "number"
};
module.exports.GetUserPieceInfoRes = GetUserPieceInfoRes;

var GetUserWinLogsReq = {
  sequence: "number",
  limit: "number",
  cursor: "string",
  log_type: EWinLogType
};
module.exports.GetUserWinLogsReq = GetUserWinLogsReq;

var WinLog = {
  prize: moneycom.PrizeInfo,
  ts: "number"
};
module.exports.WinLog = WinLog;

var GetUserWinLogsRes = {
  result: common.Result,
  sequence: "number",
  logs: WinLog,
  cursor: "string",
  has_more: "boolean"
};
module.exports.GetUserWinLogsRes = GetUserWinLogsRes;

var GetDrawPoolInfoReq = {
  sequence: "number"
};
module.exports.GetDrawPoolInfoReq = GetDrawPoolInfoReq;

var DrawGear = {
  id: "string",
  times: "number",
  piece_cnt: "number"
};
module.exports.DrawGear = DrawGear;

var GetDrawPoolInfoRes = {
  result: common.Result,
  sequence: "number",
  prizes: moneycom.PrizeInfo,
  gears: DrawGear
};
module.exports.GetDrawPoolInfoRes = GetDrawPoolInfoRes;

var LuckyDrawReq = {
  sequence: "number",
  gear_id: "string"
};
module.exports.LuckyDrawReq = LuckyDrawReq;

var LuckyDrawRes = {
  result: common.Result,
  sequence: "number",
  win: "boolean",
  prizes: moneycom.PrizeInfo
};
module.exports.LuckyDrawRes = LuckyDrawRes;

var ExchangeItem = {
  prize: moneycom.PrizeInfo,
  piece_cnt: "number",
  remain_cnt: "number",
  daily_cnt: "number",
  status: EItemStatus
};
module.exports.ExchangeItem = ExchangeItem;

var GetExchangeItemsReq = {
  sequence: "number"
};
module.exports.GetExchangeItemsReq = GetExchangeItemsReq;

var GetExchangeItemsRes = {
  result: common.Result,
  sequence: "number",
  items: ExchangeItem
};
module.exports.GetExchangeItemsRes = GetExchangeItemsRes;

var ExchangeItemReq = {
  sequence: "number",
  prize_object_id: "string"
};
module.exports.ExchangeItemReq = ExchangeItemReq;

var ExchangeItemRes = {
  result: common.Result,
  sequence: "number"
};
module.exports.ExchangeItemRes = ExchangeItemRes;

var GetLatestDrawLogsReq = {
  sequence: "number"
};
module.exports.GetLatestDrawLogsReq = GetLatestDrawLogsReq;

var UserWinLog = {
  user: moneycom.User,
  prize: moneycom.PrizeInfo
};
module.exports.UserWinLog = UserWinLog;

var GetLatestDrawLogsRes = {
  result: common.Result,
  sequence: "number",
  logs: UserWinLog
};
module.exports.GetLatestDrawLogsRes = GetLatestDrawLogsRes;

var TestInterfaceReq = {
  sequence: "number",
  cmd: "string",
  map_extend: {}
};
module.exports.TestInterfaceReq = TestInterfaceReq;

var TestInterfaceRes = {
  result: common.Result,
  sequence: "number",
  map_extend: {},
  array_extend: "string"
};
module.exports.TestInterfaceRes = TestInterfaceRes;
