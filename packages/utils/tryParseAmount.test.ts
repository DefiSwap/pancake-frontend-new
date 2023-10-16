import { Token } from '@pancakeswap/swap-sdk-core'
import { describe, it, expect } from 'vitest'
import tryParseAmount from './tryParseAmount'

describe('utils/tryParseAmount', () => {
  it('should be undefined when no valid input', () => {
    expect(tryParseAmount()).toBeUndefined()
  })
  it('should be undefined when input is 0', () => {
    expect(tryParseAmount('0.00')).toBeUndefined()
  })

  it('should pared value', () => {
    expect(
      tryParseAmount(
        '100',
        new Token(
          56,
          '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
          18,
          'CAKE',
          'PattieSwap Token',
          'https://pancakeswap.finance/',
        ),
      ),
    ).toBeTruthy()
  })
})
