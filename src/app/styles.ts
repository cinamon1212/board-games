import styled, { CSSProperties } from 'styled-components'

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
