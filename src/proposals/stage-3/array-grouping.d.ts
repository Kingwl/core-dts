interface Array<T> {
  group<K extends keyof any>(
    callback: (value: T, index: number, obj: T[]) => K,
    thisArg?: any,
  ): Record<K, T[]>;

  groupToMap<S extends T>(
    callback: (value: T, index: number, obj: T) => value is S,
    thisArg?: any,
  ): Map<true, S[]> & Map<false, (Exclude<T, S>)[]>;
  groupToMap<K>(
    callback: (value: T, index: number, obj: T[]) => K,
    thisArg?: any,
  ): Map<K, T[]>;
}
