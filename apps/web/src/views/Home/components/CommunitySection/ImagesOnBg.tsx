import { styled } from 'styled-components'
import Image from 'next/image'
import { ASSET_CDN, ASSET_GITHUB } from 'config/constants/endpoints'


const discord = `${ASSET_GITHUB}/socials/1.png`
const twitter = `${ASSET_GITHUB}/socials/2.png`
const telegram = `${ASSET_GITHUB}/socials/3.png`
const instagram = `${ASSET_GITHUB}/socials/4.png`

const pinkBubble = `${ASSET_GITHUB}/community-items/1.png`
const ring = `${ASSET_GITHUB}/community-items/2.png`
const heart = `${ASSET_GITHUB}/community-items/3.png`
const speaker = `${ASSET_GITHUB}/community-items/4.png`
const yellowBubble = `${ASSET_GITHUB}/community-items/5.png`

export const LeftImageWrapper = styled.div`
  display: none;
  width: 391px;
  height: 620px;
  position: absolute;
  top: 110px;
  left: 10px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    display: block;
  }
  img {
    position: absolute;

    &.discord {
      width: 180px;
      top: 357px;
      left: 29px;
      z-index: 2;
    }
    &.twitter {
      width: 230px;
      z-index: 3;
      top: 0;
      left: 30px;
    }
    &.telegram {
      width: 220px;
      top: 94px;
      left: 120px;
      z-index: 2;
    }
    &.instagram {
      width: 240px;
      left: 78px;
      top: 244px;
      z-index: 1;
    }
  }
`

const RightShadowWrapper = styled.div`
  position: absolute;
  width: 520px;
  height: 520px;
  bottom: -110px;
  left: calc(50% - 196px + 90px);
  display: block;
  ${({ theme }) => theme.mediaQueries.sm} {
    left: 50px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    left: calc(50% - 196px - 230px);
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    display: none;
  }
  img {
    position: absolute;
    &.pinkBubble {
      width: 100px;
      top: 330px;
      left: 100px;
      ${({ theme }) => theme.mediaQueries.sm} {
        width: 150px;
        top: 250px;
        left: 100px;
      }
      z-index: 3;
    }
    &.ring {
      width: 180px;
      top: 250px;
      left: -15px;
      ${({ theme }) => theme.mediaQueries.sm} {
        width: 250px;
        top: 200px;
        left: -50px;
      }
      z-index: 1;
    }
  }
`

export const RightImageWrapper = styled.div`
  position: absolute;
  width: 520px;
  height: 520px;
  left: calc(50% - 196px + 30px);
  top: -206px;
  z-index: 1;
  transform: scale(0.8);
  transform-origin: center center;
  ${({ theme }) => theme.mediaQueries.sm} {
    transform: scale(1);
    left: calc(50% - 196px + 60px);
    top: -186px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    left: calc(50% - 196px + 290px);
    top: -140px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    left: calc(100% - 326px);
    top: -180px;
  }
  img {
    position: absolute;
    &.pinkBubble {
      width: 150px;
      top: 300px;
      left: 100px;
      z-index: 3;
    }
    &.ring {
      width: 250px;
      top: 200px;
      left: -50px;
      z-index: 1;
    }
    &.heart {
      width: 80px;
      top: 120px;
      z-index: 3;
    }
    &.speaker {
      width: 250px;
      top: 100px;
      left: 50px;
      z-index: 3;
    }
    &.yellowBubble {
      width: 120px;
      top: 120px;
      z-index: 2;
      left: 200px;
    }
  }
`

export const RightTopBox: React.FC = () => {
  return (
    <RightImageWrapper>
      <Image className="pinkBubble" src={pinkBubble} alt="pinkBubble" unoptimized/>
      <Image className="ring" src={ring} alt="ring" unoptimized/>
      <Image className="heart" src={heart} alt="heart" unoptimized/>
      <Image className="speaker" src={speaker} alt="speaker" unoptimized/>
      <Image className="yellowBubble" src={yellowBubble} alt="yellowBubble"  unoptimized/>
    </RightImageWrapper>
  )
}

export const RightBottomBox: React.FC = () => {
  return (
    <RightShadowWrapper>
      <Image className="pinkBubble" src={pinkBubble} alt="pinkBubble" unoptimized />
      <Image className="ring" src={ring} alt="ring"  unoptimized/>
    </RightShadowWrapper>
  )
}

export const LeftBottomBox: React.FC = () => {
  return (
    <LeftImageWrapper>
      <Image className="discord" src={discord} alt="discord" unoptimized />
      <Image className="twitter" src={twitter} alt="twitter" unoptimized/>
      <Image className="telegram" src={telegram} alt="telegram" unoptimized/>
      <Image className="instagram" src={instagram} alt="instagram" unoptimized/>
    </LeftImageWrapper>
  )
}
