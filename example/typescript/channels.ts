export enum ECode {
  OK = 0,
  RATELIMIT = 1000,
  CHANNEL_BANNED = 1001,
  CHANNEL_NOT_EXISTS = 1002,
  NO_PERMIT = 1003,
  NO_ARROW = 1004,
  LOCKED = 1100,
  PRIVATE = 1101,
  PASSWORD_ERROR = 1102,
  KICK_OFF_FROZE = 1103,
  ONLINE_LIMIT = 1104,
  PASSWORD_TRY_LIMIT = 1105,
  NOT_READY = 1106,
  WRONG_STATE = 1107,
  GAME_START = 1108,
  NOT_MATCH_CHANNEL = 1109,
  CHANNEL_All_DISBAND = 1110,
  CHANNEL_DISBAND_RETRY_OTHER = 1111,
  SENSITIVE = 1200,
  CHANNEL_NUM_LIMIT = 1201,
  CHANNEL_RENAME_LIMIT = 1202,
  CHANNEL_DELTOP_FORBIDDEN = 1203,
  CHANNEL_CREATE_SENSITIVE_LIMIT = 1204,
  CHANNEL_MODIFY_MONEY_NOT_ALLOWED = 1205,
  STILL_OTHERS = 1012,
  ROLE_NUM_LIMIT = 1300,
  JOIN_NUM_LIMIT = 1301,
  JOIN_BAN_FOREVER = 1302,
  STILL_IN_CHANNEL = 1303,
  ALREADY_CHANGED = 1304,
  NOT_IN_CHANNEL = 1305,
  OTHER_REJECTED = 1306,
  SENDMSG_FORBID = 1400,
  SENDMSG_BANNED = 1401,
  SENDMSG_GUEST_LIMIT = 1402,
  SEAT_LOCKED = 1500,
  SIT_DOWN_BUSY = 1501,
  SEAT_FULL = 1502,
  ALREADY_ON_SEAT = 1503,
  NOT_ON_SEAT = 1504,
  OTHER_PEOPLE_ON_SEAT = 1505,
  ON_OTHER_SEAT = 1506,
  ONLY_FIRST_SEAT = 1507,
  QUICK_MATCH_FAIL = 1510,
  THEME_EXPIRE = 1511,
  INVITE_EXPIRE = 1701,
  INVITE_MAX_LIMIT = 1702,
  NOT_SUPPORT_LOAD_PLUGIN = 1800,
  NOT_SUPPORT_TOP_CHANNEL = 1801,
  GLOBAL_PLUGIN_NOT_ARROW = 1802,
  ALREADY_HAS_FAMILY = 1810,
  FAMILY_JOIN_APPLY_NOT_CONDITION = 1813,
  FAMILY_CREATE_NOT_PERMIT = 1814,
}

export enum EBottomMessage {
  PlayNum = 0,
  Distance = 1,
}

export enum EDisplayUser {
  All = 0,
  NewChannleUser = 1,
  OldChannelUser = 2,
}

export enum EModuleAttribute {
  Mixing = 0,
  Chat = 1,
  Base = 2,
}

export enum EOSType {
  AllOS = 0,
  IOS = 1,
  Android = 2,
}

export enum EStyle {
  NoStyle = 0,
  StyleOne = 1,
  StyleTwo = 2,
  StyleThree = 3,
}

export enum ESpecialModuleType {
  NoType = 0,
  QuickJoin = 1,
  Charisma = 2,
  FollowNotice = 3,
  OtherApp = 4,
  PlaceHolder = 5,
}

export enum ECategory {
  ERecommend = 0,
  ECustom = 1,
  EGame = 2,
  EKTV = 3,
  EMicup = 4,
  EShuiShiWoDi = 5,
  ENiHuaWoCai = 6,
  EDaYingJia = 7,
  EPickMe = 8,
  EBase = 9,
  ENonBase = 10,
  EChat = 11,
  EBaijiale = 12,
  ERadio = 13,
  ENearby = 30,
  ESameCity = 31,
  EFriend = 32,
  EMyOwnChannel = 33,
}

export enum TranscodeMode {
  TRANSCODE_MODE_LD = 0,
  TRANSCODE_MODE_SD = 1,
  TRANSCODE_MODE_HD = 2,
}

