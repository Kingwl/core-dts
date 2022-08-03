interface Array<T> {
  get lastItem(): T | undefined;
  set lastItem(value: T | undefined);

  get lastIndex(): number;
}
