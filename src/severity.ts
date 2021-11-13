import isRecord from './is-record.js'

export type Severity =
  | 'fatal'
  | 'error'
  | 'warn'

export type t = Severity

export const is =
  (value: unknown): value is Severity =>
    value === 'fatal' ||
    value === 'error' ||
    value === 'warn'

export const of =
  (err: unknown, default_ = 'error' as const): Severity =>
    isRecord(err) && is(err['severity']) ?
      err['severity'] :
      default_
