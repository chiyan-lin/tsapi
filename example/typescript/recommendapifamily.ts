export interface ListRecommendedFamiliesReq {
  page: common.Page;
}

export interface ListRecommendedFamiliesRes {
  result: common.Result;
  page: common.Page;
  family: Family[];
}

export interface Family {
  fid: string;
  cinfo: biz.CInfo;
}

export interface NotifySendGiftReq {
  fid: string;
  uid: number;
  diamond_count: number;
  score: number;
}

export interface NotifySendGiftRes {
  result: common.Result;
}
