import { GenerateMode } from './const';
/**
 * calculatePath
 * 计算相对路径
 *
 * @param {string} relativeDependencyPath - relativeDependencyPath
 */
export declare const calculatePath: (relativeDependencyPath: string) => string;
/**
 * calculatePath
 * 计算相对路径
 *
 * @param {string} relativeDependencyPath - relativeDependencyPath
 */
export declare const generateImport: (mode: GenerateMode | undefined, packName: string, tsPath: string) => string;
export declare const generateCjsImport: (packName: string, tsPath: string) => string;
