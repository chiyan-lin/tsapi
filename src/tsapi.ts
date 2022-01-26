import * as file from 'file';
import * as path from 'path';
const { TypeScriptExporter, logger } = require('../dist/cli/exporter');

/**
 * protobuf-parser
 * Generate TypeScript interface with Protobuf.
 *
 * @version 0.1.0
 * @param {string} output - output path
 * @param {string} mode - "global": Global Definition, "module": Module Definition
 */
export default function tsapi(inputPath: string, outputPath: string, mode = "module") {
  if (!inputPath) {
    logger.error('Input file is not specified.');
    process.exit(1);
  }
  const absoluteInputPath = path.resolve(inputPath);
  const exporter = new TypeScriptExporter();
  file.walk(absoluteInputPath, (err: any, dirPath: any, dirs: any, files: any) => {
    for (const file of files) {
      // 这里限制了必须是 pb 协议，对于非pb协议需要写 pegjs 对文本进行编译
      if (!file.endsWith('.proto')) {
        continue;
      }
      exporter.handleSource(mode, file, absoluteInputPath, outputPath, (fileName: any) => {
        logger.error(`Generate from ${path.relative(absoluteInputPath, fileName)}`);
        return true;
      });
    }
  });
}
