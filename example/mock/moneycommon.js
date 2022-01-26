var EPrizeType = {
  EPrizeNone: "0",
  EPrizeHeadIcon: "1",
  EPrizeMedal: "2",
  EPrizeInShow: "3",
  EPrizePrivilegePack: "4",
  EPrizeGift: "5",
  EPrizeLuckyCard: "6",
  EPrizeDiamond: "7",
  EPrizeHagoGold: "8",
  EPrizeRoomBgPic: "9",
  EPrizeBigEmoji: "10",
  EPrizeCoupon: "11",
  EPrizeChatBubble: "12",
  EPrizeMask: "13",
  EPrizeHammer: "14"
};
module.exports.EPrizeType = EPrizeType;

var PrizeInfo = {
  object_id: "string",
  prize_type: EPrizeType,
  prize_id: "number",
  prize_diamonds: "number",
  prize_cnt: "number",
  prize_name: "string",
  icon_url: "string",
  ttl: "number",
  ttl_amount: "number",
  create_time: "number",
  extend: "string",
  map_extend: {}
};
module.exports.PrizeInfo = PrizeInfo;

var User = {
  uid: "number",
  nick: "string",
  avatar: "string"
};
module.exports.User = User;

var RankPrizeInfo = {
  from: "number",
  to: "number",
  prizes: PrizeInfo
};
module.exports.RankPrizeInfo = RankPrizeInfo;
