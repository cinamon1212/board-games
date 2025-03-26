import Link from 'next/link'
import styled from 'styled-components'

export const GameWrapper = styled(Link)`
  box-shadow: #474746 -4px 5px 15px -6px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 300ms ease;
  background-color: #0d0a08;

  &:hover {
    box-shadow: #735b44 -4px 9px 25px -6px;
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
  height: 65%;
  border: none;
  object-fit: cover;
  object-position: top;
`

export const GameInfo = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 24px;
  text-align: center;
`
export const GameTitle = styled.span`
  font-size: 20px;
  color: whitesmoke;
`

export const GameCount = styled.span`
  text-transform: uppercase;
  color: #858585;
  font-size: 14px;
`
