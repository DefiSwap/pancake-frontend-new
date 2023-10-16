import { bscTokens } from '@pancakeswap/tokens'
import { FeeAmount, Pool } from '@pancakeswap/v3-sdk'
import { getAddress } from 'viem'
import { CAKE_BNB_LP_MAINNET } from './common'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'
import { FarmConfigV3, SerializedFarmConfig } from '..'

const v3TopFixedLps: FarmConfigV3[] = [
  {
    pid: 1,
    token0: bscTokens.patc,
    token1: bscTokens.wbnb,
    lpAddress: '0xD87b639850FC88b6F616a6CDBcDaFD345022CE6E',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 2,
    token0: bscTokens.cake,
    token1: bscTokens.busd,
    lpAddress: '0x9f6EB6903C1277c8f02d71F8814dc9998199af1D',
    feeAmount: FeeAmount.MEDIUM,
  },
  
].map((p) => ({
  ...p,
  token: p.token.serialize,
  quoteToken: p.quoteToken.serialize,
  lpAddress: getAddress(p.lpAddress),
}))

export default farms
