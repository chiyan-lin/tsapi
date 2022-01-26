"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EItemStatus = exports.EWinLogType = exports.EPhase = exports.NewsType = exports.OrderSource = exports.OrderType = exports.ECode = void 0;
var ECode;
(function (ECode) {
    ECode[ECode["CODE_OK"] = 0] = "CODE_OK";
    ECode[ECode["CODE_SERVER_ERROR"] = 1000] = "CODE_SERVER_ERROR";
    ECode[ECode["CODE_FREQ_ERROR"] = 1001] = "CODE_FREQ_ERROR";
    ECode[ECode["CODE_INNER_ERROR"] = 1003] = "CODE_INNER_ERROR";
    ECode[ECode["CODE_PARAM_ERROR"] = 1004] = "CODE_PARAM_ERROR";
    ECode[ECode["CODE_ACT_IS_OVER"] = 20000] = "CODE_ACT_IS_OVER";
    ECode[ECode["CODE_NOT_ENOUGH_PIECE"] = 21000] = "CODE_NOT_ENOUGH_PIECE";
    ECode[ECode["CODE_EXCHANGE_ITEM_NONE"] = 21001] = "CODE_EXCHANGE_ITEM_NONE";
    ECode[ECode["CODE_EXCHANGE_LIMITED"] = 21002] = "CODE_EXCHANGE_LIMITED";
})(ECode = exports.ECode || (exports.ECode = {}));
var OrderType;
(function (OrderType) {
    OrderType[OrderType["ORDER_TYPE_DESC"] = 0] = "ORDER_TYPE_DESC";
    OrderType[OrderType["ORDER_TYPE_ASC"] = 1] = "ORDER_TYPE_ASC";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var OrderSource;
(function (OrderSource) {
    OrderSource[OrderSource["ORDER_SOURCE_SCORE"] = 0] = "ORDER_SOURCE_SCORE";
    OrderSource[OrderSource["ORDER_SOURCE_CHARM"] = 1] = "ORDER_SOURCE_CHARM";
    OrderSource[OrderSource["ORDER_SOURCE_CONTRIBUTION"] = 2] = "ORDER_SOURCE_CONTRIBUTION";
    OrderSource[OrderSource["ORDER_SOURCE_ACTIVITY"] = 3] = "ORDER_SOURCE_ACTIVITY";
})(OrderSource = exports.OrderSource || (exports.OrderSource = {}));
var NewsType;
(function (NewsType) {
    NewsType[NewsType["NEWS_TYPE_SEND_GIFT"] = 0] = "NEWS_TYPE_SEND_GIFT";
    NewsType[NewsType["NEWS_TYPE_RECEIVE_GIFT"] = 1] = "NEWS_TYPE_RECEIVE_GIFT";
    NewsType[NewsType["NEWS_TYPE_JOIN"] = 2] = "NEWS_TYPE_JOIN";
    NewsType[NewsType["NEWS_TYPE_UPGRADE"] = 3] = "NEWS_TYPE_UPGRADE";
    NewsType[NewsType["NEWS_TYPE_IDENTITY"] = 4] = "NEWS_TYPE_IDENTITY";
})(NewsType = exports.NewsType || (exports.NewsType = {}));
var EPhase;
(function (EPhase) {
    EPhase[EPhase["PHASE_NONE"] = 0] = "PHASE_NONE";
    EPhase[EPhase["PHASE_NOT_STARTED"] = 10] = "PHASE_NOT_STARTED";
    EPhase[EPhase["PHASE_NOT_REST"] = 11] = "PHASE_NOT_REST";
    EPhase[EPhase["PHASE_QUALIFY"] = 20] = "PHASE_QUALIFY";
    EPhase[EPhase["PHASE_KNOCKOUT1"] = 30] = "PHASE_KNOCKOUT1";
    EPhase[EPhase["PHASE_KNOCKOUT2"] = 31] = "PHASE_KNOCKOUT2";
    EPhase[EPhase["PHASE_SCORE"] = 40] = "PHASE_SCORE";
    EPhase[EPhase["PHASE_SEMIFINALS"] = 50] = "PHASE_SEMIFINALS";
    EPhase[EPhase["PHASE_FINALS"] = 60] = "PHASE_FINALS";
    EPhase[EPhase["PHASE_FINISHED"] = 1000] = "PHASE_FINISHED";
})(EPhase = exports.EPhase || (exports.EPhase = {}));
var EWinLogType;
(function (EWinLogType) {
    EWinLogType[EWinLogType["TYPE_EXCHANGE"] = 0] = "TYPE_EXCHANGE";
    EWinLogType[EWinLogType["TYPE_DRAW"] = 1] = "TYPE_DRAW";
})(EWinLogType = exports.EWinLogType || (exports.EWinLogType = {}));
var EItemStatus;
(function (EItemStatus) {
    EItemStatus[EItemStatus["STATUS_NONE"] = 0] = "STATUS_NONE";
    EItemStatus[EItemStatus["STATUS_CAN"] = 1] = "STATUS_CAN";
    EItemStatus[EItemStatus["STATUS_NOT_MEET"] = 2] = "STATUS_NOT_MEET";
    EItemStatus[EItemStatus["STATUS_NOT_ENOUGH"] = 3] = "STATUS_NOT_ENOUGH";
    EItemStatus[EItemStatus["STATUS_LIMITED"] = 4] = "STATUS_LIMITED";
})(EItemStatus = exports.EItemStatus || (exports.EItemStatus = {}));
//# sourceMappingURL=moneyapifamily.js.map