// keep a list of serialized functions
// https://stackoverflow.com/questions/7759200/is-there-any-possibility-to-have-json-stringify-preserve-functions
const functions: any = [];

// json replacer - returns a placeholder for functions
export const jsonReplacer = function(key: string, val: any) {
  if (typeof val === 'function') {
    functions.push(val.toString());
    return '{func_' + (functions.length - 1) + '}';
  }
  return val;
};

// regex replacer - replaces placeholders with functions
export const funcReplacer = function(match: any, id: number) {
  return functions[id];
};
