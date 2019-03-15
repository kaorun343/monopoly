export const enum ResultType {
  Err,
  Ok,
}

export type Err<T> = {
  type: ResultType.Err
  reason: T
}

export type Ok<T> = {
  type: ResultType.Ok
  value: T
}

export type Result<T, U> = Err<U> | Ok<T>

export function Err<T>(reason: T): Err<T> {
  return { type: ResultType.Err, reason }
}

export function Ok<T>(value: T): Ok<T> {
  return { type: ResultType.Ok, value }
}
