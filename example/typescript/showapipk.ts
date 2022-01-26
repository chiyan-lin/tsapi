export enum RetCode {
  ERR_Ok = 0,
  ERR_TOKEN_PARAM = 1001,
  ERR_PARAM = 1002,
  ERR_MYSQL_EXEC = 2001,
  ERR_REDIS = 2002,
  ERR_USER_INFO = 3001,
  ERR_USER_PK_INVITING = 4001,
  ERR_USER_PK_INVITED = 4002,
  ERR_USER_PK_PKING = 4003,
  ERR_USER_NOT_IN_PK_CHANNEL = 4004,
  ERR_INVITE_FREQ_LIMIT = 4005,
  ERR_USER_NOT_WILLING_TO_PK = 4006,
  ERR_INVITE_INVALID = 4007,
  ERR_SENSITIVE_WORD = 4008,
}

export enum Uri {
  UriNone = 0,
  UriPKInvite = 1,
  UriPKChange = 2,
  UriPKActivityEntry = 3,
}

export enum UserPkStatus {
  USER_PKSTATUS_NONE = 0,
  USER_PKSTATUS_INVITING = 1,
  USER_PKSTATUS_INVITED = 2,
  USER_PKSTATUS_PKING = 3,
}

export enum EPhase {
  EPHASE_PK_NONE = 0,
  EPHASE_PK_READY = 1,
  EPHASE_PKING = 2,
  EPHASE_PK_SHOWRESULT = 3,
  EPHASE_PK_PUNISH = 4,
}

export enum EPkResult {
  EPK_RESULT_NONE = 0,
  EPK_RESULT_WIN = 1,
  EPK_RESULT_LOSE = 2,
  EPK_RESULT_TIE = 3,
}

export enum ConnectStatus {
  CONNECT_STATUS_NONE = 0,
  CONNECT_STATUS_CONNECTING = 1,
  CONNECT_STATUS_WAITING = 2,
}

export interface PkNotify {
  header: common.Header;
  uri: number;
  pk_invite: PkInviteNotify;
  pk_change: PkChangeNotify;
  pk_activity_entry: PKActivityEntryNotify;
}

export interface PkInviteNotify {
  from_uid: number;
  from_cid: string;
  to_uid: number;
  to_cid: string;
  operation: number;
  pk_id: string;
  punish_text: string;
  timestamp: number;
  ttl: number;
}

export interface PkChangeNotify {
  pk_phase_info: PkPhaseInfo;
  connect_info: ConnectInfo;
}

export interface PKActivityEntryNotify {
  activity_entry: biz.ActivityEntry;
}

export interface InvitePkReq {
  to_uid: number;
  from_cid: string;
  punish_text: string;
}

export interface InvitePkRes {
  result: common.Result;
  ttl: number;
  timestamp: number;
}

export interface AcceptPkReq {
  pk_id: string;
}

export interface AcceptPkRes {
  result: common.Result;
}

export interface RejectPkReq {
  pk_id: string;
}

export interface RejectPkRes {
  result: common.Result;
}

export interface ExitPkReq {
  pk_id: string;
}

export interface ExitPkRes {
  result: common.Result;
}

export interface GetPkConfigReq {}

export interface GetPkConfigRes {
  result: common.Result;
  duration: number;
  punish_text: string[];
  users: PkUserInfo[];
}

export interface PkUserInfo {
  uid: number;
  pk_status: number;
}

export interface GetPkInfoReq {}

export interface PkInfo {
  uid: number;
  room_id: string;
  charm: number;
  contribution_uids: number[];
  contribution_avatars: string[];
  pk_result: number;
}

export interface PkPhaseInfo {
  pk_id: string;
  phase: number;
  count_down: number;
  pk_info: PkInfo;
  other_pk_info: PkInfo;
  punish: string;
  start_timestamp: number;
}

export interface ConnectInfo {
  status: number;
  start_time: number;
  other_uid: number;
  other_cid: string;
}

export interface GetPkInfoRes {
  result: common.Result;
  connect_info: ConnectInfo;
  pk_phase_info: PkPhaseInfo;
  activity_entry: biz.ActivityEntry;
}

export interface RankItem {
  uid: number;
  nick: string;
  avatar: string;
  value: number;
  rank: number;
}

export interface GetContributionRankReq {
  uid: number;
  pk_id: string;
  type: number;
  offset: number;
  limit: number;
}

export interface GetContributionRankRes {
  result: common.Result;
  contribution_ranks: RankItem[];
}

export interface ReportConnectStatusReq {
  cid: string;
  uid: number;
  other_cid: string;
  other_uid: number;
  status: number;
}

export interface ReportConnectStatusRes {
  result: common.Result;
}
