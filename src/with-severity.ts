import of from './of.js'
import type { Code } from './code.js'
import type { Severity } from './severity.js'
import type Err from './err.js'

const withSeverity =
  (severity: Severity): (code: Code, message: string) => Err =>
    (code: Code, message: string): Err =>
      of(message, { severity, code })

export default withSeverity
