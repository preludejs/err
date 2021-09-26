import isRecord from './is-record.js'

export const stack =
  (err: unknown): undefined | string =>
    err instanceof Error || (isRecord(err) && typeof err['stack'] === 'string') ?
      err['stack'] as string :
      undefined

export default stack
