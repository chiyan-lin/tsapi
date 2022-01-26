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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScriptExporter = exports.logger = void 0;
var chalk_1 = __importDefault(require("chalk"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var prettier = __importStar(require("prettier"));
var parser_1 = require("../parser");
var generator_1 = require("../typescript/generator");
var const_1 = require("../typescript/generator/const");
var enum_1 = require("../typescript/generator/enum");
var import_1 = require("../typescript/generator/import");
var interface_1 = require("../typescript/generator/interface");
var service_1 = require("../typescript/generator/service");
var genFile_1 = require("./genFile");
var config_1 = require("./config");
// export const config =
// tslint:disable no-console
exports.logger = {
    log: function (a) {
        if (a === void 0) { a = ''; }
        console.log(a);
    },
    success: function (a) {
        if (a === void 0) { a = ''; }
        console.log(chalk_1.default.green('success') + " " + a);
    },
    error: function (a) {
        if (a === void 0) { a = ''; }
        console.log(chalk_1.default.red('error') + " " + a);
    },
    warning: function (a) {
        if (a === void 0) { a = ''; }
        console.log(chalk_1.default.yellow('warning') + " " + a);
    },
    pri: function (a) {
        if (a === void 0) { a = ''; }
        console.log("" + chalk_1.default.blue(a));
    },
};
var TypeScriptExporter = /** @class */ (function () {
    function TypeScriptExporter() {
        this.visitedPath = new Set();
        this.cachesByFile = {};
    }
    /**
     *
     * @param mode - Generate mode
     * @param fileName - Current source file name
     * @param rootDir - Root directory path for Proto Buffer files
     * @param outDir - Root directory path for generated TypeScript files
     * @param onError - handleError, return true to continue
     * @return members in the file
     */
    TypeScriptExporter.prototype.handleSource = function (mode, fileName, rootDir, outputPath, onError) {
        if (mode === void 0) { mode = const_1.GenerateMode.Global; }
        try {
            // 加缓存处理
            if (this.visitedPath.has(fileName)) {
                return this.cachesByFile[fileName];
            }
            this.visitedPath.add(fileName);
            var proto = fs.readFileSync(fileName).toString();
            var ast = parser_1.Parser.parse(proto);
            var generator = new generator_1.Generator(ast);
            var result = generator.getResult();
            var config_2 = config_1.getConfig(outputPath);
            // import
            var importTsString = '';
            var importCJsString = '';
            for (var _i = 0, _a = result.imports; _i < _a.length; _i++) {
                var importStatement = _a[_i];
                var fullDependencyPath = path.resolve(rootDir, importStatement.path.value);
                var relativeDependencyPath = path.relative(path.dirname(fileName), fullDependencyPath);
                var innerResult = this.handleSource(mode, fullDependencyPath, rootDir, outputPath, onError);
                var packName = innerResult.package.identifier.name;
                importTsString += import_1.generateImport(mode, packName, relativeDependencyPath);
                importCJsString += import_1.generateCjsImport(packName, relativeDependencyPath);
            }
            // Enum
            var enumTsString = result.enums.map(enum_1.generateEnum(mode)).join('\n');
            var enumCJsString = result.enums.map(enum_1.generateCJsEnum()).join('\n');
            // Interface
            var interfaceTsString = result.interfaces
                .map(function (i) { return interface_1.generateInterface(mode)(i); })
                .join('\n');
            var interfaceCJsString = result.interfaces
                .map(function (i) { return interface_1.generateCJsInterface()(i); })
                .join('\n');
            // Generate file
            var relativePath = path.relative(rootDir, fileName);
            var absoluteOutputPath = path.resolve(relativePath);
            var basename = path.basename(absoluteOutputPath, '.proto');
            // Generate interface
            var interfaceText = prettier.format([importTsString, enumTsString, interfaceTsString].join('\n'), {
                parser: 'typescript',
            });
            var ext = (mode === 'global' ? '.d' : '') + ".ts";
            var outputInterfaceName = path.resolve(config_2.interfaceRoot, "" + basename + ext);
            genFile_1.genFile(outputInterfaceName, interfaceText);
            exports.logger.success("generate Interface " + path.relative(config_2.interfaceRoot, outputInterfaceName));
            // Generate temp cjs
            var outputJsText = [importCJsString, enumCJsString, interfaceCJsString].join('\n');
            var outputJsName = path.resolve(config_2.mockOriginDataRoot, basename + ".js");
            genFile_1.genFile(outputJsName, outputJsText);
            exports.logger.success("generate temp cjs " + path.relative(config_2.mockOriginDataRoot, outputInterfaceName));
            // Api
            var isService = !!result.services.length;
            if (isService) {
                var outputApiName = path.resolve(config_2.serviceRoot, "" + basename + ext);
                var apiString = service_1.generateServiceToApi(result, basename);
                genFile_1.genFile(outputApiName, prettier.format(apiString, {
                    parser: 'typescript',
                }));
                exports.logger.success("generate api service " + path.relative(config_2.serviceRoot, outputInterfaceName));
                service_1.generateServiceToMock(result, basename, function (outputMockMthod, data) {
                    genFile_1.genFile(outputMockMthod, prettier.format(data, {
                        parser: 'typescript',
                    }));
                    exports.logger.success("generate api service " + path.relative(config_2.serviceRoot, outputMockMthod));
                });
                genFile_1.delFile(path.resolve(config_2.mockOriginDataRoot));
            }
            // save data to cache e
            this.cachesByFile[fileName] = result;
            return result;
        }
        catch (e) {
            exports.logger.error(e.toString());
            this.visitedPath.delete(fileName);
            if (onError && onError(fileName)) {
                return {};
            }
            throw e;
        }
    };
    return TypeScriptExporter;
}());
exports.TypeScriptExporter = TypeScriptExporter;
//# sourceMappingURL=exporter.js.map