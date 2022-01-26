import * as fs from 'fs';
import * as path from 'path';
import * as peggy from 'peggy';

const definition = fs.readFileSync(path.resolve(__dirname, './protobuf.pegjs')).toString();
export const Parser = peggy.generate(definition);
