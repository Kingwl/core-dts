interface Set<T> {
  addAll(...args: Array<T>): this;
  deleteAll(...args: Array<T>): boolean;

  every<S extends T>(
    callback: (value: T) => value is S,
    thisArg?: any,
  ): this is Set<S>;
  every(callback: (value: T) => unknown, thisArg?: any): boolean;

  filter<S extends T>(
    callback: (value: T) => value is S,
    thisArg?: any,
  ): Set<S>;
  filter(callback: (value: T) => unknown, thisArg?: any): Set<T>;

  find<S extends T>(
    callback: (value: T) => value is S,
    thisArg?: any,
  ): S | undefined;
  find(callback: (value: T) => unknown, thisArg?: any): T | undefined;

  join(separator?: string): string;

  map<U>(callback: (value: T) => U, thisArg?: any): Set<U>;

  reduce<U>(callback: (memo: U, value: T) => U): U | undefined;
  reduce<U>(callback: (memo: U, value: T) => U, initialValue: U): U;

  some(callback: (value: T) => unknown, thisArg?: any): boolean;
}

interface MapConstructor {
  groupBy<T, K>(iterable: Iterable<T>, callback: (value: T) => K): Map<K, T[]>;
  keyBy<T, K>(iterable: Iterable<T>, callback: (value: T) => K): Map<K, T>;
}

interface Map<K, V> {
  deleteAll(...args: Array<K>): boolean;

  every(callback: (value: V, key: K) => boolean, thisArg?: any): boolean;

  filter(callback: (value: V, key: K) => boolean, thisArg?: any): Map<K, V>;

  find(callback: (value: V, key: K) => boolean, thisArg?: any): V | undefined;

  findKey(
    callback: (value: V, key: K) => boolean,
    thisArg?: any,
  ): K | undefined;

  includes(searchElement: V): boolean;
  keyOf(searchElement: V): K | undefined;

  mapKeys<K1>(
    mapFn: (value: K, index: number) => K1,
    thisArg?: any,
  ): Map<K1, V>;
  mapValues<V1>(
    mapFn: (value: V, index: number) => V1,
    thisArg?: any,
  ): Map<K, V1>;

  merge(...iterables: [K, V][]): this;

  reduce<U>(callback: (memo: U, value: V, key: K) => U): U | undefined;
  reduce<U>(callback: (memo: U, value: V, key: K) => U, initialValue: U): U;

  some(callback: (value: V, key: K) => boolean, thisArg?: any): boolean;

  update(
    key: K,
    callback: (value: V, key: K) => V,
    thunk?: (key: K) => V,
  ): this;
}

interface WeakSet<T> {
  addAll(...args: Array<T>): this;
  deleteAll(...args: Array<T>): boolean;
}

interface WeakMap<K, V> {
  deleteAll(...args: Array<K>): boolean;
}
