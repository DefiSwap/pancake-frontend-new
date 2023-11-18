import { bscTokens } from '@pancakeswap/tokens'
import { getAddress } from 'viem'

import { PoolCategory, SerializedPool } from '../../types'

export const livePools: SerializedPool[] = [
  {
    sousId: 0,
    stakingToken: bscTokens.cake,
    earningToken: bscTokens.cake,
    contractAddress: '0xAf03a017B4167aaB3341C8118bF92E7C863B638f',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },


].map((p) => ({
  ...p,
  contractAddress: getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
 /* const finishedPools = [
 
  {
    sousId: 346,
    stakingToken: bscTokens.cake,
    earningToken: bscTokens.csix,
    contractAddress: '0x5250320d765F366E2B96Cd5c7d08F1902422195e',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.017',
  },
 
 
 
  
].map((p) => ({
  ...p,
  isFinished: true,
  contractAddress: getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))
 */
export const pools: SerializedPool[] = [...livePools]
