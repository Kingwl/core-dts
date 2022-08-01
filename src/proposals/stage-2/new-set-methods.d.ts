interface Set<T> {
  difference(iterable: Iterable<T>): Set<T>;
  intersection(iterable: Iterable<T>): Set<T>;
  isDisjointFrom(iterable: Iterable<T>): boolean;
  isSubsetOf(iterable: Iterable<T>): boolean;
  isSupersetOf(iterable: Iterable<T>): boolean;
  symmetricDifference(iterable: Iterable<T>): Set<T>;
  union(iterable: Iterable<T>): Set<T>;
}
