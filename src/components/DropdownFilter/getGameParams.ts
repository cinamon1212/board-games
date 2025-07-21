import { PlayerScores } from '@/types'

export const getGameParams = (games: PlayerScores<number | boolean>) => {
  let gameParams = null

  for (const game of games) {
    if (game['params']) {
      gameParams = game['params']
    }
  }

  return gameParams
}
