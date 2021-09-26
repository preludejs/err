import isRecord from './is-record.js'

export type Code =
  | number
  | string

export type t = Code

export const is =
  (value: unknown): value is Code =>
    typeof value === 'number' ||
    typeof value === 'string'

export const of =
  (err: unknown, default_: Code = 'unknown'): Code =>
    isRecord(err) && is(err['code']) ?
      err['code'] :
      default_
