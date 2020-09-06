class TreeNode<T> {
  value: T;

  parent?: TreeNode<T>;

  constructor(value: T, parent?: TreeNode<T>) {
    this.value = value;
    this.parent = parent;
  }

  public isRootNode() {
    return Object.is(this.parent, undefined);
  }
}

export default TreeNode;
