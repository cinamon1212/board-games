import { Games } from '@/types'

export const filterGamesByItsCount = (games: Games) => games.filter(({ games: gamesList }) => gamesList.length)
