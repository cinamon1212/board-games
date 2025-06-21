import { getColorOrGradient } from '@/helpers'
import { TableProps } from '../Table/types'
import { CrownIcon } from './CrownIcon'

import {
  AvatarContainer,
  AvatarBorder,
  PlayerPosition,
  PlayerScore,
  TopThreeContainer,
} from './styles'

export const Tops = ({ tableDataArr }: TableProps) => {
  const topThree = tableDataArr.slice(0, 3)
  return (
    <TopThreeContainer>
      {topThree.map(({ color, name, avg, winRate }, index) => {
        const position = index + 1

        const colorOrGradient = getColorOrGradient(color)

        return (
          <PlayerPosition key={index} $position={position}>
            <CrownIcon position={position} />
            <AvatarContainer position={position} $backgroundColor={color || 'white'}></AvatarContainer>
            <PlayerInfo>
              <PlayerName>{name}</PlayerName>
              <PlayerScore>{avg ? avg : winRate}</PlayerScore>
            </PlayerInfo>
          </PlayerPosition>
        )
      })}
    </TopThreeContainer>
  )
}
