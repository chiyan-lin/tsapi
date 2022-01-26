import * as moneyapifamily from "../interface/moneyapifamily";
import axios from "axios";

function baseRequest(packageName: string, serviceName: string) {
  return function methodReq<T>(method: string, req: any): Promise<T> {
    return axios.post("/user", {
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
