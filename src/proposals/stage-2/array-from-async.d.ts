interface ArrayConstructor {
  fromAsync<T>(
    asyncItems: AsyncIterable<T> | Iterable<T> | ArrayLike<T>,
    mapFn?: never,
    thisArg?: any,
  ): T[];
  fromAsync<T, U>(
    asyncItems: AsyncIterable<T> | Iterable<T> | ArrayLike<T>,
    mapFn?: (value: T, index: number) => U,
    thisArg?: any,
  ): U[];
  fromAsync<T, U>(
    asyncItems: AsyncIterable<T> | Iterable<T> | ArrayLike<T>,
    mapFn?: (value: T, index: number) => U,
    thisArg?: any,
  ): U[];
}
