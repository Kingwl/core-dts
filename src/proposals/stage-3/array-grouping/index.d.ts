interface Array<T> {
    group<K extends keyof any>(callback: (value: T, index: number, obj: T[]) => K, thisArg?: any): Record<K, T[]>;
    groupToMap<K>(callback: (value: T, index: number, obj: T[]) => K, thisArg?: any): Map<K, T[]>;
}
