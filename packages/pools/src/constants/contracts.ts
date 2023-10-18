import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

import { SupportedChainId } from './supportedChains'

export type ContractAddresses<T extends ChainId = SupportedChainId> = {
  [chainId in T]: Address
}

export const ICAKE = {
  [ChainId.BSC]: '0x3C458828D1622F5f4d526eb0d24Da8C4Eb8F07b1',
  [ChainId.BSC_TESTNET]: '0x',
  [ChainId.ETHEREUM]: '0x',
  [ChainId.ARBITRUM_ONE]: '0x',
  [ChainId.ARBITRUM_GOERLI]: '0x',
  [ChainId.ZKSYNC]: '0x',
  [ChainId.ZKSYNC_TESTNET]: '0x',
  [ChainId.BASE_TESTNET]: '0x',
  [ChainId.LINEA_TESTNET]: '0x',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const CAKE_VAULT = {
  [ChainId.BSC]: '0xAf03a017B4167aaB3341C8118bF92E7C863B638f',
  [ChainId.BSC_TESTNET]: '0x1088Fb24053F03802F673b84d16AE1A7023E400b',
  [ChainId.ETHEREUM]: '0x',
  [ChainId.ARBITRUM_ONE]: '0x',
  [ChainId.ARBITRUM_GOERLI]: '0x',
  [ChainId.ZKSYNC]: '0x',
  [ChainId.ZKSYNC_TESTNET]: '0x',
  [ChainId.BASE_TESTNET]: '0x',
  [ChainId.LINEA_TESTNET]: '0x',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const CAKE_FLEXIBLE_SIDE_VAULT = {
  [ChainId.BSC]: '0x615e896A8C2CA8470A2e9dc2E9552998f8658Ea0',
  [ChainId.BSC_TESTNET]: '0x',
  [ChainId.ETHEREUM]: '0x',
  [ChainId.ARBITRUM_ONE]: '0x',
  [ChainId.ARBITRUM_GOERLI]: '0x',
  [ChainId.ZKSYNC]: '0x',
  [ChainId.ZKSYNC_TESTNET]: '0x',
  [ChainId.BASE_TESTNET]: '0x',
  [ChainId.LINEA_TESTNET]: '0x',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>
