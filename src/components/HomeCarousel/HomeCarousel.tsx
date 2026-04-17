import Link from 'next/link'

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
            <Link
              href={game.slug}
              aria-label={`Открыть страницу игры ${game.title}`}
            >
              <ItemSliderImg src={game.imgPath} alt={game.title} />
            </Link>
          </ItemSlider>
        ))}
      </Slider>
    </SliderWrapper>
  )
}
