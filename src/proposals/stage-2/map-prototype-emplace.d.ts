interface MapEmplaceHander<K, V> {
  insert?: (key: K, map: Map<K, V>) => V;
  update?: (existing: V, key: K, map: Map<K, V>) => V;
}

interface Map<K, V> {
  emplace(key: K, hander: MapEmplaceHander<K, V>): V;
}

interface WeakMapEmplaceHander<K extends object, V> {
  insert?: (key: K, map: WeakMap<K, V>) => V;
  update?: (existing: V, key: K, map: Map<K, V>) => V;
}

interface WeakMap<K extends object, V> {
  emplace(key: K, hander: WeakMapEmplaceHander<K, V>): V;
}
