interface Array<T> {
  /**
   * @deprecated
   */
  group<K extends keyof any>(
    callback: (value: T, index: number, obj: T[]) => K,
    thisArg?: any,
  ): Record<K, T[]>;

  /**
   * @deprecated
   */
  groupToMap<S extends T>(
    callback: (value: T, index: number, obj: T) => value is S,
    thisArg?: any,
  ): Map<true, S[]> & Map<false, Exclude<T, S>[]>;

  /**
   * @deprecated
   */
  groupToMap<K>(
    callback: (value: T, index: number, obj: T[]) => K,
    thisArg?: any,
  ): Map<K, T[]>;
}

interface ObjectConstructor {
  groupBy<T, K extends keyof any>(
    array: T[],
    callbackfn: (value: T, index: number, obj: T) => K,
    thisArg?: any
  ): Record<K, T[]>;
}

interface MapConstructor {
  groupBy<T, K extends keyof any>(
    array: T[],
    callbackfn: (value: T, index: number, obj: T) => K,
    thisArg?: any
  ): Map<K, T[]>;
}