import * as Code from './code.js'
import * as Severity from './severity.js'
import Err from './err.js'
import error from './error.js'
import fatal from './fatal.js'
import get from './get.js'
import instance from './instance.js'
import message from './message.js'
import of from './of.js'
import stack from './stack.js'
import warn from './warn.js'

const code = Code.of
const severity = Severity.of

export {
  code,
  Code,
  Err as t,
  error,
  fatal,
  get,
  instance,
  message,
  of,
  severity,
  Severity,
  stack,
  warn
}
