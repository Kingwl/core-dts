const s1: Set<number> = Set.of(1, 2, 3)
const m1: Map<number, number> = Map.of([1, 2], [2, 3], [3, 4])

const s2: Set<number> = Set.from([1, 2, 3])
const s3: Set<number> = Set.from([1, 2, 3], x => x * 2)

const m2: Map<number, number> = Map.from([[1, 2], [2, 3], [3, 4]])
const m3: Map<number, number> = Map.from([[1, 2], [2, 3], [3, 4]], ([k, v]) => [k, v * 2])

WeakSet.of({}, {}, {})
WeakSet.from([{}, {}, {}])
const ws: WeakSet<{ value: {} }> = WeakSet.from([{}, {}, {}], x => ({ value: x }))

WeakMap.of([{}, 1], [{}, 2], [{}, 3])
WeakMap.from([[{}, 1], [{}, 2], [{}, 3]])
WeakMap.from([[{}, 1], [{}, 2], [{}, 3]], ([k, v]) => [k, v * 2])
