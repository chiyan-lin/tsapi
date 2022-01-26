export enum InfoStatus {
  INFO_STATUS_NONE = 0,
  INFO_STATUS_NORMAL = 1,
  INFO_STATUS_OFFLINE = 2,
  INFO_STATUS_UNVERIFY = 11,
  INFO_STATUS_VERIFY_PASSED = 12,
  INFO_STATUS_VERIFY_FAILED = 13,
  INFO_STATUS_DELETED = 100,
}

export enum TagType {
  TAG_TYPE_NONE = 0,
  TAG_TYPE_OFFICIAL = 1,
  TAG_TYPE_UGC = 2,
  TAG_TYPE_KTV = 3,
  TAG_TYPE_NEWCOMER = 4,
}

export interface Tag {
  tid: string;
  topic_id: string;
  text: string;
  image: string;
  desc: string;
  status: number;
  default: boolean;
  operationalTag: boolean;
  aid: string;
  icon: string;
  act_img: string;
  jump_url: string;
  use_count: number;
  type: number;
  pass: number;
}

export interface Topic {
  tid: string;
  text: string;
  image: string;
  status: number;
}
