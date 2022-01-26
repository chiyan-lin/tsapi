"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateServiceToMock = exports.generateServiceToApi = void 0;
var config_1 = require("../../cli/config");
var path = __importStar(require("path"));
var function_1 = require("../../util/function");
exports.generateServiceToApi = function (result, basename) {
    // 一个 seivce 就是一个服务，会产生一个服务 api
    // 为什么把 method 单独 export 出来，因为一个 service 可能就用到其中一个或几个接口
    var packageName = result.package.identifier.name;
    var serviceFile = "\n  import * as " + basename + " from '../interface/" + basename + "'\n  import axios from 'axios';\n\n  function baseRequest(packageName: string, serviceName: string) {\n    return function methodReq<T>(method: string, req: any): Promise<T> {\n      return axios.post('/api', {\n        packageName: packageName,\n        serviceName: serviceName,\n        method: method,\n        data: req,\n      });\n    };\n  }\n\n  " + result.services.map(function (item) {
        var serviceName = item.name;
        var reqString = "const request" + serviceName + " = baseRequest('" + packageName + "', '" + serviceName + "')";
        return (reqString +
            '\n\n' +
            item.methods
                .filter(function (child) { return child.type === 'rpc' || child.type === 'comment'; })
                .map(function (child) {
                var name = child.name;
                // @ts-ignore
                var req = child.argTypeName.identifier.name;
                // @ts-ignore
                var res = child.returnTypeName.identifier.name;
                return "export const " + name + " = (req: " + basename + "." + req + ") => request" + serviceName + "<" + basename + "." + res + ">('" + name + "', req);";
            })
                .join('\n\n'));
    }) + "\n  ";
    return serviceFile;
};
exports.generateServiceToMock = function (result, basename, callback) {
    var mockOriginData = require(path.resolve(config_1.config.mockOriginDataRoot + '/' + basename + '.js'));
    result.services.map(function (item) {
        var serviceName = item.name;
        item.methods
            .filter(function (child) { return child.type === 'rpc' || child.type === 'comment'; })
            .forEach(function (child) {
            var name = child.name;
            // @ts-ignore
            var req = child.argTypeName.identifier.name;
            // @ts-ignore
            var res = child.returnTypeName.identifier.name;
            var mock = "\n          /*\nhttps://github.com/nuysoft/Mock/wiki/Syntax-Specification\nmock \u7C7B\u578B\u8868\n\u57FA\u7840\u7C7B\u578B:    boolean, natural, integer, float, character, string, range, date, time, datetime, now\n\u56FE\u7247\u7C7B\u578B:    image, dataImage\n\u6587\u672C\u7C7B\u578B:    paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle, color\n\u540D\u5B57\u7C7B\u578B:    first, last, name, cfirst, clast, cname\n\u7F51\u7EDC\u7C7B\u578B:    url, domain, email, ip, tld\n\u5730\u5740\u7C7B\u578B:    area, region\n\nexample: \u751F\u6210 1-10 \u6761\u968F\u673A\u7684\u6392\u540D\u6570\u636E\n{\n  'list|1-10': [{\n    'avatar': '@image', // \u751F\u6210\u968F\u673A\u56FE\u7247\n    'rank|+1': 1,       // \u81EA\u589E\u6570\uFF0C\u8D77\u59CB\u503C\u4E3A 1\uFF0C\u6BCF\u6B21\u589E 1\n    'score': '@integer' // \u751F\u6210\u968F\u673A\u6570\u5B57\n  }]\n}\n\nreq \u6570\u636E\u7ED3\u6784:\n" + JSON.stringify(mockOriginData[req], null, 2) + "\n*/\n          module.exports = function(req) {\n            return " + JSON.stringify(mockOriginData[res], function_1.jsonReplacer).replace(/"\{func_(\d+)\}"/g, function_1.funcReplacer) + "\n          }";
            var mockDataRoute = path.resolve(config_1.config.mockDataRoot + '/' + serviceName + '/' + name + '.js');
            callback(mockDataRoute, mock);
        });
    });
};
//# sourceMappingURL=service.js.map