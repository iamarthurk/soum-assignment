export class Node<T> {
  value: T;
  children: Node<T>[] = [];
  parent: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  setParentNode(node: Node<T>) {
    this.parent = node;
  }

  addChild(node: Node<T>) {
    node.setParentNode(this);
    this.children.push(node);
  }

  getValue() {
    return this.value;
  }

  getChildren() {
    return this.children;
  }
}
