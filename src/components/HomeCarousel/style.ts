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
  transform: ${({ $position, $quantity }) =>
      `rotateY(calc((${$position} - 1) * (360 / ${$quantity}) * 1deg))`}
    translateZ(600px);
`

export const ItemSliderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
