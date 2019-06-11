export function initMap<T, U>(
  items: T[],
  initValue: () => U,
): ReadonlyMap<T, U> {
  return new Map(items.map(item => [item, initValue()] as [T, U]))
}

export function updateMap<T, U>(
  items: ReadonlyMap<T, U>,
  key: T,
  value: U,
): ReadonlyMap<T, U> {
  return new Map(items).set(key, value)
}
