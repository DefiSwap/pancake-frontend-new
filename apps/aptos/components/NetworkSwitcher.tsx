import { ChainId } from '@pancakeswap/aptos-swap-sdk'
import { useNetwork } from '@pancakeswap/awgmi'
import { useIsMounted } from '@pancakeswap/hooks'
import { useTranslation } from '@pancakeswap/localization'
import { Box, Text, UserMenu, UserMenuDivider, UserMenuItem } from '@pancakeswap/uikit'
import { APEX_DOMAIN, ASSETS_CDN } from 'config'
import { defaultChain } from 'config/chains'
import Image from 'next/image'
import { aptosLogoClass } from './Logo/CurrencyLogo.css'

const evmChains = [
  { id: 56, name: 'BNB Smart Chain', chainName: 'bsc' },
  
]

const NetworkSelect = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box px="16px" py="8px">
        <Text color="textSubtle">{t('Select a Network')}</Text>
      </Box>
      <UserMenuDivider />
     
    </>
  )
}

export const NetworkSwitcher = () => {
  const network = useNetwork() || defaultChain

  const { chain = defaultChain } = network

  const isMounted = useIsMounted()

  return (
   
  )
}
