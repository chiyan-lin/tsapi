export enum ReasonType {
  kReasonTypeUnknown = 0,
  kReasonTypeNick = 1,
  kReasonTypeSign = 2,
  kReasonTypeHome = 3,
  kReasonTypeJob = 4,
}

export enum ERet {
  kRetSuccess = 0,
  kRetErrParameter = 1,
  kRetErrSystem = 999,
  kRetUserInfoInvalid = 361,
  KRetUinfoWordLimit = 362,
  KRetUinfoAvatarLimit = 363,
  KRetBindVipDuplicate = 364,
  KRetUnBindVip = 365,
}

export enum ESexType {
  ESTFemale = 0,
  ESTMale = 1,
  ESTUnknown = 3,
}

export interface UIDVer {
  uid: number;
  ver: number;
}

export interface ReasonInfo {
  invalid_type: number;
}

export interface GetUinfoByVerReq {
  uids: UIDVer[];
  fields: string[];
  extra_fields: string[];
  selector: biz.UserInfo;
}

export interface GetUinfoByVerRes {
  result: common.Result;
  infos: biz.UserInfo[];
}

export interface UpdateUinfoReq {
  info: biz.UserInfo;
}

export interface UpdateUinfoRes {
  result: common.Result;
  info: biz.UserInfo;
  reason: ReasonInfo;
}

export interface UpdateAvatarReq {
  url: string;
}

export interface UpdateAvatarRes {
  result: common.Result;
  url: string;
}

export interface MQReportAvatarReq {
  uid: number;
  url: string;
  reason: string;
  status: string;
}

export interface MQReportAvatarRes {
  result: common.Result;
}

export interface BindVipAccountReq {
  uid: number;
  vid: number;
  vlv: number;
}

export interface BindVipAccountRes {
  result: common.Result;
  recycle_vid: number;
  recycle_vlv: number;
}

export interface VipAccountInfo {
  uid: number;
  vid: number;
  vlv: number;
  msg: string;
}

export interface BatchBindVipAccountReq {
  accountes: VipAccountInfo[];
}

export interface BatchBindVipAccountRes {
  result: common.Result;
  fail_accountes: VipAccountInfo[];
  success_accountes: VipAccountInfo[];
}

export interface SetAvatarLimitReq {
  uids: number[];
  ttl: number;
}

export interface SetAvatarLimitRes {
  result: common.Result;
}

export interface SetWordLimitReq {
  uids: number[];
  ttl: number;
}

export interface SetWordLimitRes {
  result: common.Result;
}

export interface FreeAvatarLimitReq {
  uids: number[];
}

export interface FreeAvatarLimitRes {
  result: common.Result;
}

export interface FreeWordLimitReq {
  uids: number[];
}

export interface FreeWordLimitRes {
  result: common.Result;
}
