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
  "sequence": "@integer",
  "last_id": "@integer"
}
*/
module.exports = function(req) {
  return {
    result: { errcode: "@integer", errmsg: "@string", magic: "@integer" },
    msgs: {
      id: "@integer",
      news_type: function() {
        var enums = {
          NEWS_TYPE_SEND_GIFT: 0,
          NEWS_TYPE_RECEIVE_GIFT: 1,
          NEWS_TYPE_JOIN: 2,
          NEWS_TYPE_UPGRADE: 3,
          NEWS_TYPE_IDENTITY: 4
        };
        return enums["NEWS_TYPE_SEND_GIFT"];
      },
      family_info: {
        family_info: {
          info: {
            fid: "@string",
            name: "@string",
            avatar: "@string",
            member_count: "@integer",
            member_limit: "@integer",
            owner: "@integer",
            cute_id: "@string"
          },
          rank: "@integer",
          score: "@integer",
          lv: "@integer"
        },
        top_members: { uid: "@integer", nick: "@string", avatar: "@string" }
      },
      user: { uid: "@integer", nick: "@string", avatar: "@string" },
      gift_id: "@integer",
      gift_amount: "@integer",
      score: "@integer",
      upgraded_lv: "@integer",
      identity: "@integer",
      update_time: "@integer"
    }
  };
};
