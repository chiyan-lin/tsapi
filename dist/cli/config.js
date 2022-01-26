"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.config = void 0;
var apiRoot = 'src/api';
exports.config = {
    interfaceRoot: '/interface',
    serviceRoot: '/service',
    mockOriginDataRoot: '/temp',
    mockDataRoot: '/mock',
};
function getConfig(opath) {
    if (opath === void 0) { opath = apiRoot; }
    return exports.config = {
        interfaceRoot: opath + '/interface',
        serviceRoot: opath + '/service',
        mockOriginDataRoot: opath + '/temp',
        mockDataRoot: opath + '/mock',
    };
}
exports.getConfig = getConfig;
//# sourceMappingURL=config.js.map