export enum Uri {
  UriNone = 0,
  UriOnlines = 10,
  UriBanned = 11,
  UriReceiveMsg = 12,
  UriKickOff = 13,
  UriChannelBanned = 14,
  UriSeat = 15,
  UriLoadPlugin = 16,
  UriProbe = 18,
  UriChangeJoinMode = 19,
  UriEnter = 20,
  UriLeave = 21,
  UriSitDown = 30,
  UriStandUp = 31,
  UriSitdownPlz = 32,
  UriSitDownPlzAccept = 33,
  UriStandUpPlz = 34,
  UriLockSeat = 35,
  UriSetMic = 36,
  UriChangeSeat = 37,
  UriSetBackground = 38,
  UriNewBackground = 39,
  UriUnlockSeat = 40,
  UriOpenVoiceChat = 41,
  UriChannelLock = 42,
  UriReady = 43,
  UriStartGame = 44,
  UriGameFinish = 45,
  UriChannelManager = 46,
  UriExecuteEnter = 47,
  UriRadioStationNotify = 48,
  UriVideoStatusNotify = 49,
  UriKTVStatusNotify = 50,
  UriChannelUpgradeNotify = 51,
  UriSwitchLbsNotify = 52,
  UriSetPartyBackgroundNotify = 53,
  UriBgMusicNotify = 54,
  UriUpdateBgMusicSettingNotify = 55,
  UriGlobalLeaveNotify = 56,
}

export enum OpenGameType {
  DO_NOT_USE = 0,
  ROOM_GAME = 1,
  ROOM_ACT = 2,
}

export enum Reason {
  VIDEO_STOP = 0,
  VIDEO_START = 1,
  TRANSCODE_MODE_CHANGE = 2,
}

export interface CreateReq {
  cinfo: biz.CInfo;
  entry_point: number;
  card_id: number;
  plugin_info: biz.PluginInfo;
}

export interface CreateRes {
  result: common.Result;
  cinfo: biz.CInfo;
}

export interface DisbandReq {
  cid: string;
}

export interface DisbandRes {
  result: common.Result;
}

export interface ModifyReq {
  cinfo: biz.CInfo;
  set_fields: biz.CInfo;
  push_bulletin: boolean;
}

export interface ModifyRes {
  result: common.Result;
  cinfo: biz.CInfo;
  tag_id: string;
}

export interface GetCInfoReq {
  cid: string;
  selector: biz.CInfo;
  ret_top_online: boolean;
  ret_top_party_bg: boolean;
}

export interface GetCInfoRes {
  result: common.Result;
  cinfo: biz.CInfo;
  top_online: number;
  party_background: Background;
}

export interface GetCInfoListReq {
  cid: string;
  pid: string;
  selector: biz.CInfo;
}

export interface GetCInfoListRes {
  result: common.Result;
  cinfos: biz.CInfo[];
  dynamics: biz.CDynamic[];
  party_background: Background;
}

export interface GetMyTopCInfoReq {
  selector: biz.CInfo;
}

export interface GetMyTopCInfoRes {
  result: common.Result;
  cinfo: biz.CInfo;
}

export interface SearchReq {
  type: number;
  query: string;
  page: common.Page;
  selector: biz.CInfo;
}

export interface SearchRes {
  result: common.Result;
  page: common.Page;
  cinfos: biz.CInfo[];
}

export interface HistoryChannel {
  cid: string;
  owner: number;
  url: string;
  nick: string;
  name: string;
  owner_online: boolean;
  plugin_info: biz.PluginInfo;
  onlines: number;
  avatar: string;
  version: number;
  top_onlines: number;
}

export interface GetHistoryChannelReq {
  cids: string[];
  ret_top_onlines: boolean;
}

export interface GetHistoryChannelRes {
  result: common.Result;
  history_channels: HistoryChannel[];
}

export interface OperateReq {
  cid: string;
  disband: number;
}

export interface OperateRes {
  result: common.Result;
}

export interface GetMyJoinedReq {
  selector: biz.CInfo;
}

export interface GetMyJoinedRes {
  result: common.Result;
  cinfos: biz.CInfo[];
  channel_members: GetMyJoinedRes.ChannelMemberAndCID[];
}

export namespace GetMyJoinedRes {
  export interface ChannelMemberAndCID {
    cid: string;
    member: biz.ChannelMember;
    plugin_info: biz.PluginInfo;
  }
}

export interface GetUserJoinedReq {
  selector: biz.CInfo;
  uid: number;
}

export interface GetUserJoinedRes {
  result: common.Result;
  cinfos: biz.CInfo[];
  channel_members: GetUserJoinedRes.ChannelMemberAndCID[];
}

export namespace GetUserJoinedRes {
  export interface ChannelMemberAndCID {
    cid: string;
    member: biz.ChannelMember;
    plugin_info: biz.PluginInfo;
  }
}

export interface JoinApplyReq {
  cid: string;
  nick: string;
  avatar: string;
  reason: string;
}

