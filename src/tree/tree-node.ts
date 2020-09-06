import NTree from './n-tree';

interface ChildrenMap<T> {
  [key: number]: TreeNode<T>;
}

class TreeNode<T> {
  private value: T;

  private tree: NTree<T>;

  private parent?: TreeNode<T>;

  private childrenMap: ChildrenMap<T>;

  constructor(value: T, tree: NTree<T>, parent?: TreeNode<T>) {
    this.value = value;
    this.parent = parent;
    this.tree = tree;
    this.childrenMap = {};
  }

  public isRootNode() {
    return Object.is(this.parent, undefined);
  }
}

export default TreeNode;
