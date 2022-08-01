interface Array<T> {
  toReversed(): T[];

  toSorted(compareFn?: (a: T, b: T) => number): T[];

  toSpliced(start: number, deleteCount: number, ...items: T[]): T[];

  with(index: number, value: T): T[];
}
