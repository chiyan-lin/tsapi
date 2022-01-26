import { Path } from '../../visitor/path';
import { Visitor } from '../../visitor/type';
import { InterfaceTree } from '../generator/interface';

export class InterfaceVisitor {
  private readonly rootInterfaces: InterfaceTree[] = [];
  private readonly interfaceScopeStack: InterfaceTree[] = [];

  private readonly visitor: Visitor = {
    Proto: {
      exit: (path: Path): void => {
        path.context.interfaces = this.rootInterfaces;
      },
    },
    Message: {
      enter: (path: Path): void => {
        const message = path.node as Message;
        const interfaceTree: InterfaceTree = {
          node: {
            name: message.name.name,
            fields: [],
          },
          children: [],
        };
        this.enterInterface(interfaceTree);
      },
      exit: (path: Path): void => {
        this.exitInterface();
      },
    },
    Field: {
      exit: (path: Path): void => {
        const field = path.node as Field;
        const iscope = this.getInterfaceScope();
        if (iscope === null) {
          throw new Error('Field should be included in Message.');
        }
        iscope.node.fields.push({
          type: 'normal',
          typeName: field.typeName,
          name: field.name.name,
          repeated: field.repeated,
        });
      },
    },
    MapField: {
      exit: (path: Path): void => {
        const field = path.node as MapField;
        const iscope = this.getInterfaceScope();
        if (iscope === null) {
          throw new Error('Map should be included in Message.');
        }
        iscope.node.fields.push({
          type: 'map',
          typeName: field.valueTypeName,
          name: field.name.name,
        });
      },
    },
    OneofField: {
      exit: (path: Path): void => {
        const field = path.node as OneofField;
        const iscope = this.getInterfaceScope();
        if (iscope === null) {
          throw new Error('OneofField should be included in Message.');
        }
        iscope.node.fields.push({
          type: 'normal',
          typeName: field.typeName,
          name: field.name.name,
          repeated: false,
          optional: true,
        });
      },
    },
  };

  public getVisitor(): Visitor {
    return this.visitor;
  }

  private enterInterface(i: InterfaceTree): void {
    if (this.interfaceScopeStack.length === 0) {
      this.rootInterfaces.push(i);
    } else {
      const iscope = this.getInterfaceScope() as InterfaceTree;
      iscope.children.push(i);
    }
    this.interfaceScopeStack.push(i);
  }

  private exitInterface(): void {
    this.interfaceScopeStack.pop();
  }

  private getInterfaceScope(): Nullable<InterfaceTree> {
    return this.interfaceScopeStack.slice(-1)[0] || null;
  }
}
