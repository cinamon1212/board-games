import { BREAK_POINTS } from '@/constants'
import styled, { CSSProperties } from 'styled-components'

export const HomeWrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  padding: 32px;
  height: auto;

  @media (min-width: ${BREAK_POINTS.sm}) {
    gap: 48px;
    padding: 48px;
  }

  @media (min-width: ${BREAK_POINTS.lg}) {
    gap: 64px;
    padding: 64px;
  }
`

export type RadialBackgroundProps = {
  top?: CSSProperties['top']
  left?: CSSProperties['left']
  bottom?: CSSProperties['bottom']
  right?: CSSProperties['right']
}

export const RadialBackground = styled.div<RadialBackgroundProps>`
  position: absolute;
  width: 90%;
  height: 200px;
  background: radial-gradient(circle at center, #302101 0%, #1a1511 80%);
  z-index: 0;
  filter: blur(100px);

  top: ${(props) => props?.top};
  bottom: ${(props) => props?.bottom};
  left: ${(props) => props?.left};
  right: ${(props) => props?.right};
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;

  @media (min-width: ${BREAK_POINTS.sm}) {
    font-size: 22px;
  }

  @media (min-width: ${BREAK_POINTS.md}) {
    font-size: 24px;
  }

  @media (min-width: ${BREAK_POINTS.lg}) {
    font-size: 26px;
  }

  @media (min-width: ${BREAK_POINTS.xl}) {
    font-size: 28px;
  }

  @media (min-width: ${BREAK_POINTS.xxl}) {
    font-size: 32px;
  }
`
