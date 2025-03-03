import { languageList, useTranslation } from '@pancakeswap/localization'
import { footerLinks, Menu as UikitMenu, NextLinkFromReactRouter, useModal } from '@pancakeswap/uikit'
import USCitizenConfirmModal from 'components/Modal/USCitizenConfirmModal'
import { NetworkSwitcher } from 'components/NetworkSwitcher'
import PhishingWarningBanner from 'components/PhishingWarningBanner'
import { useCakePrice } from 'hooks/useCakePrice'
import useTheme from 'hooks/useTheme'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { usePhishingBanner } from '@pancakeswap/utils/user'
import { IdType } from 'hooks/useUserIsUsCitizenAcknowledgement'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import GlobalSettings from './GlobalSettings'
import { SettingsMode } from './GlobalSettings/types'
import { useMenuItems } from './hooks/useMenuItems'
import UserMenu from './UserMenu'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'

const LinkComponent = (linkProps) => {
  return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
}

const Menu = (props) => {
  const { chainId } = useActiveChainId()
  const { isDark, setTheme } = useTheme()
  const cakePrice = useCakePrice()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useRouter()
  const [onUSCitizenModalPresent] = useModal(
    <USCitizenConfirmModal title={t('PattieSwap Perpetuals')} id={IdType.PERPETUALS} />,
    false,
    false,
    'usCitizenConfirmModal',
  )
  const [showPhishingWarningBanner] = usePhishingBanner()

  const menuItems = useMenuItems(onUSCitizenModalPresent)

  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  const toggleTheme = useMemo(() => {
    return () => setTheme('dark');
  }, [setTheme]);
  

  const getFooterLinks = useMemo(() => {
    return footerLinks(t)
  }, [t])

  return (
    <>
      <UikitMenu
        linkComponent={LinkComponent}
        rightSide={
          <>
            <GlobalSettings mode={SettingsMode.GLOBAL} />
            <NetworkSwitcher />
            <UserMenu />
          </>
        }
        chainId={chainId}
        banner={<PhishingWarningBanner />}
        isDark={isDark}
        
        currentLang={currentLanguage.code}
        langs={languageList}
        setLang={setLanguage}
        cakePriceUsd={0.0000}
        links={menuItems}
        subLinks={activeMenuItem?.hideSubNav || activeSubMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
        footerLinks={getFooterLinks}
        activeItem={activeMenuItem?.href}
        activeSubItem={activeSubMenuItem?.href}
        buyCakeLabel={t('Buy Pattie')}
        buyCakeLink='/swap?outputCurrency=0x0eE4024E8d5ae9afFCe26f692028407dD2050B7D&chainId=56'
        {...props}
      />
    </>
  )
}

export default Menu
