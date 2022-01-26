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
    begin_ts: "@integer",
    remain_sec: "@integer",
    match_pairs: {
      left_family: {
        fid: "@string",
        name: "@string",
        avatar: "@string",
        member_count: "@integer",
        member_limit: "@integer",
        owner: "@integer",
        cute_id: "@string"
      },
      left_score: "@integer",
      right_family: {
        fid: "@string",
        name: "@string",
        avatar: "@string",
        member_count: "@integer",
        member_limit: "@integer",
        owner: "@integer",
        cute_id: "@string"
      },
      right_score: "@integer"
    },
    cur_tops: {
      user: { uid: "@integer", nick: "@string", avatar: "@string" },
      family: {
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
      sub_value: "@integer"
    }
  };
};
