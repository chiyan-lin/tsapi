export enum ECode {
  CODE_OK = 0,
  CODE_SERVER_ERROR = 10000,
  CODE_INVALID_TOKEN = 10001,
}

export interface GetUserLevelInfoReq {}

export interface LevelAward {
  level: number;
  prize: moneycom.PrizeInfo[];
}

export interface GetUserLevelInfoRes {
  result: common.Result;
  user: moneycom.User;
  level: number;
  cur_amount: number;
  next_level_amount: number;
  score: number;
  level_awards: LevelAward[];
}

export interface LevelConfig {
  level: number;
  from_amount: number;
  to_amount: number;
}

export interface GetLevelConfigReq {}

export interface GetLevelConfigRes {
  result: common.Result;
  level_configs: LevelConfig[];
}

export interface IssueScoreReq {
  uid: number;
  score: number;
  token: string;
}

export interface IssueScoreRes {
  result: common.Result;
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
