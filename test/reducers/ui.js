import expect from 'expect'
import { switchLocale } from '../../js/actions/ui'
import reducer from '../../js/reducers/ui'

describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ booted: false })
  })

  it('should handle boot action', () => {
    expect(
      reducer({ booted: false }, boot())
    ).toEqual({ booted: true })
    ).toEqual({ locale: "it" })
  })

  it('should handle locale switch', () => {
    expect(
      reducer({ locale: "en" }, switchLocale({ locale: "it" }))
    ).toEqual({ locale: "it" })
  })
})
