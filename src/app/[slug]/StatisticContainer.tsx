import { GameTitle, StatisticWrapper, TitleWrapper } from './styles'

import { GameStatistic, Tops } from '@/components'
import { StatisticContainerProps } from './types'

export const StatisticContainer = ({ title, scoreStats, games, tableDataArr }: StatisticContainerProps) => {
  return (
    <StatisticWrapper>
      <TitleWrapper>
        <GameTitle>{title}</GameTitle>
        {scoreStats && <GameStatistic scoreStats={scoreStats} gamesCount={games.length} />}
      </TitleWrapper>
      <Tops tableDataArr={tableDataArr} />
    </StatisticWrapper>
  )
}
