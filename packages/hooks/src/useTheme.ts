import { useContext, useCallback, useMemo } from 'react'
import Cookie from 'js-cookie'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import { useTheme as useNextTheme } from 'next-themes'

export const COOKIE_THEME_KEY = 'theme'
export const THEME_DOMAIN = '.pancakeswap.finance'

const useTheme = () => {
  const { setTheme } = useNextTheme()
  const theme = useContext(StyledThemeContext)!

  const handleSwitchTheme = useCallback(() => {
    try {
      setTheme('dark') // Set the theme directly to 'dark'
      Cookie.set(COOKIE_THEME_KEY, 'dark', { domain: THEME_DOMAIN })
    } catch (err) {
      // ignore set cookie error for perp theme
    }
  }, [setTheme])

  return useMemo(() => ({ isDark: true, theme, setTheme: handleSwitchTheme }), [theme, handleSwitchTheme])
}

export default useTheme
