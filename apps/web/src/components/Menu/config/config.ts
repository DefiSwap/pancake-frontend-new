import { ContextApi } from '@pancakeswap/localization'
import { SUPPORTED_CHAIN_IDS as POOL_SUPPORTED_CHAINS } from '@pancakeswap/pools'
import {
  NftIcon,
  NftFillIcon,
  DropdownMenuItemType,
  DropdownMenuItems,
  EarnFillIcon,
  EarnIcon,
  MenuItemsType,
  MoreIcon,
  PancakeProtectorIcon,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'
import {
  FIXED_STAKING_SUPPORTED_CHAINS,
  LIQUID_STAKING_SUPPORTED_CHAINS,
  SUPPORT_BUY_CRYPTO,
  SUPPORT_FARMS,
  SUPPORT_ONLY_BSC,
} from 'config/constants/supportChains'
import { getPerpetualUrl } from 'utils/getPerpetualUrl'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
      
       
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/farms',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      supportChainIds: SUPPORT_FARMS,
      items: [
        {
          label: t('Farms'),
          href: '/farms',
          supportChainIds: SUPPORT_FARMS,
        },
        {
          label: t('Pools'),
          href: '/pools',
          supportChainIds: POOL_SUPPORTED_CHAINS,
        },
       
       
      ].map((item) => addMenuItemSupported(item, chainId)),
    },


    {
      label: '',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        {
          label: t('Info'),
          href: '/info',
        },
       
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
   
   
    {
      label: 'Pattie Ecosystem',
      href: '/',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
      
        {
          label: t('Perpetual'),
          href: 'https://perp.pattieswap.finance/',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Pattiepad'),
          href: 'https://pattiepad.com',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Pattie City'),
          href: 'https://pattiecity.com',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
export default config
