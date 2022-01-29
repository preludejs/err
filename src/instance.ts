import * as Code from './code.js'
import error from './error.js'
import message from './message.js'

/** @returns `Error` instance of provided `unknown` err. */
const instance =
  (err: unknown): Error =>
    err instanceof Error ?
      err :
      error(Code.of(err), message(err))

export default instance
