export function addItem<T>(set: ReadonlySet<T>, item: T): ReadonlySet<T> {
  const newSet = new Set(set)
  newSet.add(item)
  return newSet
}

export function deleteItem<T>(set: ReadonlySet<T>, item: T): ReadonlySet<T> {
  const newSet = new Set(set)
  newSet.delete(item)
  return newSet
}
