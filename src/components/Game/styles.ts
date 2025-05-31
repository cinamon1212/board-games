import Link from 'next/link'
import styled from 'styled-components'

export const GameWrapper = styled(Link)`
  box-shadow: -6px -6px 5px -5px #42372e inset;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 500ms ease;
  background: radial-gradient(circle, #42372e, #1a1511);

  &:hover {
  box-shadow: -8px -8px 5px -5px #42372e inset;
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
  width: 100%;
  height: 75%;
  border: none;
  object-fit: cover;
  object-position: top;
  box-shadow: #1a1511 0px 5px 25px -2px;
`
//#1a1511
export const GameInfo = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 24px;
  text-align: center;
`
export const GameTitle = styled.span`
  font-size: 24px;
  color: whitesmoke;
`

export const GameCount = styled.span`
  color: #858585;
`
