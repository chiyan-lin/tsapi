"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EBizType = exports.EBizAction = exports.YMicroRet = exports.ESex = exports.ERet = exports.MSGTYPE = void 0;
var MSGTYPE;
(function (MSGTYPE) {
    MSGTYPE[MSGTYPE["MSGTYPE_UNKNOWN"] = 0] = "MSGTYPE_UNKNOWN";
    MSGTYPE[MSGTYPE["MSGTYPE_REQ"] = 1] = "MSGTYPE_REQ";
    MSGTYPE[MSGTYPE["MSGTYPE_RESP"] = 2] = "MSGTYPE_RESP";
    MSGTYPE[MSGTYPE["MSGTYPE_NOTICE"] = 3] = "MSGTYPE_NOTICE";
})(MSGTYPE = exports.MSGTYPE || (exports.MSGTYPE = {}));
var ERet;
(function (ERet) {
    ERet[ERet["kRetSuccess"] = 0] = "kRetSuccess";
    ERet[ERet["kRetErrParameter"] = 1] = "kRetErrParameter";
    ERet[ERet["kRetErrCookie"] = 2] = "kRetErrCookie";
    ERet[ERet["kRetErrUnauthorized"] = 3] = "kRetErrUnauthorized";
    ERet[ERet["kRetErrUnknowUri"] = 4] = "kRetErrUnknowUri";
    ERet[ERet["kRetErrVersion"] = 5] = "kRetErrVersion";
    ERet[ERet["kRetErrBanned"] = 6] = "kRetErrBanned";
    ERet[ERet["kRetErrBusy"] = 7] = "kRetErrBusy";
    ERet[ERet["kRetErrNotFound"] = 8] = "kRetErrNotFound";
    ERet[ERet["kRetErrAlreadyExists"] = 9] = "kRetErrAlreadyExists";
    ERet[ERet["kRetErrPermissionDenied"] = 10] = "kRetErrPermissionDenied";
    ERet[ERet["kRetErrIncompatibleVersion"] = 11] = "kRetErrIncompatibleVersion";
    ERet[ERet["kRetErrGlobalGateWay"] = 21] = "kRetErrGlobalGateWay";
    ERet[ERet["kRetErrSystem"] = 999] = "kRetErrSystem";
    ERet[ERet["kRetErrGameIdNotExist"] = 1001] = "kRetErrGameIdNotExist";
    ERet[ERet["kRetErrImPkRepeatedInvite"] = 1002] = "kRetErrImPkRepeatedInvite";
    ERet[ERet["kRetErrImPkInviteOutOfDate"] = 1003] = "kRetErrImPkInviteOutOfDate";
    ERet[ERet["kRetErrGenPkGameUrlFailed"] = 1004] = "kRetErrGenPkGameUrlFailed";
    ERet[ERet["kRetErrS2SAddrlistFriendsFailed"] = 1005] = "kRetErrS2SAddrlistFriendsFailed";
    ERet[ERet["kRetErrS2SFbFriendsFailed"] = 1006] = "kRetErrS2SFbFriendsFailed";
    ERet[ERet["kRetErrS2SGetFriendListFailed"] = 1007] = "kRetErrS2SGetFriendListFailed";
    ERet[ERet["kRetErrS2SGetUserStatusFailed"] = 1008] = "kRetErrS2SGetUserStatusFailed";
    ERet[ERet["kRetErrS2SGetUsersInfoFailed"] = 1009] = "kRetErrS2SGetUsersInfoFailed";
    ERet[ERet["kRetErrGameMaintain"] = 1010] = "kRetErrGameMaintain";
    ERet[ERet["kRetErrGameFull"] = 1011] = "kRetErrGameFull";
    ERet[ERet["kRetErrImPkInviteAccepted"] = 1012] = "kRetErrImPkInviteAccepted";
    ERet[ERet["kRetErrIdInvalid"] = 1013] = "kRetErrIdInvalid";
    ERet[ERet["kRetErrPowerLow"] = 1014] = "kRetErrPowerLow";
    ERet[ERet["kRetErrMoneyLow"] = 1015] = "kRetErrMoneyLow";
    ERet[ERet["kRetErrSource"] = 1016] = "kRetErrSource";
    ERet[ERet["kRetErrRecommendDailyLimit"] = 1051] = "kRetErrRecommendDailyLimit";
    ERet[ERet["kRetErrRecommendNearbyNone"] = 1052] = "kRetErrRecommendNearbyNone";
    ERet[ERet["kRetErrTeamFull"] = 2000] = "kRetErrTeamFull";
    ERet[ERet["kRetErrTeamInvalid"] = 2001] = "kRetErrTeamInvalid";
    ERet[ERet["kRetErrGameHasBegun"] = 2002] = "kRetErrGameHasBegun";
    ERet[ERet["kRetErrGameing"] = 2003] = "kRetErrGameing";
    ERet[ERet["kRetErrInviteLeaved"] = 2004] = "kRetErrInviteLeaved";
    ERet[ERet["KRetErrBelongTeam"] = 2005] = "KRetErrBelongTeam";
    ERet[ERet["kRetErrGetGameInfoErr"] = 2006] = "kRetErrGetGameInfoErr";
    ERet[ERet["kRetErrNoInMatch"] = 2007] = "kRetErrNoInMatch";
    ERet[ERet["kRetErrCancelMatchErr"] = 2008] = "kRetErrCancelMatchErr";
    ERet[ERet["kRetErrUserNotInRoom"] = 2009] = "kRetErrUserNotInRoom";
    ERet[ERet["kRetErrTeamMatching"] = 2010] = "kRetErrTeamMatching";
    ERet[ERet["kRetErrImTeamCreating"] = 2011] = "kRetErrImTeamCreating";
    ERet[ERet["kRetErrChangeTemplate"] = 2012] = "kRetErrChangeTemplate";
    ERet[ERet["kRetErrVoiceChatSelfBusy"] = 2101] = "kRetErrVoiceChatSelfBusy";
    ERet[ERet["kRetErrVoiceChatOtherBusy"] = 2102] = "kRetErrVoiceChatOtherBusy";
    ERet[ERet["kRetErrVoiceChatCallTimeout"] = 2103] = "kRetErrVoiceChatCallTimeout";
    ERet[ERet["kRetErrVoiceChatUserNotBeCall"] = 2104] = "kRetErrVoiceChatUserNotBeCall";
    ERet[ERet["kRetErrVoiceChatHadStarted"] = 2105] = "kRetErrVoiceChatHadStarted";
    ERet[ERet["kRetErrVoiceChatHadStop"] = 2106] = "kRetErrVoiceChatHadStop";
    ERet[ERet["kRetErrVoiceChatOffLine"] = 2107] = "kRetErrVoiceChatOffLine";
})(ERet = exports.ERet || (exports.ERet = {}));
var ESex;
(function (ESex) {
    ESex[ESex["kSexFemale"] = 0] = "kSexFemale";
    ESex[ESex["kSexMale"] = 1] = "kSexMale";
    ESex[ESex["kSexAll"] = 2] = "kSexAll";
})(ESex = exports.ESex || (exports.ESex = {}));
var YMicroRet;
(function (YMicroRet) {
    YMicroRet[YMicroRet["YMicroRetSuccess"] = 0] = "YMicroRetSuccess";
    YMicroRet[YMicroRet["YMicroRetBadRequest"] = 400] = "YMicroRetBadRequest";
    YMicroRet[YMicroRet["YMicroRetUnauthorized"] = 401] = "YMicroRetUnauthorized";
    YMicroRet[YMicroRet["YMicroRetForbidden"] = 403] = "YMicroRetForbidden";
    YMicroRet[YMicroRet["YMicroRetNotFound"] = 404] = "YMicroRetNotFound";
    YMicroRet[YMicroRet["YMicroRetMethodNotAllowed"] = 405] = "YMicroRetMethodNotAllowed";
    YMicroRet[YMicroRet["YMicroRetTimeout"] = 408] = "YMicroRetTimeout";
    YMicroRet[YMicroRet["YMicroRetConflict"] = 409] = "YMicroRetConflict";
    YMicroRet[YMicroRet["YMicroRetTooManyRequests"] = 429] = "YMicroRetTooManyRequests";
    YMicroRet[YMicroRet["YMicroRetInternalServerError"] = 500] = "YMicroRetInternalServerError";
})(YMicroRet = exports.YMicroRet || (exports.YMicroRet = {}));
var EBizAction;
(function (EBizAction) {
    EBizAction[EBizAction["BizActionNone"] = 0] = "BizActionNone";
    EBizAction[EBizAction["BizActionAdd"] = 1] = "BizActionAdd";
    EBizAction[EBizAction["BizActionDel"] = 2] = "BizActionDel";
})(EBizAction = exports.EBizAction || (exports.EBizAction = {}));
var EBizType;
(function (EBizType) {
    EBizType[EBizType["EBizTypeNone"] = 0] = "EBizTypeNone";
    EBizType[EBizType["EBizTypeAction"] = 10] = "EBizTypeAction";
    EBizType[EBizType["EBizTypeInfos"] = 11] = "EBizTypeInfos";
    EBizType[EBizType["EBizTypeExt"] = 12] = "EBizTypeExt";
})(EBizType = exports.EBizType || (exports.EBizType = {}));
//# sourceMappingURL=common.js.map