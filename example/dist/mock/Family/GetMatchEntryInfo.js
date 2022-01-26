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
    current_phase: function() {
      var enums = {
        PHASE_NONE: 0,
        PHASE_NOT_STARTED: 10,
        PHASE_NOT_REST: 11,
        PHASE_QUALIFY: 20,
        PHASE_KNOCKOUT1: 30,
        PHASE_KNOCKOUT2: 31,
        PHASE_SCORE: 40,
        PHASE_SEMIFINALS: 50,
        PHASE_FINALS: 60,
        PHASE_FINISHED: 1000
      };
      return enums["PHASE_NONE"];
    },
    style: "@integer",
    channel_owner_family: {
      fid: "@string",
      name: "@string",
      avatar: "@string",
      member_count: "@integer",
      member_limit: "@integer",
      owner: "@integer",
      cute_id: "@string"
    },
    channel_owner_family_score: "@integer",
    channel_owner_family_rank: "@integer",
    channel_owner_rival: {
      fid: "@string",
      name: "@string",
      avatar: "@string",
      member_count: "@integer",
      member_limit: "@integer",
      owner: "@integer",
      cute_id: "@string"
    },
    channel_owner_rival_score: "@integer",
    channel_owner_rival_rank: "@integer",
    has_join_family: "@boolean"
  };
};
