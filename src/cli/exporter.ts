import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { Parser } from '../parser';

import { Generator } from '../typescript/generator';
import { GenerateMode } from '../typescript/generator/const';
import { generateEnum, generateCJsEnum } from '../typescript/generator/enum';
import { generateImport, generateCjsImport } from '../typescript/generator/import';
import { generateInterface, InterfaceTree, generateCJsInterface } from '../typescript/generator/interface';
import { generateServiceToApi, generateServiceToMock } from '../typescript/generator/service';
import { genFile, delFile } from './genFile';
import { getConfig } from './config';

// export const config =
// tslint:disable no-console
export const logger = {
  log(a: string = ''): void {
    console.log(a);
  },
  success(a: string = ''): void {
    console.log(`${chalk.green('success')} ${a}`);
  },
  error(a: string = ''): void {
    console.log(`${chalk.red('error')} ${a}`);
  },
  warning(a: string = ''): void {
    console.log(`${chalk.yellow('warning')} ${a}`);
  },
  pri(a: string = ''): void {
    console.log(`${chalk.blue(a)}`);
  },
};

export class TypeScriptExporter {
  private readonly visitedPath: Set<string> = new Set<string>();
  private readonly cachesByFile: {
    [path: string]: string[];
  } = {};

  /**
   *
   * @param mode - Generate mode
   * @param fileName - Current source file name
   * @param rootDir - Root directory path for Proto Buffer files
   * @param outDir - Root directory path for generated TypeScript files
   * @param onError - handleError, return true to continue
   * @return members in the file
   */
  private handleSource(
    mode: GenerateMode = GenerateMode.Global,
    fileName: string,
    rootDir: string,
    outputPath: string,
    onError?: (fileName: string) => boolean,
  ): any {
    try {
      // 加缓存处理
      if (this.visitedPath.has(fileName)) {
        return this.cachesByFile[fileName];
      }

      this.visitedPath.add(fileName);
      const proto = fs.readFileSync(fileName).toString();
      const ast = Parser.parse(proto);
      const generator = new Generator(ast);
      const result = generator.getResult();
      const config = getConfig(outputPath)
      // import
      let importTsString = '';
      let importCJsString = '';
      for (const importStatement of result.imports as ImportStatement[]) {
        const fullDependencyPath = path.resolve(rootDir, importStatement.path.value);
        const relativeDependencyPath = path.relative(path.dirname(fileName), fullDependencyPath);
        const innerResult = this.handleSource(mode, fullDependencyPath, rootDir, outputPath, onError);
        const packName = innerResult.package.identifier.name;
        importTsString += generateImport(mode, packName, relativeDependencyPath);
        importCJsString += generateCjsImport(packName, relativeDependencyPath);
      }

      // Enum
      const enumTsString: string = result.enums.map(generateEnum(mode)).join('\n');
      const enumCJsString: string = result.enums.map(generateCJsEnum()).join('\n');

      // Interface
      const interfaceTsString: string = result.interfaces
        .map((i: InterfaceTree) => generateInterface(mode)(i))
        .join('\n');
      const interfaceCJsString: string = result.interfaces
        .map((i: InterfaceTree) => generateCJsInterface()(i))
        .join('\n');

      // Generate file
      const relativePath = path.relative(rootDir, fileName);
      const absoluteOutputPath = path.resolve(relativePath);
      const basename = path.basename(absoluteOutputPath, '.proto');

      // Generate interface
      const interfaceText = prettier.format([importTsString, enumTsString, interfaceTsString].join('\n'), {
        parser: 'typescript',
      });
      const ext = `${mode === 'global' ? '.d' : ''}.ts`;
      const outputInterfaceName = path.resolve(config.interfaceRoot, `${basename}${ext}`);
      genFile(outputInterfaceName, interfaceText);
      logger.success(`generate Interface ${path.relative(config.interfaceRoot, outputInterfaceName)}`);

      // Generate temp cjs
      const outputJsText = [importCJsString, enumCJsString, interfaceCJsString].join('\n');
      const outputJsName = path.resolve(config.mockOriginDataRoot, `${basename}.js`);
      genFile(outputJsName, outputJsText);
      logger.success(`generate temp cjs ${path.relative(config.mockOriginDataRoot, outputInterfaceName)}`);

      // Api
      const isService = !!result.services.length;
      if (isService) {
        const outputApiName = path.resolve(config.serviceRoot, `${basename}${ext}`);
        const apiString: string = generateServiceToApi(result, basename);
        genFile(
          outputApiName,
          prettier.format(apiString, {
            parser: 'typescript',
          }),
        );
        logger.success(`generate api service ${path.relative(config.serviceRoot, outputInterfaceName)}`);
        generateServiceToMock(result, basename, (outputMockMthod: string, data: string) => {
          genFile(
            outputMockMthod,
            prettier.format(data, {
              parser: 'typescript',
            }),
          );
          logger.success(`generate api service ${path.relative(config.serviceRoot, outputMockMthod)}`);
        })
        delFile(path.resolve(config.mockOriginDataRoot))
      }

      // save data to cache e
      this.cachesByFile[fileName] = result;
      return result;
    } catch (e) {
      logger.error(e.toString())
      this.visitedPath.delete(fileName);
      if (onError && onError(fileName)) {
        return {};
      }
      throw e;
    }
  }
}
