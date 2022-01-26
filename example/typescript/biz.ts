export enum ChannelRoleType {
  CHANNEL_ROLE_TYPE_NONE = 0,
  CRT_GUEST = 1,
  CRT_MEMBER = 5,
  CRT_MASTER = 10,
  CRT_OWNER = 15,
}

export enum MemberMsgRecvMode {
  CMMR_NONE = 0,
  CMMR_All = 1,
  CMMR_DND = 2,
}

export enum ChannelSpeakMode {
  CHANNEL_SPEAK_MODE_NONE = 0,
  CSM_ALL = 1,
  CSM_MEMBER_ONLY = 2,
  CSM_MASTER_ONLY = 3,
}

export enum GuestSpeakLimitBitmask {
  GSA_NONE = 0,
  GSA_TEXT = 1,
  GSA_IMAGE = 2,
  GSA_AUDIO = 4,
  GSA_GAME_INVITE = 8,
  GSA_RAND_EMOJI = 16,
}

export enum ChannelEnterMode {
  CHANNEL_ENTER_MODE_NONE = 0,
  CEM_FREE = 1,
  CEM_PASSWORD = 2,
}

export enum ChannelLockEnterMode {
  CHANNEL_LOKE_ENTER_MODE_NONE = 0,
  CLEM_ALL_PASSWORD = 1,
  CLEM_ONLY_GUEST_PASSWORD = 2,
}

export enum ChannelMasterPalyBgmMode {
  CMPB_ENABLE = 0,
  CMPB_DISABLE = 1,
}

export enum ChannelJoinMode {
  CHANNEL_JOIN_MODE_NONE = 0,
  CJM_FREE = 1,
  CJM_APPROVE = 2,
}

export enum ChannelVoiceEnterMode {
  CHANNEL_VOICE_ENTER_MODE_NONE = 0,
  CVEM_MEMBER_ONLY = 1,
  CVEM_MASTER_ONLY = 2,
}

export enum ChannelVoiceMode {
  CHANNEL_VOICE_MODE_NONE = 0,
  CVM_ALLOW = 1,
  CVM_DISABLE = 2,
}

export enum ChannelType {
  CHANNEL_TYPE_NONE = 0,
  CT_TOP = 1,
  CT_CHILD = 2,
}

export enum BanReason {
  BAN_REASON_NONE = 0,
  BR_PORN = 1,
  BR_GAMBLING = 2,
  BR_POLITICAL = 3,
  BR_OTHER = 100,
}

export enum ChannelTagType {
  CHANNEL_THEME_TYPE_NONE = 0,
  CTT_DATE = 1,
  CTT_MAKEFRIENDS = 2,
  CTT_SING = 3,
  CTT_CHAT = 4,
  CTT_GAME = 5,
}

export enum PluginType {
  PLUGIN_TYPE_NONE = 0,
  PT_BASE = 1,
  PT_CHAT = 10,
  PT_KTV = 11,
  PT_MICUP = 12,
  PT_MAKEFRIENDS = 13,
  PT_RADIO = 14,
  PT_CHESS = 100,
  PT_LOTTERY = 101,
  PT_LUA_GAMES = 200,
  PT_ZHU_LI = 300,
}

export enum PostSyncRole {
  POST_SYNC_ROLE_NONE = 0,
  PSR_All = 1,
  PSR_MASTER = 2,
  PSR_OWNER = 3,
}

export enum PostSyncContent {
  POST_SYNC_CONTENT_NONE = 0,
  PSC_All = 1,
  PSC_TAG = 2,
}