export interface JoinApplyRes {
  result: common.Result;
  apply_id: string;
  member: biz.ChannelMember;
  current_join_pay_level: number;
  current_join_active_time: number;
}

export interface JoinApproveReq {
  apply_id: string;
  accept: boolean;
  member: biz.ChannelMember;
  reject_forever: boolean;
  reason: string;
}

export interface JoinApproveRes {
  result: common.Result;
  member: biz.ChannelMember;
}

export interface SetRoleReq {
  cid: string;
  uid: number;
  role: number;
}

export interface SetRoleRes {
  result: common.Result;
  cid: string;
  uid: number;
  set_id: string;
}

export interface BatchSetRoleReq {
  set_role_reqs: SetRoleReq[];
}

export interface BatchSetRoleRes {
  result: common.Result;
  set_role_ress: SetRoleRes[];
}

export interface AcceptRoleReq {
  set_id: string;
  accept: boolean;
}

export interface AcceptRoleRes {
  result: common.Result;
  member: biz.ChannelMember;
}

export interface BannedReq {
  cid: string;
  uid: number;
  time: number;
  only_this: boolean;
  banned: boolean;
}

export interface BannedRes {
  result: common.Result;
}

export interface BannedStatus {
  uid: number;
  BanTime: number;
  BanLeftTime: number;
}

export interface GetBannedStatusReq {
  cid: string;
  uids: number[];
}

export interface GetBannedStatusRes {
  result: common.Result;
  list: BannedStatus[];
}

export interface KickOffReq {
  cid: string;
  uid: number;
  reason: string;
  only_this: boolean;
}

export interface KickOffRes {
  result: common.Result;
}

export interface SetRemarkReq {
  cid: string;
  remark: string;
}

export interface SetRemarkRes {
  result: common.Result;
}

export interface GetMemberListReq {
  cid: string;
  ver: number;
  page: common.Page;
  selector: biz.ChannelMember;
  role: number;
}

export interface GetMemberListRes {
  result: common.Result;
  page: common.Page;
  ver: number;
  members: biz.ChannelMember[];
}

export interface GetMembersReq {
  cid: string;
  uids: number[];
}

export interface GetMembersRes {
  result: common.Result;
  members: biz.ChannelMember[];
}

export interface HiidoInfo {
  alg: string;
  sid: string;
  tab_id: string;
}

export interface MatchInfo {
  been_ktv: boolean;
  song_id: number;
  is_ctype: boolean;
  game_ids: string[];
}

export interface BBSUser {
  uid: number;
  post_id: string;
}

export interface EnterUserInfo {
  url: string;
  nick: string;
  icon_frame: number;
  sex: number;
  uid: number;
  radio_uids: number[];
  bbs_user: BBSUser;
}

export interface BanInfo {
  reason: number;
  banned: number;
}

export interface GameContext {
  start: boolean;
  url: string;
  ctx: string;
}

export interface EnterReq {
  cid: string;
  source: number;
  selector: biz.CInfo;
  password: string;
  enter_token: string;
  device_spec: MobileDeviceSpec;
  game_id: string;
  user_info: EnterUserInfo;
  rejoin: boolean;
  hiido_info: HiidoInfo;
  match_info: MatchInfo;
  vip: number;
  card_id: number;
}

export interface EnterRes {
  result: common.Result;
  cinfo: biz.CInfo;
  seat_users: biz.SeatUser[];
  media_token: biz.MediaToken;
  onlines: number;
  transcode_options: TranscodeList;
  transcode_list: TranscodeList;
  plugin_info: biz.PluginInfo;
  background: Background;
  ban_info: BanInfo;
  member: biz.ChannelMember;
  master_uids: number[];
  game_ctx: GameContext;
  disband_try_cid: string;
  tag_id: string;
  old: boolean;
  top_onlines: number;
  upgrade: boolean;
  bg_music_uid: number;
}

export interface MobileDeviceSpec {
  model: string;
  android_version: string;
  cpu: string;
  gpu: string;
  ram_size_mb: number;
}

export interface TranscodeList {
  transcode_info: TranscodeInfo[];
}

export interface TranscodeInfo {
  transcode_mode: TranscodeMode;
  stream_id: string;
  transcode_param: TranscodeParameter;
}

export interface TranscodeParameter {
  fps: number;
  video_bitrate_kbps: number;
  height: number;
  width: number;
}

export interface LeaveReq {
  cid: string;
}

export interface LeaveRes {
  result: common.Result;
  join_count: number;
  show_time: number;
}

export interface GetMediaTokenReq {
  cid: string;
  uid: number;
}

export interface GetMediaTokenRes {
  result: common.Result;
  media_token: biz.MediaToken;
}

