# tsapi

Generate TypeScript enum, interface, service api with proto buffer.

Base on peggy, can parse other language like java.

## Usage

please clone this project and init in your computer.

考虑到使用方式大有区别

比较常规的使用的方式是从代码库拉代码

这样有依赖关系也可以用同样的方式处理

这样就需要各个使用者根据具体使用的代码管理工具进行适配

所以这个工具相当于是一个基础工具，使用方直接拉代码自行修改即可。

流程：
根据项目代码管理方式，将 pb 或者是 其他协议 的接口描述及相关依赖下载到本地
指定输入目录和输出目录
配置输出配置，输出 interface，service api，mock data 

```bash

npm install -g tsapi
tsapi example/proto -o example/typescript/global
# or 
tsapi example/proto -o example/typescript/module -m global
```
See `example/`

```console
$ tsapi -h
Usage: tsapi [options] <inputPath>

protobuf-parser
Generate TypeScript interface with Protobuf.

Options:
  -V, --version          output the version number
  -o, --output <output>  output path (default: ".")
  -m, --mode <mode>      "global": Global Definition, "module": Module Definition (default: "global")
  -h, --help             output usage information

```

## Example

```proto
syntax = "proto3";
package net.name.money.api.family;


import "common.proto";
import "moneycommon.proto";

service Family {
  rpc GetFamilyLvConfs(GetFamilyLvConfsReq) returns (GetFamilyLvConfsRes) {}
}

message GetFamilyLvConfsReq {
  int64 sequence = 1;  // 请求序列号，可填纳秒级时间戳
}

message GetFamilyLvConfsRes {
  common.Result result = 1; //结果
  repeated FamilyLvConf confs = 2; //配置列表
}

```


Will be transformed to

```typescript
interface Family {
  rpcMethod: {
    request: Request;
    response: Response;
  };
}

declare enum GetFamilyLvConfsReq {
  sequence = 0,
}

interface GetFamilyLvConfsRes {
  result: common.Result;
  confs: FamilyLvConf[];
}
```
Or TypeScript module
```typescript
export  enum GetFamilyLvConfsReq {
  sequence = 0,
}

export interface GetFamilyLvConfsRes {
  result: common.Result;
  confs: FamilyLvConf[];
}
```

### How to use interfaces from service?

Create specified types using TypeScript as follows.

```typescript
import * as moneyapifamily from "../interface/moneyapifamily";
import axios from "axios";

function baseRequest(packageName: string, serviceName: string) {
  return function methodReq<T>(method: string, req: any): Promise<T> {
    return axios.post("/api", {
      packageName: packageName,
      serviceName: serviceName,
      method: method,
      data: req
    });
  };
}

const requestFamily = baseRequest("net.test.money.api.family", "Family");

export const GetFamilyLvConfs = (req: moneyapifamily.GetFamilyLvConfsReq) =>
  requestFamily<moneyapifamily.GetFamilyLcConfsRes>("GetFamilyLvConfs", req);

```

## Roadmap

- [x] Basic Support
- [x] ExtendedType Field
- [x] Cli
- [x] Oneof Field
- [x] Map Field
- [x] Nested Type
- [x] Generate Global Declaration
- [x] Import (Generate Module)
- [ ] Other Options

## License
MIT