export enum IMSecType {
  IM_SEC_TYPE_NONE = 0,
  IST_TEXT = 1,
  IST_IMAGE = 2,
  IST_AUDIO = 3,
  IST_VIDEO = 4,
  IST_MUSIC = 5,
  IST_ACTIVITY = 6,
  IST_CREATE = 1000,
  IST_DISBAND = 1001,
  IST_SET_PRIVATE = 1002,
  IST_SET_NAME = 1003,
  IST_SET_BULLETIN = 1004,
  IST_SET_SPEAKMODE = 1005,
  IST_SET_ENTERMODE = 1006,
  IST_SET_JOINMODE = 1007,
  IST_SET_VOICEMODE = 1008,
  IST_SET_TAGTYPES = 1009,
  IST_SET_VOICE_ENTER_MODE = 1010,
  IST_SET_GUEST_SPEAK_LIMIT = 1011,
  IST_SET_TAGS = 1012,
  IST_JOIN_APPLY = 1100,
  IST_JOIN_APPROVE = 1101,
  IST_SET_ROLE = 1102,
  IST_ACCEPT_ROLE = 1103,
  IST_BANNED = 1104,
  IST_KICKOFF = 1105,
  IST_SET_REMARK = 1106,
  IST_USER_ROLE_CHANGE = 1107,
  IST_GAME_INVITE = 2000,
  IST_CANCEL_GAME_INVITE = 2001,
  IST_UINFO = 2002,
  IST_WITHDRAW = 2003,
  IST_RED_PACK = 2004,
  IST_TAT = 2005,
  IST_OPEN_VOICE_CHAT = 2006,
  IST_OPEN_VOICE_GAME = 2007,
  IST_CLOSE_VOICE_GAME = 2008,
  IST_OUTSIDE_GAME_INVITE = 2009,
  IST_NOT_COMPACT_PLUGIN = 2010,
  IST_LOCATION = 2011,
  IST_SHARE_TO_CHANNEL = 2100,
  IST_SHARE_TO_TOP_CHANNEL = 2101,
  IST_SHARE_TO_SUB_CHANNEL = 2102,
  IST_RAND_EMOJI = 3000,
  IST_CLG_CREATE = 3100,
  IST_CLG_GAMERESULT = 3101,
  IST_CLG_GAMERANK = 3102,
  IST_INVITE_TEAM = 3103,
  IST_CLG_STATECHANGE = 3104,
  IST_TEAM_INVALID = 3105,
  IST_CLG_LABELTIP = 3106,
  IST_CLG_ESTPICKMEHATMSG = 3107,
  IST_TEAM_GAME_FINISH = 3108,
  IST_CHANNEL_NEW_BBS_POST = 3200,
  IST_AVATAR_TEXT = 3300,
  IST_NEW_MEMBER_WELCOME = 3310,
  IST_ANCHOR_SIT_DOWN = 3400,
  IST_SUB_FIRST_ONLINE = 3401,
  IST_SUB_SECOND_ONLINE = 3402,
  IST_CHANNEL_MANAGER_ROBOT_WELCOME_MSG = 3500,
  IST_CHANNEL_MANAGER_ROBOT_TAT_MSG = 3501,
  IST_CHANNEL_ROBOT_SYS_MSG = 3502,
  IST_CHANNEL_ROBOT_MSG = 3503,
  IST_ENTER_CHANNEL = 3600,
  IST_SEND_DIAMOND = 3601,
  IST_RECV_DIAMOND = 3602,
  IST_FAMILY_MEMBER_SHOW = 3603,
  IST_KTV_POST = 3604,
}

export enum LabelTip {
  GET_CLG = 0,
  NONGet_CLG = 1,
  WIN_CLG = 2,
}

export enum IMMsgFlag {
  IMF_SYS = 0,
  IMF_HIDE = 1,
  IMF_NO_FORWARD = 2,
  IMF_ROBOT = 3,
  IMF_SIGNAL = 4,
  IMF_TOUSER = 5,
}

