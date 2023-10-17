import { bscTokens } from '@pancakeswap/tokens'
import { getAddress } from 'viem'

import { PoolCategory, SerializedPool } from '../../types'

export const livePools: SerializedPool[] = [
  {
    sousId: 0,
    stakingToken: bscTokens.cake,
    earningToken: bscTokens.cake,
    contractAddress: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
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
const finishedPools = [
 
].map((p) => ({
  ...p,
  isFinished: true,
  contractAddress: getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export const pools: SerializedPool[] = [...livePools, ...finishedPools]
