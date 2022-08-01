interface Array<T> {
    findLast<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    findLast(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;

    findLastIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
}
