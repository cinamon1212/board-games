import { TableProps } from '../Table/types'
import { CrownIcon } from './CrownIcon'

import { AvatarContainer, PlayerInfo, PlayerName, PlayerPosition, PlayerScore, TopThreeContainer } from './styles'

export const Tops = ({ tableDataArr }: TableProps) => {
  const topThree = tableDataArr.slice(0, 3)
  return (
    <TopThreeContainer>
      {topThree.map(({ color, name, avg }, index) => {
        const position = index + 1

        return (
          <PlayerPosition key={index} position={position}>
            <CrownIcon position={position} />
            <AvatarContainer $backgroundColor={color || 'white'} borderColor={color} />
            <PlayerInfo>
              <PlayerName>{name}</PlayerName>
              <PlayerScore>{avg}</PlayerScore>
            </PlayerInfo>
          </PlayerPosition>
        )
      })}
    </TopThreeContainer>
  )
}
