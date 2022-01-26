import { config } from '../../cli/config';
import * as path from 'path';
import { jsonReplacer, funcReplacer } from '../../util/function'
export interface RpcMethodField {
  type: 'rpc';
  name: string;
  argTypeName: Type;
  returnTypeName: Type;
}

export interface ServiceTree {
  name: string;
  methods: RpcMethodField[];
}

export const generateServiceToApi = (result: any, basename: string) => {
  // 一个 seivce 就是一个服务，会产生一个服务 api
  // 为什么把 method 单独 export 出来，因为一个 service 可能就用到其中一个或几个接口
  const packageName = result.package.identifier.name;
  const serviceFile = `
  import * as ${basename} from '../interface/${basename}'
  import axios from 'axios';

  function baseRequest(packageName: string, serviceName: string) {
    return function methodReq<T>(method: string, req: any): Promise<T> {
      return axios.post('/api', {
        packageName: packageName,
        serviceName: serviceName,
        method: method,
        data: req,
      });
    };
  }

  ${result.services.map((item: any) => {
    const serviceName = item.name;
    const reqString = `const request${serviceName} = baseRequest('${packageName}', '${serviceName}')`;
    return (
      reqString +
      '\n\n' +
      item.methods
        .filter((child: any) => child.type === 'rpc' || child.type === 'comment')
        .map((child: RpcField) => {
          const name = child.name;
          // @ts-ignore
          const req = child.argTypeName.identifier.name;
          // @ts-ignore
          const res = child.returnTypeName.identifier.name;
          return `export const ${name} = (req: ${basename}.${req}) => request${serviceName}<${basename}.${res}>('${name}', req);`;
        })
        .join('\n\n')
    );
  })}
  `;
  return serviceFile;
};

export const generateServiceToMock = (result: any, basename: string, callback: Function) => {
  const mockOriginData = require(path.resolve(config.mockOriginDataRoot + '/' + basename + '.js'));
  result.services.map((item: any) => {
    const serviceName = item.name;
    item.methods
      .filter((child: any) => child.type === 'rpc' || child.type === 'comment')
      .forEach((child: RpcField) => {
        const name = child.name;
        // @ts-ignore
        const req = child.argTypeName.identifier.name;
        // @ts-ignore
        const res = child.returnTypeName.identifier.name;
        const mock = `
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
${JSON.stringify(mockOriginData[req], null, 2)}
*/
          module.exports = function(req) {
            return ${JSON.stringify(mockOriginData[res], jsonReplacer).replace(/"\{func_(\d+)\}"/g, funcReplacer)}
          }`;
        const mockDataRoute = path.resolve(config.mockDataRoot + '/' + serviceName + '/' + name + '.js')
        callback(mockDataRoute, mock);
      })
  });
};
