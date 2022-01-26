import { GenerateMode } from './const';

// 转化成 ts 模式
export const generateEnum = (mode: GenerateMode = GenerateMode.Global) => (ast: Enum): string =>
  `
    ${mode === GenerateMode.Global ? 'declare' : 'export'} enum ${ast.name.name} {
      ${ast.body.map((f: EnumField): string => `${f.name.name} = ${f.value.value},`).join('\n')}
    }
  `;

// 转换成 commonjs 的形式
export const generateCJsEnum = () => (ast: Enum): string =>
  `
    var ${ast.name.name} = function() {
      var enums = {
        ${ast.body.map((f: EnumField): string => `${f.name.name}: ${f.value.value},`).join('\n')}
      }
      return enums['${ast.body[0].name.name}']
    }
    module.exports.${ast.name.name} = ${ast.name.name}
  `;

  // var ${ast.name.name} = function() {
  //   var enum = {
  //     ${ast.body.map((f: EnumField): string => `'${f.name.name}': '${f.value.value}',`).join('\n')}
  //   }
  //   return enum[${ast.body[0].name.name}]
  // }
  // module.exports.${ast.name.name} = ${ast.name.name}
