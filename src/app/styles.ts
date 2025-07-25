import { BREAK_POINTS } from '@/constants'
import styled, { CSSProperties } from 'styled-components'

export const HomeWrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  padding: 16px;
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
  $top?: CSSProperties['top']
  $left?: CSSProperties['left']
  $bottom?: CSSProperties['bottom']
  $right?: CSSProperties['right']
}

export const RadialBackground = styled.div<RadialBackgroundProps>`
  position: absolute;
  width: 90%;
  height: 200px;
  background: radial-gradient(circle at center, #302101 0%, #1a1511 80%);
  z-index: 0;
  filter: blur(100px);

  top: ${(props) => props?.$top};
  bottom: ${(props) => props?.$bottom};
  left: ${(props) => props?.$left};
  right: ${(props) => props?.$right};
`