export interface GetOnlinesReq {
  cid: string;
  page: common.Page;
}

export interface GetOnlinesRes {
  result: common.Result;
  page: common.Page;
  uids: number[];
  vip_uids: number[];
  uid_wears: WearingInfo[];
}

export interface WearingInfo {
  uid: number;
  medal_ids: number[];
}

export interface SendMsgReq {
  to_uid: number;
  to_cid: string;
  cseq: string;
  sections: biz.IMMsgSection[];
  nick: string;
  avatar: string;
  to_uids: number[];
  source: string;
  robotIns: RobotIns;
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

export interface SendMsgRes {
  result: common.Result;
  msg: biz.IMMsgItem;
}

export interface NoticeItem {
  seqid: number;
  has_read: boolean;
  payload: string;
}

export interface GetUnreadNoticeCountsReq {}

export interface GetUnreadNoticeCountsRes {
  result: common.Result;
  total_unread_counts: number;
  latest_notice: NoticeItem;
}

export interface GetNoticeReq {
  page: common.Page;
}

export interface GetNoticeRes {
  result: common.Result;
  page: common.Page;
  items: NoticeItem[];
}

export interface ClearNoticeReq {
  max_seqid: number;
  min_seqid: number;
}

export interface ClearNoticeRes {
  result: common.Result;
}

export interface AckNoticeReq {
  seqids: number[];
}

export interface AckNoticeRes {
  result: common.Result;
}

export interface SubscribeReq {
  cid: string;
  sub: boolean;
}

export interface SubscribeRes {
  result: common.Result;
}

export interface DoNotDisturbReq {
  cid: string;
  notify: boolean;
}

export interface DoNotDisturbRes {
  result: common.Result;
}

export interface SitdownReq {
  cid: string;
  seat: number;
}

export interface SitdownRes {
  result: common.Result;
  seat: number;
}

export interface StandupReq {
  cid: string;
  uid: number;
}

export interface StandupRes {
  result: common.Result;
}

export interface SitdownPlzReq {
  cid: string;
  uid: number;
  seat: number;
}

export interface SitdownPlzRes {
  result: common.Result;
}

export interface AcceptSitdownReq {
  cid: string;
  plz_id: string;
  accept: boolean;
}

export interface AcceptSitdownRes {
  result: common.Result;
  seat: number;
}

export interface LockSeatReq {
  cid: string;
  seat: number;
  lock: boolean;
}

export interface LockSeatRes {
  result: common.Result;
}

export interface ChangeSeatReq {
  cid: string;
  seat: number;
}

export interface ChangeSeatRes {
  result: common.Result;
}

export interface SetMicReq {
  cid: string;
  mic_ban: number;
  mic_close: number;
  uid: number;
  seat: number;
}

export interface SetMicRes {
  result: common.Result;
  cid: string;
  mic_ban: number;
  mic_close: number;
  uid: number;
  seat: number;
}

export interface Background {
  id: number;
  bg_url: string;
  title_color: string;
  preview_url: string;
  expire: number;
  type: number;
}

export interface GetBackgroundListReq {
  cid: string;
}

export interface GetBackgroundListRes {
  result: common.Result;
  background: Background[];
}

export interface SetBackgroundReq {
  cid: string;
  id: number;
}

export interface SetBackgroundRes {
  result: common.Result;
  background: Background;
}

export interface GetPartyBackgroundListReq {
  cid: string;
}

export interface GetPartyBackgroundListRes {
  result: common.Result;
  background: Background[];
}

export interface SetPartyBackgroundReq {
  cid: string;
  id: number;
}

export interface SetPartyBackgroundRes {
  result: common.Result;
  background: Background;
}

export interface GetFastReplyReq {
  cid: string;
  gid: string;
}

export interface GetFastReplyRes {
  result: common.Result;
  replies: string[];
}

export interface LoadPluginReq {
  cid: string;
  plugin_info: biz.PluginInfo;
}

export interface LoadPluginRes {
  result: common.Result;
  plugin_info: biz.PluginInfo;
}

export interface ProbeReq {
  cid: string;
  data: string;
}

export interface ProbeRes {
  result: common.Result;
}

export interface GetEnterTokenReq {
  cid: string;
}

export interface GetEnterTokenRes {
  result: common.Result;
  enter_token: string;
}

export interface GetCurrentChannelsReq {
  uids: number[];
  only_public: boolean;
  only_unlocked: boolean;
}

export interface GetCurrentChannelsRes {
  result: common.Result;
  rids: string[];
  isroom: boolean[];
}

export interface GetConfigReq {}

export interface GetConfigRes {
  result: common.Result;
  max_channel: number;
  send_limit: number;
  guest_limit: number;
  online_limit: number;
  role_limit: {
    [key: string]: number;
  };
  voice_chat: boolean;
  room_bg_colors: string[];
  gray_channel: boolean;
  cid: string;
  roomid: string;
  show_album: boolean;
  show_camera: boolean;
  change_voice_room: boolean;
  voice_send_limit: number;
  voice_guest_limit: number;
  result_condition_min: number;
  owner_onmicro_first: boolean;
  change_base: boolean;
  show_basic_grade_medal: boolean;
  show_basic_activity_medal: boolean;
  can_guest_input: boolean;
  forbid_base_guest_gif: boolean;
  forbid_base_guest_emoji: boolean;
  forbid_base_guest_image: boolean;
  forbid_base_guest_pkgame: boolean;
  forbid_base_guest_join_voice: boolean;
  forbid_voice_guest_emoji: boolean;
  ban_time_selects: number[];
  upgrade: boolean;
  base_msg_max_length: number;
  chat_msg_max_length: number;
}

export interface OpenVoiceChatReq {
  cid: string;
}

export interface OpenVoiceChatRes {
  result: common.Result;
}

export interface ReadyReq {
  cid: string;
  ready: boolean;
}

export interface ReadyRes {
  result: common.Result;
}

export interface StartGameReq {
  cid: string;
}

export interface StartGameRes {
  result: common.Result;
}

export interface ChannelStatus {
  cid: string;
  onlines: number;
  current_plugin_info: biz.PluginInfo;
  seat_users: biz.SeatUser[];
  owner: number;
  top_onlines: number;
}

export interface GetStatusReq {
  cids: string[];
  ret_owner: boolean;
  ret_top_onlines: boolean;
}

export interface GetStatusRes {
  result: common.Result;
  status: ChannelStatus[];
}

export interface ReportBlockChannelReq {
  cid: string;
}

export interface ReportBlockChannelRes {
  result: common.Result;
}

export interface MsgUnread {
  cid: string;
  begin_time: number;
  end_time: number;
  count: number;
  latest_timestamp: number;
}

export interface GetMsgUnreadReq {
  unread: MsgUnread[];
}

export interface GetMsgUnreadRes {
  result: common.Result;
  unread: MsgUnread[];
}

export interface AddUserBackgroundReq {
  uids: number[];
  id: number;
  expire: number;
}

export interface AddUserBackgroundRes {
  result: common.Result;
}

export interface OpChannelCard {
  card_id: number;
  name: string;
  pos: number;
  color: string;
  on_hago_index: boolean;
  cids: string[];
  support_custom: boolean;
  icon_url: string;
  tab_id: number;
  source: number;
  style: number;
  bottom_message: number;
  is_fill_by_server: boolean;
  display_user: number;
  module_attribute: number;
  search_word: string[];
  description: string;
  is_special: boolean;
  sp_module_type: number;
  fixed_cids: {
    [key: string]: FixedCids;
  };
  lang_name: {
    [key: string]: string;
  };
  enter_infos: {
    [key: string]: EnterInfo;
  };
  is_canary: boolean;
  os_type: number;
  version: number;
  ab_test_id: string;
  min_visible_count: number;
  max_visible_count: number;
  visible_user_type: number;
  cover_avatar: string[];
  cover: string;
  icon_msg: {
    [key: string]: string;
  };
  main_title: {
    [key: string]: string;
  };
  sub_title: {
    [key: string]: string;
  };
  filter_cover_channel: boolean;
  special_key: string;
  ext: string;
}

export interface SpChannelCard {
  card_id: number;
  tab_id: number;
  name: string;
  pos: number;
  sp_module_type: number;
  is_special: boolean;
  cover_avatar: string[];
  cover: string;
  icon_url: string;
  icon_msg: {
    [key: string]: string;
  };
  main_title: {
    [key: string]: string;
  };
  sub_title: {
    [key: string]: string;
  };
  special_key: string;
  ext: string;
}

export interface SupportLang {
  support_lang: string[];
}

export interface Tab {
  tab_id: number;
  lang: {
    [key: string]: SupportLang;
  };
  name: {
    [key: string]: string;
  };
  tab_icon: string;
  tab_cover: string;
  is_canary: boolean;
  canary_uid: number;
  canary_num: number;
  is_default: boolean;
  source: number;
  pos: number;
  os_type: number;
  version: number;
  ab_test_id: string;
}

export interface TabCard {
  tab_id: number;
  cards: OpChannelCard[];
}

export interface GetAllOpChannelsReq {}

export interface GetAllOpChannelsRes {
  result: common.Result;
  cards: OpChannelCard[];
}

export interface GetCustomOpCardsReq {}

export interface GetCustomOpCardsRes {
  result: common.Result;
  cards: OpChannelCard[];
}

export interface GetCategoryTabsReq {}

export interface GetCategoryTabsRes {
  result: common.Result;
  tabs: Tab[];
}

export interface JoinCustomOpCardReq {
  card_id: number;
  cid: string;
}

export interface JoinCustomOpCardRes {
  result: common.Result;
}

export interface GetOpCardChannelsReq {
  card_id: number;
}

export interface GetOpCardChannelsRes {
  result: common.Result;
  cids: string[];
}

export interface GetCategoryTabCardsReq {
  tab_ids: number[];
}

export interface GetCategoryTabCardsRes {
  result: common.Result;
  tabs: TabCard[];
}

export interface CityLabel {
  cid: string;
  city_local: string;
  label: number;
  pos: number;
  picture: string;
}

export interface GetCityLabelReq {
  version: number;
}

export interface GetCityLabelRes {
  result: common.Result;
  version: number;
  list: CityLabel[];
}

export interface CityAlias {
  key: string;
  country_zh: string;
  city_zh: string;
}

export interface GetCityAliasReq {
  version: number;
}

export interface GetCityAliasRes {
  result: common.Result;
  version: number;
  list: CityAlias[];
}

export interface GetCityPrivilegeReq {}

export interface GetCityPrivilegeRes {
  result: common.Result;
}

export interface SwitchLbsReq {
  cid: string;
  status: boolean;
  longitude: number;
  latitude: number;
}

export interface SwitchLbsRes {
  result: common.Result;
}

export interface ChannelPlugin {
  cid: string;
  plugin_info: biz.PluginInfo;
}

export interface GetChannelPluginsReq {
  cids: string[];
}

export interface GetChannelPluginsRes {
  result: common.Result;
  plugins: ChannelPlugin[];
}

export interface GetCityLocalLimitReq {
  country: string;
  city: string;
  longitude: number;
  latitude: number;
}

export interface GetCityLocalLimitRes {
  result: common.Result;
}

export interface GetEndPageReq {
  cid: string;
}

export interface GetEndPageRes {
  result: common.Result;
  show_time: number;
  enter_count: number;
  enter_count_delta: number;
  fan_count: number;
  fan_count_delta: number;
  recommend: boolean;
  exposure_delta: number;
  audio_show_time: number;
  audio_enter_count: number;
  audio_fan_count: number;
  video_show_time: number;
  video_enter_count: number;
  video_fan_count: number;
}

export interface BatchGetCinfoReq {
  cids: string[];
  selector: biz.CInfo;
}

export interface BatchGetCinfoRes {
  result: common.Result;
  cinfo: biz.CInfo[];
}

export interface PartyInfoChannel {
  cinfo: biz.CInfo;
  plugin_info: biz.PluginInfo;
  onlines: number;
  show_uids: number[];
}

export interface GetPartyInfoReq {
  cid: string;
}

export interface GetPartyInfoRes {
  result: common.Result;
  channels: PartyInfoChannel[];
  party_background: Background;
  family_show_uids: number[];
}

export interface GetPartyOnlinesReq {
  cid: string;
  page: common.Page;
}

export interface GetPartyOnlinesRes {
  result: common.Result;
  page: common.Page;
  uids: number[];
}

export interface MoveMemberReq {
  cids: string[];
  pid: string;
}

export interface MoveMemberRes {
  result: common.Result;
}

export interface GetMoveMemberChannelReq {
  pid: string;
}

export interface GetMoveMemberChannelRes {
  result: common.Result;
  cinfos: biz.CInfo[];
  member_count: number[];
  silent_upgrade: boolean;
}

export interface SetFakeOnlineNumReq {
  num: number;
  cid: string;
  endTimestamp: number;
}

export interface SetFakeOnlineNumRes {
  result: common.Result;
}

export interface GetFakeOnlineNumReq {
  cid: string;
}

export interface GetFakeOnlineNumRes {
  result: common.Result;
  num: number;
}

export interface DeleteCoverReq {
  uid: number;
  cid: string;
  cover: string;
  isAvatar: boolean;
}

export interface DeleteCoverRes {
  result: common.Result;
}

export interface GetMemberWelcomeTextReq {
  cid: string;
}

export interface GetMemberWelcomeTextRes {
  result: common.Result;
  texts: string[];
}

export interface GetNewMemberImagesReq {
  cid: string;
}

export interface GetNewMemberImagesRes {
  result: common.Result;
  urls: string[];
}

export interface GetBulletinPushInfoReq {
  cid: string;
}

export interface GetBulletinPushInfoRes {
  result: common.Result;
  left_push_count: number;
  show: boolean;
}

export interface GetPluginStatReq {}

export interface GetPluginStatRes {
  result: common.Result;
  singing: number;
  gaming: number;
  dating: number;
}

export interface GetMyChannelStatusReq {
  uids: number[];
}

export interface GetMyChannelStatusRes {
  result: common.Result;
  status: ChannelStatus[];
}

export interface PlayBgMusicReq {
  cid: string;
  play: boolean;
  manual: boolean;
}

export interface PlayBgMusicRes {
  result: common.Result;
}

export interface GetPlayBgMusicConfigReq {
  cid: string;
  owner: number;
}

export interface GetPlayBgMusicConfigRes {
  result: common.Result;
  has_setting: boolean;
}

export interface GetMyFamilyReq {}

export interface GetMyFamilyRes {
  result: common.Result;
  cinfo: biz.CInfo;
}

export interface BatchGetMyFamilyReq {
  uids: number[];
}

export interface BatchGetMyFamilyRes {
  result: common.Result;
  cinfos: biz.CInfo[];
}

export interface GetCreateFamilyPermitReq {}

export interface GetCreateFamilyPermitRes {
  result: common.Result;
}

export interface SetCreateFamilyPermitReq {
  uid: number;
  role_limit: biz.RoleLimit;
}

export interface SetCreateFamilyPermitRes {
  result: common.Result;
}

export interface GetFamilyConfigReq {}

export interface GetFamilyConfigRes {
  result: common.Result;
  show_entry: boolean;
}

export interface GetFamilyRoomListReq {
  cid: string;
}

export interface GetFamilyRoomListRes {
  result: common.Result;
  channels: PartyInfoChannel[];
}

export interface ServerLeaveReq {
  uid: number;
  cid: string;
  leaveReason: number;
}

export interface ServerLeaveRes {
  result: common.Result;
}

export interface FixZombieReq {
  cids: string[];
  valid_begin_date: string;
  del: boolean;
}

export interface FixZombieRes {
  result: common.Result;
  zombies: FixZombieRes.Zombie[];
}

export namespace FixZombieRes {
  export interface Zombie {
    cid: string;
    uid: number[];
    timestamp: number[];
  }
}

export interface ChangeChannelOwnerReq {
  cid: string;
  old_owner: number;
  new_owner: number;
}

export interface ChangeChannelOwnerRes {
  result: common.Result;
}

export interface GetJoinApplyStatusReq {}

export interface GetJoinApplyStatusRes {
  result: common.Result;
  cinfo: biz.CInfo;
  apply_cids: string[];
}

export interface GetFamilyInfoAndMemberCountReq {
  cid: string;
}

export interface GetFamilyInfoAndMemberCountRes {
  result: common.Result;
  cinfo: biz.CInfo;
  member_count: number;
}

export interface Notify {
  header: common.Header;
  uri: number;
  uris: number[];
  cid: string;
  onlines: NotifyOnlines;
  banned: NotifyBanned;
  receive_msg: NotifyReceiveMsg;
  kick_off: NotifyKickOff;
  group_banned: NotifyChannelBanned;
  seat: NotifySeat;
  load_plugin: NotifyLoadPlugin;
  probe: NotifyProbe;
  change_join_mode: NotifyChangeJoinMode;
  enter: NotifyEnter;
  leave: NotifyLeave;
  sit_down: NotifySitDown;
  stand_up: NotifyStandUp;
  sitdown_plz: NotifySitdownPlz;
  sit_down_plz_accept: NotifySitDownPlzAccept;
  stand_up_plz: NotifyStandUpPlz;
  lock_seat: NotifyLockSeat;
  set_mic: NotifySetMic;
  change_seat: NotifyChangeSeat;
  set_background: NotifySetBackground;
  new_background: NotifyNewBackground;
  unlock_seat: NotifyUnlockSeat;
  open_voice_chat: NotifyOpenVoiceChat;
  channel_lock: NotifyChannelLock;
  ready: NotifyReady;
  start_game: NotifyStartGame;
  game_finish: NotifyGameFinish;
  execute_enter: NotifyExecuteEnter;
  enter_radio: NotifyRadioStation;
  video_status: NotifyVideoStatus;
  ktv_status: NotifyKTVStatus;
  channel_upgrade: NotifyChannelUpgrade;
  switch_lbs: NotifySwitchLbs;
  set_party_background: NotifySetPartyBackground;
  bg_music: NotifyBgMusic;
  update_music_setting: NotifyUpdateBgMusicSetting;
  global_leave: NotifyGlobalLeave;
}

export interface NotifyGlobalLeave {
  uid: number;
  plugin_info: biz.PluginInfo;
}

export interface NotifyBgMusic {
  oper_uid: number;
  play: boolean;
  manual: boolean;
}

export interface NotifyUpdateBgMusicSetting {
  enable_master: boolean;
}

export interface NotifySwitchLbs {
  oper: number;
  status: boolean;
  longitude: number;
  latitude: number;
}

export interface NotifyChannelUpgrade {
  version: number;
  top_cid: string;
}

export interface NotifyRadioStation {
  from_uid: number;
}

export interface NotifyOnlines {
  onlines: number;
}

export interface NotifyBanned {
  oper: number;
  banned: boolean;
  time: number;
}

export interface NotifyReceiveMsg {
  all: boolean;
  msgid: string;
  msg: biz.IMMsgItem;
}

export interface NotifyKickOff {
  frozen_time: number;
  op_nick: string;
  nick: string;
  op_uid: number;
  uid: number;
}

export interface NotifyChannelBanned {
  reason: number;
}

export interface NotifySeat {
  seat_users: biz.SeatUser[];
}

export interface NotifyLoadPlugin {
  info: biz.PluginInfo;
}

export interface NotifySitdownPlz {
  plz_id: string;
}

export interface NotifyProbe {
  data: string;
}

export interface NotifyChangeJoinMode {
  mode: number;
}

export interface NotifyEnter {
  uid: number;
  seat: number;
  user_info: EnterUserInfo;
}

export interface NotifyLeave {
  uid: number;
}

export interface NotifySitDown {
  uid: number;
  seat: number;
}

export interface NotifyStandUp {
  uid: number;
  seat: number;
}

export interface NotifySitDownPlzAccept {
  uid: number;
  accept: boolean;
  seat: number;
}

export interface NotifyStandUpPlz {}

export interface NotifyLockSeat {
  seat: number;
  uid: number;
}

export interface NotifyUnlockSeat {
  seat: number;
}

export interface NotifySetMic {
  seat: number;
  uid: number;
  mic_ban: number;
  mic_close: number;
}

export interface NotifyChangeSeat {
  uid: number;
  old_seat: number;
  new_seat: number;
}

export interface NotifySetBackground {
  background: Background;
}

export interface NotifyNewBackground {
  background: Background;
}

export interface NotifySetPartyBackground {
  background: Background;
}

export interface NotifyOpenVoiceChat {
  uid: number;
}

export interface NotifyChannelLock {
  lock: boolean;
  pwd_token: string;
}

export interface NotifyReady {
  seat: number;
  uid: number;
  ready: boolean;
}

export interface NotifyStartGame {
  plugin_info: biz.PluginInfo;
  url: string;
  join_game_ctx: string;
  uid: number;
}

export interface NotifyGameFinish {}

export interface NotifyExecuteEnter {}

export interface GetFixedCidsReq {
  tab_id: number;
}

export interface FixedCids {
  cids: string[];
}

export interface EnterInfo {
  open_game_type: OpenGameType;
  open_game_id: string;
}

export interface PosLabel {
  pos_label: {
    [key: string]: number;
  };
}

export interface GetFixedCidsRes {
  fixed_cids: {
    [key: string]: FixedCids;
  };
  cid_label: {
    [key: string]: PosLabel;
  };
}

export interface FixedPosCh {
  cid: string;
  posTime: PosTime;
  tabId: number;
  label: number;
}

export interface AddFixedPosChReq {
  fixedPosChs: FixedPosCh[];
}

export interface PosTime {
  pos: number;
  startTime: number;
  endTime: number;
}

export interface AddFixedPosChRes {
  result: common.Result;
}

export interface GetVideoShowConfigReq {}

export interface GetVideoShowConfigRes {
  result: common.Result;
  video_sing_button: boolean;
  video_permission: boolean;
  video_sing_mode: boolean;
  lyric_panel_close_button: boolean;
  lyric_panel_min_button: boolean;
  enable_ktv: boolean;
}

export interface ReportVideoStatusReq {
  cid: string;
  is_open: boolean;
  reason: Reason;
  transcode_list: TranscodeList;
}

export interface ReportVideoStatusRes {
  result: common.Result;
}

export interface ReportKTVStatusReq {
  cid: string;
  is_open: boolean;
}

export interface ReportKTVStatusRes {
  result: common.Result;
}

export interface NotifyVideoStatus {
  is_open: boolean;
  transcode_list: TranscodeList;
}

export interface NotifyKTVStatus {
  is_open: boolean;
}

export interface RadioStatus {
  is_video_open: boolean;
  is_ktv_open: boolean;
}
