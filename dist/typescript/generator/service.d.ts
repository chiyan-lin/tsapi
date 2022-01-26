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
export declare const generateServiceToApi: (result: any, basename: string) => string;
export declare const generateServiceToMock: (result: any, basename: string, callback: Function) => void;
