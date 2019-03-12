export const enum EitherType {
  Left,
  Right,
}

export interface Left<T> {
  type: EitherType.Left
  reason: T
}

export interface Right<T> {
  type: EitherType.Right
  value: T
}

export type Either<T, U> = Left<U> | Right<T>

export function Left<T>(reason: T): Left<T> {
  return { type: EitherType.Left, reason }
}

export function Right<T>(value: T): Right<T> {
  return { type: EitherType.Right, value }
}