export enum SourceEntry {
  SOURCE_ENTRY_NONE = 0,
  SE_HOME_ROOM = 1,
  SE_HOME_GAME = 2,
  SE_ROOM_LIST = 3,
  SE_GAME_LIST = 4,
  SE_GAME_RAND = 5,
  SE_IM = 6,
  SE_SHARE = 7,
  SE_UINFO = 8,
  SE_HISTORY = 9,
  SE_ICON = 10,
  SE_FOLLOW = 11,
  SE_QUICK_JOIN = 12,
  SE_STEP_UINFO = 13,
  SE_PUSH = 14,
  SE_AGGREGATION_NEARBY = 15,
  SE_AGGREGATION_KTV = 16,
  SE_AGGREGATION_OPER = 17,
  SE_FULL_SERVER_PUSH = 18,
  SE_SUB_GROUP = 19,
  SE_RADIO_STATION = 20,
  SE_GANG_UP = 21,
  SE_CHANNEL_NOTICE = 22,
  SE_CREATE_CHANNEL = 23,
  SE_CHANNEL_SLIDE = 24,
  SE_SUB_CHANNEL_BUTTON = 25,
  SE_QUICK_JOIN_QUIT_BUTTON = 26,
  SE_MY_JOIN_CHANNEL = 27,
  SE_SUB_CHANNEL_PAGE = 28,
  SE_RETURN_FROM_GAME = 29,
  SE_SEARCH_RESULT_CHANNEL = 30,
  SE_SEARCH_RESULT_USER = 31,
  SE_TAB_MY_CHANNEL = 32,
  SE_TAB_RECOMMEND = 33,
  SE_TAB_GAME = 34,
  SE_TAB_TOPIC_SQUARE = 35,
  SE_FRIEND_RECOMMEND = 36,
  SE_MY_CHANNEL_POST = 37,
  SE_RADIO_TAB = 38,
  SE_GAME_GUIDE = 39,
  SE_APP_LAYER = 40,
  SE_BBS_POST_AVATAR = 41,
  SE_OTHER_TAB = 42,
  SE_SEARCH_RECOMMEND = 43,
  SE_NEW_USER_GUIDE = 44,
  SE_CHANNEL_PARTY = 45,
  SE_NEW_USER_MATCH = 46,
  SE_PARTY_BACK_TO_CHANNEL = 47,
  SE_OFFICIAL_RECOMMEND = 48,
  SE_RANDOM_POPUP = 49,
  SE_IM_RECOM_CHANNEL = 50,
  SE_CHANNEL_STRATEGY_PUSH = 51,
  SE_PARTYMASTER = 52,
  SE_BACK_USER = 53,
  SE_PROFILE_MY_CHANNEL = 54,
  SE_PROFILE_OTHER_CHANNEL = 55,
  SE_SCREEN_SHARE = 56,
  SE_CHANNEL_SETTING = 57,
  SE_CHANNEL_MORE_PAGE = 58,
  SE_SEARCH_PAGE = 59,
  SE_SAME_CITY_MODULE = 60,
  SE_SIDE_LIST_RECOM = 61,
  SE_GAME_GROUP = 62,
  SE_H5 = 63,
  SE_PARTY_SECOND_PAGE = 64,
}

export enum AccountSource {
  ACCOUNT_SOURCE_NONE = 0,
  ACCOUNT_SOURCE_FACEBOOK = 5,
  ACCOUNT_SOURCE_GOOGLE = 6,
  ACCOUNT_SOURCE_LINE = 7,
  ACCOUNT_SOURCE_VK = 8,
  ACCOUNT_SOURCE_ZALO = 9,
  ACCOUNT_SOURCE_KIT = 10,
  ACCOUNT_SOURCE_APPLE = 11,
  ACCOUNT_SOURCE_IMO = 12,
  ACCOUNT_SOURCE_NOIZZ = 13,
  ACCOUNT_SOURCE_PHONE = 21,
}

export enum ResType {
  RES_TYPE_NONE = 0,
  RES_TYPE_PNG = 1,
  RES_TYPE_SVGA = 100,
}

export enum SeatStatus {
  SS_LOCKED = 0,
  SS_READY = 1,
  SS_CLOSE_MIC_BY_SELF = 2,
  SS_CLOSE_MIC_BY_OWNER = 3,
}

export enum OsType {
  UNKNOWN = 0,
  ANDROID = 1,
  IOS = 2,
  BOTH = 3,
}

