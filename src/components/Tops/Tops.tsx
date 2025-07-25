import { getColorOrGradient } from '@/helpers'
import { TableProps } from '../Table/types'
import { CrownIcon } from './CrownIcon'

import { AvatarContainer, AvatarBorder, PlayerPosition, PlayerScore, TopThreeContainer, PlayerName } from './styles'

export const Tops = ({ tableDataArr }: TableProps) => {
  const topThree = tableDataArr.slice(0, 3)
  return (
    <TopThreeContainer>
      {topThree.map(({ color, name, avg, winRate }, index) => {
        const position = index + 1

        const { color: colorOrGradient } = getColorOrGradient(color)

        return (
          <PlayerPosition key={index} $position={position}>
            <CrownIcon position={position} />
            <AvatarBorder $background={colorOrGradient} $position={position}>
              <AvatarContainer $background={colorOrGradient} />
            </AvatarBorder>
            <PlayerName>{name}</PlayerName>
            <PlayerScore>{avg ? avg : winRate}</PlayerScore>
          </PlayerPosition>
        )
      })}
    </TopThreeContainer>
  )
}
