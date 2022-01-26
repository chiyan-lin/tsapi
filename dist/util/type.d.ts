/**
 * typeMapping
 * 把 pb 中的类型转换为 ts 的类型
 *
 * @param {Type} typeName - typeName
 */
export declare function typeMapping(typeName: Type, numberType?: string): string;
export declare function keywordTypeMapping(typeName: KeywordType, numberType: string): string;
/**
 * extendedTypeMapping
 *
 * @param {Type} typeName - typeName
 */
export declare function extendedTypeMapping(typeName: ExtendedType): string;
