import * as path from 'path';
import { compare } from '../utils';

describe('message', () => {
  it('should generate interface', () => {
    const protoFileName = path.resolve(__dirname, './message.proto');
    const tsFileName = path.resolve(__dirname, './message.ts');
    compare(protoFileName, tsFileName);
  });

  it('should generate empty interface', () => {
    const protoFileName = path.resolve(__dirname, './message.empty.proto');
    const tsFileName = path.resolve(__dirname, './message.empty.ts');
    compare(protoFileName, tsFileName);
  });
});
