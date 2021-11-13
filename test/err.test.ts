import * as Err from '../cjs/index.js'

test('err', () => {
  expect(Err.warn('foo', 'bar')).toMatchObject({
    message: 'bar',
    severity: 'warn',
    code: 'foo'
  })
})
