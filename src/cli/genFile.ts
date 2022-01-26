import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as path from 'path';
import * as del from 'del';

export function genFile(outputFileName: string, text: string) {
  mkdirp.sync(path.dirname(outputFileName));
  fs.writeFileSync(outputFileName, text);
}

export function delFile(delPath: string) {
  del.sync([delPath]);
}
