"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestInterface = exports.GetLatestDrawLogs = exports.ExchangeItem = exports.GetExchangeItems = exports.LuckyDraw = exports.GetDrawPoolInfo = exports.GetUserWinLogs = exports.GetUserPieceInfo = exports.GetMatchFamilyMembers = exports.GetMatchFinalInfo = exports.GetMatchScoreRank = exports.GetMatchKnockoutRank = exports.GetMatchQualifyRank = exports.GetMatchSchedule = exports.GetMatchEntryInfo = exports.GetAllFamilyIDs = exports.GetLatestNews = exports.GetFamilyMembers = exports.GetTopMembers = exports.GetFamilyProfile = exports.GetFamilyMonthRanks = exports.GetTopFamilies = exports.GetFamilyProfile4App = exports.GetFamilyBaseInfos = exports.GetFamilyBaseInfo = exports.GetFamilyLvConfs = void 0;
var axios_1 = __importDefault(require("axios"));
function baseRequest(packageName, serviceName) {
    return function methodReq(method, req) {
        return axios_1.default.post("/api", {
            packageName: packageName,
            serviceName: serviceName,
            method: method,
            data: req
        });
    };
}
var requestFamily = baseRequest("net.ihago.money.api.family", "Family");
exports.GetFamilyLvConfs = function (req) {
    return requestFamily("GetFamilyLvConfs", req);
};
exports.GetFamilyBaseInfo = function (req) {
    return requestFamily("GetFamilyBaseInfo", req);
};
exports.GetFamilyBaseInfos = function (req) {
    return requestFamily("GetFamilyBaseInfos", req);
};
exports.GetFamilyProfile4App = function (req) {
    return requestFamily("GetFamilyProfile4App", req);
};
exports.GetTopFamilies = function (req) {
    return requestFamily("GetTopFamilies", req);
};
exports.GetFamilyMonthRanks = function (req) {
    return requestFamily("GetFamilyMonthRanks", req);
};
exports.GetFamilyProfile = function (req) {
    return requestFamily("GetFamilyProfile", req);
};
exports.GetTopMembers = function (req) {
    return requestFamily("GetTopMembers", req);
};
exports.GetFamilyMembers = function (req) {
    return requestFamily("GetFamilyMembers", req);
};
exports.GetLatestNews = function (req) {
    return requestFamily("GetLatestNews", req);
};
exports.GetAllFamilyIDs = function (req) {
    return requestFamily("GetAllFamilyIDs", req);
};
exports.GetMatchEntryInfo = function (req) {
    return requestFamily("GetMatchEntryInfo", req);
};
exports.GetMatchSchedule = function (req) {
    return requestFamily("GetMatchSchedule", req);
};
exports.GetMatchQualifyRank = function (req) {
    return requestFamily("GetMatchQualifyRank", req);
};
exports.GetMatchKnockoutRank = function (req) {
    return requestFamily("GetMatchKnockoutRank", req);
};
exports.GetMatchScoreRank = function (req) {
    return requestFamily("GetMatchScoreRank", req);
};
exports.GetMatchFinalInfo = function (req) {
    return requestFamily("GetMatchFinalInfo", req);
};
exports.GetMatchFamilyMembers = function (req) {
    return requestFamily("GetMatchFamilyMembers", req);
};
exports.GetUserPieceInfo = function (req) {
    return requestFamily("GetUserPieceInfo", req);
};
exports.GetUserWinLogs = function (req) {
    return requestFamily("GetUserWinLogs", req);
};
exports.GetDrawPoolInfo = function (req) {
    return requestFamily("GetDrawPoolInfo", req);
};
exports.LuckyDraw = function (req) {
    return requestFamily("LuckyDraw", req);
};
exports.GetExchangeItems = function (req) {
    return requestFamily("GetExchangeItems", req);
};
exports.ExchangeItem = function (req) {
    return requestFamily("ExchangeItem", req);
};
exports.GetLatestDrawLogs = function (req) {
    return requestFamily("GetLatestDrawLogs", req);
};
exports.TestInterface = function (req) {
    return requestFamily("TestInterface", req);
};
//# sourceMappingURL=moneyapifamily.js.map