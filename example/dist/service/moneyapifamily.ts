import * as moneyapifamily from "../interface/moneyapifamily";
import axios from "axios";

function baseRequest(packageName: string, serviceName: string) {
  return function methodReq<T>(method: string, req: any): Promise<T> {
    return axios.post("/api", {
      packageName: packageName,
      serviceName: serviceName,
      method: method,
      data: req
    });
  };
}

const requestFamily = baseRequest("net.ihago.money.api.family", "Family");

export const GetFamilyLvConfs = (req: moneyapifamily.GetFamilyLvConfsReq) =>
  requestFamily<moneyapifamily.GetFamilyLcConfsRes>("GetFamilyLvConfs", req);

export const GetFamilyBaseInfo = (req: moneyapifamily.GetFamilyBaseInfoReq) =>
  requestFamily<moneyapifamily.GetFamilyBaseInfoRes>("GetFamilyBaseInfo", req);

export const GetFamilyBaseInfos = (req: moneyapifamily.GetFamilyBaseInfosReq) =>
  requestFamily<moneyapifamily.GetFamilyBaseInfosRes>(
    "GetFamilyBaseInfos",
    req
  );

export const GetFamilyProfile4App = (
  req: moneyapifamily.GetFamilyProfile4AppReq
) =>
  requestFamily<moneyapifamily.GetFamilyProfile4AppRes>(
    "GetFamilyProfile4App",
    req
  );

export const GetTopFamilies = (req: moneyapifamily.GetTopFamiliesReq) =>
  requestFamily<moneyapifamily.GetTopFamiliesRes>("GetTopFamilies", req);

export const GetFamilyMonthRanks = (
  req: moneyapifamily.GetFamilyMonthRanksReq
) =>
  requestFamily<moneyapifamily.GetFamilyMonthRanksRes>(
    "GetFamilyMonthRanks",
    req
  );

export const GetFamilyProfile = (req: moneyapifamily.GetFamilyProfileReq) =>
  requestFamily<moneyapifamily.GetFamilyProfileRes>("GetFamilyProfile", req);

export const GetTopMembers = (req: moneyapifamily.GetTopMembersReq) =>
  requestFamily<moneyapifamily.GetTopMembersRes>("GetTopMembers", req);

export const GetFamilyMembers = (req: moneyapifamily.GetFamilyMembersReq) =>
  requestFamily<moneyapifamily.GetFamilyMembersRes>("GetFamilyMembers", req);

export const GetLatestNews = (req: moneyapifamily.GetLatestNewsReq) =>
  requestFamily<moneyapifamily.GetLatestNewsRes>("GetLatestNews", req);

export const GetAllFamilyIDs = (req: moneyapifamily.GetAllFamilyIDsReq) =>
  requestFamily<moneyapifamily.GetAllFamilyIDsRes>("GetAllFamilyIDs", req);

export const GetMatchEntryInfo = (req: moneyapifamily.GetMatchEntryInfoReq) =>
  requestFamily<moneyapifamily.GetMatchEntryInfoRes>("GetMatchEntryInfo", req);

export const GetMatchSchedule = (req: moneyapifamily.GetMatchScheduleReq) =>
  requestFamily<moneyapifamily.GetMatchScheduleRes>("GetMatchSchedule", req);

export const GetMatchQualifyRank = (
  req: moneyapifamily.GetMatchQualifyRankReq
) =>
  requestFamily<moneyapifamily.GetMatchQualifyRankRes>(
    "GetMatchQualifyRank",
    req
  );

export const GetMatchKnockoutRank = (
  req: moneyapifamily.GetMatchKnockoutRankReq
) =>
  requestFamily<moneyapifamily.GetMatchKnockoutRankRes>(
    "GetMatchKnockoutRank",
    req
  );

export const GetMatchScoreRank = (req: moneyapifamily.GetMatchScoreRankReq) =>
  requestFamily<moneyapifamily.GetMatchScoreRankRes>("GetMatchScoreRank", req);

export const GetMatchFinalInfo = (req: moneyapifamily.GetMatchFinalInfoReq) =>
  requestFamily<moneyapifamily.GetMatchFinalInfoRes>("GetMatchFinalInfo", req);

export const GetMatchFamilyMembers = (
  req: moneyapifamily.GetMatchFamilyMembersReq
) =>
  requestFamily<moneyapifamily.GetMatchFamilyMembersRes>(
    "GetMatchFamilyMembers",
    req
  );

export const GetUserPieceInfo = (req: moneyapifamily.GetUserPieceInfoReq) =>
  requestFamily<moneyapifamily.GetUserPieceInfoRes>("GetUserPieceInfo", req);

export const GetUserWinLogs = (req: moneyapifamily.GetUserWinLogsReq) =>
  requestFamily<moneyapifamily.GetUserWinLogsRes>("GetUserWinLogs", req);

export const GetDrawPoolInfo = (req: moneyapifamily.GetDrawPoolInfoReq) =>
  requestFamily<moneyapifamily.GetDrawPoolInfoRes>("GetDrawPoolInfo", req);

export const LuckyDraw = (req: moneyapifamily.LuckyDrawReq) =>
  requestFamily<moneyapifamily.LuckyDrawRes>("LuckyDraw", req);

export const GetExchangeItems = (req: moneyapifamily.GetExchangeItemsReq) =>
  requestFamily<moneyapifamily.GetExchangeItemsRes>("GetExchangeItems", req);

export const ExchangeItem = (req: moneyapifamily.ExchangeItemReq) =>
  requestFamily<moneyapifamily.ExchangeItemRes>("ExchangeItem", req);

export const GetLatestDrawLogs = (req: moneyapifamily.GetLatestDrawLogsReq) =>
  requestFamily<moneyapifamily.GetLatestDrawLogsRes>("GetLatestDrawLogs", req);

export const TestInterface = (req: moneyapifamily.TestInterfaceReq) =>
  requestFamily<moneyapifamily.TestInterfaceRes>("TestInterface", req);
