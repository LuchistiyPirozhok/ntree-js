import TreeNode from './tree-node';

import { ComparatorMap, NTreeConfig } from '../types';

class NTree<T> {
  private comparators: ComparatorMap<T>;

  private root?: TreeNode<T>;

  private length: number = 0;

  constructor({ comparators }: NTreeConfig) {
    this.comparators = comparators;
  }
}

export default NTree;