export enum ESexType {
  ESTFemale = 0,
  ESTMale = 1,
  ESTUnknown = 3,
}

export interface IMMsgSection {
  type: number;
  color: string;
  content: string;
  extention: string;
  jump: string;
  trans: string;
}

export interface IMMsgItem {
  msgid: string;
  flags: number;
  ts: number;
  from_uinfo: UserInfo;
  role: number;
  cinfo: CInfo;
  sections: IMMsgSection[];
  seqid: number;
  cseq: string;
  to_uids: number[];
  from_umark: UserMark;
  robotIns: RobotIns;
}

export interface ChannelTag {
  tag_type: number;
  name: string;
}

export interface ChannelMember {
  uid: number;
  role: number;
  online: boolean;
  msg_receive_mode: number;
  inviter: number;
  source: number;
  time: number;
  remark: string;
}

export interface CCuteInfo {
  vcid: string;
}

export interface CInterregion {
  region: string;
  country_code: string;
}

export interface CInfo {
  cid: string;
  pid: string;
  creator: number;
  owner: number;
  name: string;
  bulletin: string;
  lang: string;
  created_time: number;
  ccute_info: CCuteInfo;
  channel_type: number;
  update_time: number;
  is_private: boolean;
  offical: boolean;
  password: string;
  speak_mode: number;
  enter_mode: number;
  join_mode: number;
  voice_mode: number;
  channel_voice_enter_mode: number;
  guest_speak_limit: number;
  tag_types: number[];
  current_bg_themeid: number;
  tags: net.name.base.tag.Tag[];
  avatar: string;
  version: number;
  disband_expire_second: number;
  not_recommend_expire_second: number;
  is_city: boolean;
  location_tude: string;
  country: string;
  city: string;
  location: string;
  post_sync_role: number;
  post_sync_content: number;
  post_sync_tag: net.name.base.tag.Tag;
  lock_enter_mode: number;
  party_bg: number;
  source: string;
  inter_region: CInterregion;
  close_recom: boolean;
  master_play_bgm: number;
  join_pay_level: number;
  join_active_time: number;
  role_limit: RoleLimit;
}

export interface RoleLimit {
  master: number;
  member: number;
}

export interface CDynamic {
  cid: string;
  onlines: number;
  current_plugin_info: PluginInfo;
}

export interface SeatUser {
  seat: number;
  uid: number;
  status: number;
}

export interface MediaToken {
  token: string;
  expire: number;
}

export interface PluginInfo {
  type: number;
  pid: string;
  ver: number;
  templ: number;
  ctx: string;
  ext: string;
}

export interface UserInfo {
  uid: number;
  vid: number;
  sex: number;
  nick: string;
  avatar: string;
  birthday: string;
  sign: string;
  last_login_location: string;
  location_tude: string;
  hometown: string;
  job: string;
  device: string;
  os_type: string;
  app_ver: string;
  app_name: string;
  country: string;
  imo: string;
  vlv: number;
  ovid: number;
  account_source: number;
  region: string;
  davatar: number;
  hide_location: number;
  atype: number;
  hide_recomm: number;
  update_type: number;
  fix: number;
  hn: number;
  ver: number;
  on_micro: number;
  last_last_login_time: number;
  first_login_time: number;
  last_login_time: number;
  ext: {
    [key: string]: string;
  };
}

export interface UserMark {
  medal_id: number[];
  chat_bubble_id: number;
  nick_color_id: number;
}

export interface RobotIns {
  insId: string;
  cid: string;
  tid: string;
  ttype: string;
  name: string;
  desc: string;
  avatar: string;
}

export interface AlgoToken {
  dispatch_id: string;
  strategy: string;
}

export interface VerRange {
  min: string;
  max: string;
}

export interface TimeRange {
  begin: number;
  end: number;
}

export interface ActivityEntry {
  res_type: number;
  res_url: string;
  jump: string;
  and: VerRange;
  ios: VerRange;
  compat_png: string;
  ab_key: string;
  valid_time: TimeRange;
  is_open: boolean;
}
