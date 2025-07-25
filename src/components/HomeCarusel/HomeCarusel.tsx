import { Games } from '@/types'

import { Content, ContentAuthor, H1Content, H2Content, ItemSlider, ItemSliderImg, Slider, SliderWrapper } from './style'

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
        <H1Content>Статистика настольных игр</H1Content>
        <ContentAuthor>
          Created by
          <H2Content>Ilusha</H2Content>
          <H2Content>Andrusha</H2Content>
        </ContentAuthor>
      </Content>
    </SliderWrapper>
  )
}
