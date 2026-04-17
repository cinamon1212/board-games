import { PlayerScores } from '@/types'

export const getGameParams = (games: PlayerScores<number | boolean>) => {
  // Защита от не-массива
  if (!Array.isArray(games)) {
    console.warn('[getGameParams] games is not an array:', games)
    return null
  }

  let gameParams = null

  for (const game of games) {
    if (game && game['params']) {
      gameParams = game['params']
    }
  }

  return gameParams
}
