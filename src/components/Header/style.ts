import { BREAK_POINTS } from '@/constants'

import styled from 'styled-components'

export const HeaderWrapper = styled.div`
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
export const AnimatedHeader = styled.header<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0) scale(1)' : 'translateY(200px) scale(0.3)')};
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
`
