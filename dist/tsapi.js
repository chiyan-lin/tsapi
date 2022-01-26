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
var file = __importStar(require("file"));
var path = __importStar(require("path"));
var _a = require('../dist/cli/exporter'), TypeScriptExporter = _a.TypeScriptExporter, logger = _a.logger;
/**
 * protobuf-parser
 * Generate TypeScript interface with Protobuf.
 *
 * @version 0.1.0
 * @param {string} output - output path
 * @param {string} mode - "global": Global Definition, "module": Module Definition
 */
function tsapi(inputPath, outputPath, mode) {
    if (mode === void 0) { mode = "module"; }
    if (!inputPath) {
        logger.error('Input file is not specified.');
        process.exit(1);
    }
    var absoluteInputPath = path.resolve(inputPath);
    var exporter = new TypeScriptExporter();
    file.walk(absoluteInputPath, function (err, dirPath, dirs, files) {
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file_1 = files_1[_i];
            // 这里限制了必须是 pb 协议，对于非pb协议需要写 pegjs 对文本进行编译
            if (!file_1.endsWith('.proto')) {
                continue;
            }
            exporter.handleSource(mode, file_1, absoluteInputPath, outputPath, function (fileName) {
                logger.error("Generate from " + path.relative(absoluteInputPath, fileName));
                return true;
            });
        }
    });
}
exports.default = tsapi;
//# sourceMappingURL=tsapi.js.map