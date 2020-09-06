export type Comparator<T = any> = (a: T, b: T) => number;

export interface AnyObject {
  [key: string]: any;
}

export interface ComparatorMap<T = AnyObject> {
  [key: string]: Comparator<T>;
}

export interface NTreeConfig<T = AnyObject> {
  comparators: ComparatorMap<T>;
}
