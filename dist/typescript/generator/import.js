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
exports.generateCjsImport = exports.generateImport = exports.calculatePath = void 0;
var path = __importStar(require("path"));
var const_1 = require("./const");
/**
 * calculatePath
 * 计算相对路径
 *
 * @param {string} output - output path
 * @param {string} mode - "global": Global Definition, "module": Module Definition
 */
// function calculatePath(src: string, from: string, root: string): string {
//   const absoluteSrcPath = path.resolve(src);
//   const absoluteFromPath = path.resolve(root, from);
//   return path.relative(absoluteSrcPath, absoluteFromPath);
// }
function replaceExt(filePath, oldExt, ext) {
    return path.join(path.dirname(filePath), "" + path.basename(filePath, oldExt) + ext);
}
/**
 * calculatePath
 * 计算相对路径
 *
 * @param {string} relativeDependencyPath - relativeDependencyPath
 */
exports.calculatePath = function (relativeDependencyPath) {
    var tsDependencyPath = replaceExt(relativeDependencyPath, '.proto', '');
    if (!tsDependencyPath.startsWith('.')) {
        tsDependencyPath = "." + path.sep + tsDependencyPath;
    }
    return tsDependencyPath;
};
/**
 * calculatePath
 * 计算相对路径
 *
 * @param {string} relativeDependencyPath - relativeDependencyPath
 */
exports.generateImport = function (mode, packName, tsPath) {
    if (mode === void 0) { mode = const_1.GenerateMode.Global; }
    if (mode === const_1.GenerateMode.Global) {
        return '';
    }
    return "import * as " + packName + " from '" + exports.calculatePath(tsPath) + "';\n";
};
exports.generateCjsImport = function (packName, tsPath) {
    return "var " + packName + " = require('" + exports.calculatePath(tsPath) + "');\n";
};
// 用不上 注视掉了
// export const generateExport = (mode: GenerateMode = GenerateMode.Global, fileName?: string, rootDir?: string) => (
//   importStatement: ImportStatement,
// ): string => {
//   if (mode === GenerateMode.Global) {
//     return '';
//   }
//   if (!importStatement.public) {
//     return `export * from ${importStatement.path.value};`;
//   }
//   if (!fileName || !rootDir) {
//     return `export * from '${importStatement.path.value}';`;
//   }
//   return `export * from '${calculatePath(fileName, importStatement.path.value, rootDir)}';`;
// };
//# sourceMappingURL=import.js.map