interface IteratorProto<T, TReturn, TNext> {
  map<U, UReturn, UNext>(
    callback: (value: T) => U,
  ): IteratorProto<U, UReturn, UNext>;

  filter<S extends T>(
    callback: (value: T) => value is S,
  ): IteratorProto<S, TReturn, TNext>;
  filter(callback: (value: T) => unknown): IteratorProto<T, TReturn, TNext>;
  filter(callback: (value: T) => unknown): IteratorProto<T, TReturn, TNext>;

  take(limit: number): IteratorProto<T, TReturn, TNext>;

  drop(limit: number): IteratorProto<T, TReturn, TNext>;

  indexed(): IteratorProto<[number, T], [number, TReturn], [number, TNext]>;

  flatMap<U, UReturn, UNext>(
    callback: (value: T) => U | ReadonlyArray<U>,
  ): IteratorProto<U, UReturn, UNext>[];

  reduce(callbackfn: (previousValue: T, currentValue: T) => T): T | undefined;
  reduce(
    callbackfn: (previousValue: T, currentValue: T) => T,
    initialValue: T,
  ): T;

  toArray(): T[];

  toAsync(): AsyncIteratorProto<T, TReturn, TNext>;

  forEach(callback: (value: T) => void): void;

  some(callback: (value: T) => unknown): boolean;

  every(callback: (value: T) => unknown): boolean;

  find(callback: (value: T) => unknown): T | undefined;
}

interface AsyncIteratorProto<T, TReturn, TNext> {
  map<U, UReturn, UNext>(
    callback: (value: T) => U,
  ): AsyncIteratorProto<U, UReturn, UNext>;

  filter(
    callback: (value: T) => Promise<unknown>,
  ): AsyncIteratorProto<T, TReturn, TNext>;

  take(limit: number): AsyncIteratorProto<T, TReturn, TNext>;

  drop(limit: number): AsyncIteratorProto<T, TReturn, TNext>;

  indexed(): AsyncIteratorProto<
    [number, T],
    [number, TReturn],
    [number, TNext]
  >;

  flatMap<U, UReturn, UNext>(
    callback: (value: T) => Promise<U | ReadonlyArray<U>>,
  ): AsyncIteratorProto<U, UReturn, UNext>[];

  reduce(
    callbackfn: (previousValue: T, currentValue: T) => Promise<T>,
  ): Promise<T | undefined>;
  reduce(
    callbackfn: (previousValue: T, currentValue: T) => Promise<T>,
    initialValue: T,
  ): Promise<T>;

  toArray(): T[];

  forEach(callback: (value: T) => void): void;

  some(callback: (value: T) => Promise<unknown>): Promise<boolean>;

  every(callback: (value: T) => Promise<unknown>): Promise<boolean>;

  find(callback: (value: T) => Promise<unknown>): Promise<T | undefined>;
}

interface IteratorConstructor {
  new <T = any, TReturn = any, TNext = any>(
    values?: readonly T[] | null,
  ): IteratorProto<T, TReturn, TNext>;
  readonly prototype: IteratorProto<any, any, any>;

  from<T, TReturn, TNext>(
    obj: Iterator<T, TReturn, TNext>,
  ): IteratorProto<T, TReturn, TNext>;
}

interface AsyncIteratorConstructor {
  new <T = any, TReturn = any, TNext = any>(
    values?: readonly T[] | null,
  ): AsyncIteratorProto<T, TReturn, TNext>;
  readonly prototype: AsyncIteratorProto<any, any, any>;

  from<T, TReturn, TNext>(
    obj: AsyncIterator<T, TReturn, TNext>,
  ): AsyncIteratorProto<T, TReturn, TNext>;
}

declare var Iterator: IteratorConstructor;
declare var AsyncIterator: AsyncIteratorConstructor;
