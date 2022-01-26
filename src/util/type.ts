/**
 * typeMapping
 * 把 pb 中的类型转换为 ts 的类型
 *
 * @param {Type} typeName - typeName
 */

const NUM = 'number';

export function typeMapping(typeName: Type, numberType = NUM): string {
  if (typeName.type === 'KeywordType') {
    return keywordTypeMapping(typeName, numberType);
  }
  return extendedTypeMapping(typeName);
}

export function keywordTypeMapping(typeName: KeywordType, numberType: string): string {
  const map: any = {
    bool: 'boolean',
    string: 'string',
    bytes: 'string',

    int32: numberType,
    fixed32: numberType,
    uint32: numberType,
    sint32: numberType,
    sfixed32: numberType,

    int64: numberType,
    fixed64: numberType,
    uint64: numberType,
    sint64: numberType,
    sfixed64: numberType,

    // int64: 'string',
    // fixed64: 'string',
    // uint64: 'string',
    // sint64: 'string',
    // sfixed64: 'string',

    float: numberType,
    double: numberType,
  };
  return map[typeName.typeName] || 'any';
}

/**
 * extendedTypeMapping
 *
 * @param {Type} typeName - typeName
 */
export function extendedTypeMapping(typeName: ExtendedType): string {
  if (!typeName.path || typeName.path.length === 0) {
    return typeName.identifier.name;
  }
  return [...typeName.path.map(id => id.name), typeName.identifier.name].join('.');
}
