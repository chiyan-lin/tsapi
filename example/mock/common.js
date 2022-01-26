var MSGTYPE = {
  MSGTYPE_UNKNOWN: "0",
  MSGTYPE_REQ: "1",
  MSGTYPE_RESP: "2",
  MSGTYPE_NOTICE: "3"
};
module.exports.MSGTYPE = MSGTYPE;

var ERet = {
  kRetSuccess: "0",
  kRetErrParameter: "1",
  kRetErrCookie: "2",
  kRetErrUnauthorized: "3",
  kRetErrUnknowUri: "4",
  kRetErrVersion: "5",
  kRetErrBanned: "6",
  kRetErrBusy: "7",
  kRetErrNotFound: "8",
  kRetErrAlreadyExists: "9",
  kRetErrPermissionDenied: "10",
  kRetErrIncompatibleVersion: "11",
  kRetErrGlobalGateWay: "21",
  kRetErrSystem: "999",
  kRetErrGameIdNotExist: "1001",
  kRetErrImPkRepeatedInvite: "1002",
  kRetErrImPkInviteOutOfDate: "1003",
  kRetErrGenPkGameUrlFailed: "1004",
  kRetErrS2SAddrlistFriendsFailed: "1005",
  kRetErrS2SFbFriendsFailed: "1006",
  kRetErrS2SGetFriendListFailed: "1007",
  kRetErrS2SGetUserStatusFailed: "1008",
  kRetErrS2SGetUsersInfoFailed: "1009",
  kRetErrGameMaintain: "1010",
  kRetErrGameFull: "1011",
  kRetErrImPkInviteAccepted: "1012",
  kRetErrIdInvalid: "1013",
  kRetErrPowerLow: "1014",
  kRetErrMoneyLow: "1015",
  kRetErrSource: "1016",
  kRetErrRecommendDailyLimit: "1051",
  kRetErrRecommendNearbyNone: "1052",
  kRetErrTeamFull: "2000",
  kRetErrTeamInvalid: "2001",
  kRetErrGameHasBegun: "2002",
  kRetErrGameing: "2003",
  kRetErrInviteLeaved: "2004",
  KRetErrBelongTeam: "2005",
  kRetErrGetGameInfoErr: "2006",
  kRetErrNoInMatch: "2007",
  kRetErrCancelMatchErr: "2008",
  kRetErrUserNotInRoom: "2009",
  kRetErrTeamMatching: "2010",
  kRetErrImTeamCreating: "2011",
  kRetErrChangeTemplate: "2012",
  kRetErrVoiceChatSelfBusy: "2101",
  kRetErrVoiceChatOtherBusy: "2102",
  kRetErrVoiceChatCallTimeout: "2103",
  kRetErrVoiceChatUserNotBeCall: "2104",
  kRetErrVoiceChatHadStarted: "2105",
  kRetErrVoiceChatHadStop: "2106",
  kRetErrVoiceChatOffLine: "2107"
};
module.exports.ERet = ERet;

var ESex = {
  kSexFemale: "0",
  kSexMale: "1",
  kSexAll: "2"
};
module.exports.ESex = ESex;

var YMicroRet = {
  YMicroRetSuccess: "0",
  YMicroRetBadRequest: "400",
  YMicroRetUnauthorized: "401",
  YMicroRetForbidden: "403",
  YMicroRetNotFound: "404",
  YMicroRetMethodNotAllowed: "405",
  YMicroRetTimeout: "408",
  YMicroRetConflict: "409",
  YMicroRetTooManyRequests: "429",
  YMicroRetInternalServerError: "500"
};
module.exports.YMicroRet = YMicroRet;

var EBizAction = {
  BizActionNone: "0",
  BizActionAdd: "1",
  BizActionDel: "2"
};
module.exports.EBizAction = EBizAction;

var EBizType = {
  EBizTypeNone: "0",
  EBizTypeAction: "10",
  EBizTypeInfos: "11",
  EBizTypeExt: "12"
};
module.exports.EBizType = EBizType;

var Header = {
  sname: "string",
  seqid: "number",
  code: "number",
  lang: "string",
  tid: "string",
  roomid: "string",
  method: "string",
  version: "string",
  msgtype: MSGTYPE,
  back_ground: "boolean",
  biz: "string",
  extend: {},
  routing_key: "string"
};
module.exports.Header = Header;

var Result = {
  errcode: "number",
  errmsg: "string",
  magic: "number"
};
module.exports.Result = Result;

var Response = {
  result: Result
};
module.exports.Response = Response;

var BizAction = {
  action: "number",
  sname: "string",
  key: "string",
  value: "string",
  valid_time: "number"
};
module.exports.BizAction = BizAction;

var Biz = {
  types: "number",
  biz_actions: BizAction,
  biz_infos: {},
  biz_ext: {}
};
module.exports.Biz = Biz;

var Page = {
  snap: "number",
  offset: "number",
  limit: "number",
  total: "number"
};
module.exports.Page = Page;
