import * as Err from './index.js'

test('warn', () => {
  expect(Err.warn('foo', 'bar')).toMatchObject({
    message: 'bar',
    severity: 'warn',
    code: 'foo'
  })
})
