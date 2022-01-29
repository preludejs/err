import isRecord from './is-record.js'

const get =
  (err: unknown, key: string): unknown =>
    isRecord(err) ?
      err[key] :
      undefined

export default get
