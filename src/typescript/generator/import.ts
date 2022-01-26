import * as path from 'path';
import { GenerateMode } from './const';
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

function replaceExt(filePath: string, oldExt: string, ext: string): string {
  return path.join(path.dirname(filePath), `${path.basename(filePath, oldExt)}${ext}`);
}

/**
 * calculatePath
 * 计算相对路径
 *
 * @param {string} relativeDependencyPath - relativeDependencyPath
 */
export const calculatePath = function(relativeDependencyPath: string) {
  let tsDependencyPath = replaceExt(relativeDependencyPath, '.proto', '');
  if (!tsDependencyPath.startsWith('.')) {
    tsDependencyPath = `.${path.sep}${tsDependencyPath}`;
  }
  return tsDependencyPath;
};

/**
 * calculatePath
 * 计算相对路径
 *
 * @param {string} relativeDependencyPath - relativeDependencyPath
 */
export const generateImport = (mode: GenerateMode = GenerateMode.Global, packName: string, tsPath: string): string => {
  if (mode === GenerateMode.Global) {
    return '';
  }
  return `import * as ${packName} from '${calculatePath(tsPath)}';\n`;
};

export const generateCjsImport = (packName: string, tsPath: string): string => {
  return `var ${packName} = require('${calculatePath(tsPath)}');\n`;
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
