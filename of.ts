import Err from './err.js'
import type { Code } from './code.js'
import type { Severity } from './severity.js'

const of =
  (message: string, { code = 'unknown', severity = 'error' }: { code?: Code, severity?: Severity } = {}): Err =>
    new Err(message, { code, severity })

export default of
