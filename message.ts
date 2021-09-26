import isRecord from './is-record.js'

const message =
  (err: unknown, default_?: string): string =>
    err instanceof Error || (isRecord(err) && typeof err['message'] === 'string') ?
      err.message as string :
      default_ ?? String(err)

export default message
