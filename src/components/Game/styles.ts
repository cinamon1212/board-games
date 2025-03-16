import Link from 'next/link'
import styled from 'styled-components'

export const GameWrapper = styled(Link)`
  border: 1px solid;
  border-color: gray;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    border-color: #ffc690;
    cursor: pointer;
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
  height: 70%;
  border: none;
  object-fit: cover;
  object-position: top;
`

export const GameInfo = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 24px;
`
export const GameTitle = styled.span`
  font-size: 20px;
`

export const GameCount = styled.span`
  text-transform: uppercase;
  color: gray;
  font-size: 14px;
`
