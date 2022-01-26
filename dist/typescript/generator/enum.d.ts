import { GenerateMode } from './const';
export declare const generateEnum: (mode?: GenerateMode) => (ast: Enum) => string;
export declare const generateCJsEnum: () => (ast: Enum) => string;
