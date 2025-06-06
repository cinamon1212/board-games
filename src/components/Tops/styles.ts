import styled from 'styled-components'

export const TopThreeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 84px;
`

export const PlayerPosition = styled.div<{ position: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: ${({ position }) => (position === 1 ? '2' : '1')};
  order: ${({ position }) => (position === 1 ? '2' : position === 2 ? '1' : '3')};
  transform: ${({ position }) => (position === 1 ? 'scale(1.4)' : 'scale(1)')};
  bottom: ${({ position }) => (position === 1 ? '30px' : '')};
`

export const AvatarContainer = styled.div<{ position: number; $backgroundColor: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid;
  border-color: ${({ position }) => (position === 1 ? '#FFD700' : position === 2 ? '#C0C0C0' : '#CD7F32')};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  margin-bottom: 10px;
`

export const PlayerInfo = styled.div`
  text-align: center;
  font-size: 12px;
  display: flex;
  flex-direction: column;
`

export const PlayerName = styled.span`
  color: white;
  margin-bottom: 4px;
`

export const PlayerScore = styled.span``

export const CrownContainer = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
`
