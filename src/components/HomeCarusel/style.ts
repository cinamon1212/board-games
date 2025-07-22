import styled from 'styled-components'

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  position: relative;
`

export const Slider = styled.div`
  position: absolute;
  width: 200px;
  height: 250px;
  top: 10%;
  left: calc(50% - 100px);
  transform-style: preserve-3d;
  transform: perspective(1000px);
  animation: homeAnimation 20s linear infinite;
`
type ItemSliderProps = { $position: number; $quantity: number }

export const ItemSlider = styled.div<ItemSliderProps>`
  position: absolute;
  inset: 0 0 0 0;
  transform: ${({ $position, $quantity }) => `rotateY(calc((${$position} - 1) * (360 / ${$quantity}) * 1deg))`}
    translateZ(550px);
`

export const ItemSliderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: max-content;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;

  & h1 {
    font-size: 70px;
    font-weight: 700;
    text-transform: uppercase;
    color: transparent;
    background-clip: text;
    background-image: radial-gradient(circle, #42372e, #1a1511);
    -webkit-text-stroke: 2px #42372e;
  }
`
export const ContentAuthor = styled.div`
  align-items: end;
  font-size: 18px;

  & h2 {
    font-size: 24px;
  }
`
