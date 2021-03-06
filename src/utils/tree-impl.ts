export class Node<T> {
  value: T;
  children: Node<T>[] = [];
  parent: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  getParent() {
    return this.parent;
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

  setValue(value: T) {
    this.value = value;
  }

  getChildren() {
    return this.children;
  }
}
