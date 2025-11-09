import { Games } from '@/types'

import { ItemSlider, ItemSliderImg, Slider, SliderWrapper } from './style'

type GamesListProps = {
  games: Games
}

export const HomeCarousel = ({ games }: GamesListProps) => {
  return (
    <SliderWrapper>
      <Slider>
        {games.map((game, i) => (
          <ItemSlider key={i} $position={i + 1} $quantity={games.length}>
            <ItemSliderImg src={game.imgPath} alt={game.title} />
          </ItemSlider>
        ))}
      </Slider>
    </SliderWrapper>
  )
}
