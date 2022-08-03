interface Array<T> {
  uniqueBy(): T[];
  uniqueBy(key: keyof T): T[];
  uniqueBy(callback: (value: T) => unknown): T[];
}
