interface SetConstructor {
    of<T>(...items: T[]): Set<T>

    from<T>(iterable: Iterable<T>): Set<T>;
    from<T, S>(iterable: Iterable<T>, mapFn: (value: T, index: number) => S, thisArg?: any): Set<S>;
}

interface MapConstructor {
    of<K, V>(...items: [K, V][]): Map<K, V>

    from<K, V>(iterable: Iterable<[K, V]>): Map<K, V>;
    from<K, V, K1, V1>(iterable: Iterable<[K, V]>, mapFn: (value: [K, V], index: number) => [K1, V1], thisArg?: any): Map<K1, V1>;
}

interface WeakSetConstructor {
    of<T extends object>(...items: T[]): WeakSet<T>

    from<T extends object>(iterable: Iterable<T>): WeakSet<T>;
    from<T, S extends object>(iterable: Iterable<T>, mapFn: (value: T, index: number) => S, thisArg?: any): WeakSet<S>;
}

interface WeakMapConstructor {
    of<K extends object, V>(...items: [K, V][]): WeakMap<K, V>

    from<K extends object, V>(iterable: Iterable<[K, V]>): WeakMap<K, V>;
    from<K, V, K1 extends object, V1>(iterable: Iterable<[K, V]>, mapFn: (value: [K, V], index: number) => [K1, V1], thisArg?: any): WeakMap<K1, V1>;
}
