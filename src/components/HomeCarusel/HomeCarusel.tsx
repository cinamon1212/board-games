import { Games } from '@/types'

import { Content, ContentAuthor, ItemSlider, ItemSliderImg, Slider, SliderWrapper } from './style'

type GamesListProps = {
  games: Games
}

export const HomeCarusel = ({ games }: GamesListProps) => {
  return (
    <SliderWrapper>
      <Slider>
        {games.map((game, i) => (
          <ItemSlider key={i} $position={i + 1} $quantity={games.length}>
            <ItemSliderImg src={game.imgPath} alt={game.title} />
          </ItemSlider>
        ))}
      </Slider>
      <Content>
        <h1>Статистика настольных игр</h1>
        <ContentAuthor>
          Created by
          <h2>Ilusha</h2>
          <h2>Andrusha</h2>
        </ContentAuthor>
      </Content>
    </SliderWrapper>
  )
}
