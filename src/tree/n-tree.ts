import TreeNode from './tree-node';

import { ComparatorMap, NTreeConfig } from '../types';

class NTree<T> {
  comparators: ComparatorMap<T>;

  root?: TreeNode<T>;

  length: number = 0;

  constructor({ comparators }: NTreeConfig) {
    this.comparators = comparators;
  }
}

export default NTree;
