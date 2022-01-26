import { Path } from '../../visitor/path';
import { Visitor } from '../../visitor/type';

export class PackageVisitor {
  private package: Package = {} as Package;

  private readonly visitor: Visitor = {
    Proto: {
      enter: (path: Path): void => {
        path.context.package = this.package;
      },
    },
    Package: {
      exit: (path: Path): void => {
        const packageNode = path.node as Package;
        this.package.type = packageNode.type;
        this.package.identifier = packageNode.identifier;
      },
    },
  };

  public getVisitor(): Visitor {
    return this.visitor;
  }
}
