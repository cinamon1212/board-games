import { BREAK_POINTS } from '@/constants'
import Link from 'next/link'
import styled from 'styled-components'

export const GameWrapper = styled(Link)`
  box-shadow: -6px -6px 5px -5px #42372e inset;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 500ms ease;
  background: radial-gradient(circle, #42372e, #1a1511);
  z-index: 1;

  &:hover {
    box-shadow: -8px -8px 5px -5px #42372e inset;
    cursor: pointer;
  }

  @media (min-width: ${BREAK_POINTS.sm}) {
    height: 500px;
  }

  @media (min-width: ${BREAK_POINTS.md}) {
    height: 400px;
  }

  @media (min-width: ${BREAK_POINTS.lg}) {
    height: 500px;
  }
`

type GameImgProps = {
  src: string | null
  alt: string
}

export const GameImg = styled.img.attrs<GameImgProps>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 100%;
  height: 75%;
  border: none;
  object-fit: cover;
  object-position: top;
  box-shadow: #1a1511 0px 5px 25px -2px;
`

export const GameInfo = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 24px;
  text-align: center;
  direction: ltr;
`
export const GameTitle = styled.span`
  color: whitesmoke;
  font-size: 16px;

  @media (min-width: ${BREAK_POINTS.sm}) {
    font-size: 24px;
  }

  @media (min-width: ${BREAK_POINTS.md}) {
    font-size: 18px;
  }

  @media (min-width: ${BREAK_POINTS.lg}) {
    font-size: 24px;
  }

  @media (min-width: ${BREAK_POINTS.xl}) {
    font-size: 18px;
  }

  @media (min-width: ${BREAK_POINTS.xxl}) {
    font-size: 24px;
  }
`

export const GameCount = styled.span`
  color: #696969;

  font-size: 12px;

  @media (min-width: ${BREAK_POINTS.sm}) {
    font-size: 18px;
  }

  @media (min-width: ${BREAK_POINTS.md}) {
    font-size: 14px;
  }

  @media (min-width: ${BREAK_POINTS.lg}) {
    font-size: 18px;
  }

  @media (min-width: ${BREAK_POINTS.xl}) {
    font-size: 14px;
  }

  @media (min-width: ${BREAK_POINTS.xxl}) {
    font-size: 18px;
  }
`
