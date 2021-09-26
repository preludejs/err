import * as Severity from './severity.js'
import * as Code from './code.js'

export default class Err extends Error {

  severity: Severity.t
  code: Code.t

  constructor(message: string, options?: { severity?: Severity.t, code?: Code.t }) {
    super(message ?? 'Unknown error.')
    this.severity = Severity.of(options)
    this.code = Code.of(options)
  }

}
