/*
https://github.com/nuysoft/Mock/wiki/Syntax-Specification
mock 类型表
基础类型:    boolean, natural, integer, float, character, string, range, date, time, datetime, now
图片类型:    image, dataImage
文本类型:    paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle, color
名字类型:    first, last, name, cfirst, clast, cname
网络类型:    url, domain, email, ip, tld
地址类型:    area, region

example: 生成 1-10 条随机的排名数据
{
  'list|1-10': [{
    'avatar': '@image', // 生成随机图片
    'rank|+1': 1,       // 自增数，起始值为 1，每次增 1
    'score': '@integer' // 生成随机数字
  }]
}

req 数据结构:
{
  "sequence": "@integer"
}
*/
module.exports = function(req) {
  return {
    result: { errcode: "@integer", errmsg: "@string", magic: "@integer" },
    sequence: "@integer",
    logs: {
      user: { uid: "@integer", nick: "@string", avatar: "@string" },
      prize: {
        object_id: "@string",
        prize_type: function() {
          var enums = {
            EPrizeNone: 0,
            EPrizeHeadIcon: 1,
            EPrizeMedal: 2,
            EPrizeInShow: 3,
            EPrizePrivilegePack: 4,
            EPrizeGift: 5,
            EPrizeLuckyCard: 6,
            EPrizeDiamond: 7,
            EPrizeHagoGold: 8,
            EPrizeRoomBgPic: 9,
            EPrizeBigEmoji: 10,
            EPrizeCoupon: 11,
            EPrizeChatBubble: 12,
            EPrizeMask: 13,
            EPrizeHammer: 14
          };
          return enums["EPrizeNone"];
        },
        prize_id: "@integer",
        prize_diamonds: "@integer",
        prize_cnt: "@integer",
        prize_name: "@string",
        icon_url: "@string",
        ttl: "@integer",
        ttl_amount: "@integer",
        create_time: "@integer",
        extend: "@string",
        map_extend: {}
      }
    }
  };
};
