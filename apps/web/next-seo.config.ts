import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | PattieSwap',
  defaultTitle: 'PattieSwap',
  description:
    'Cheaper and faster than Uniswap? Discover PattieSwap, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for CAKE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PattieSwap',
    site: '@PattieSwap',
  },
  openGraph: {
    title: '🥞 PattieSwap - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'PattieSwap is a decentralized exchange built on top of the Binance Smart Chain (BSC) that allows users to conduct swaps by its automated market maker (AMM).',
    images: [{ url: 'https://raw.githubusercontent.com/Pattieswap/assets/main/logo.png' }],
  },
}
