import * as Code from './code.js'
import * as Severity from './severity.js'
import error from './error.js'
import fatal from './fatal.js'
import message from './message.js'
import warn from './warn.js'

/** @returns `Error` instance of provided `unknown` err. */
const instance =
  (err: unknown): Error => {
    if (err instanceof Error) {
      return err
    }
    switch (Severity.of(err)) {
      case 'warn':
        return warn(Code.of(err), message(err))
      case 'fatal':
        return fatal(Code.of(err), message(err))
      default:
        return error(Code.of(err), message(err))
    }
  }

export default instance
