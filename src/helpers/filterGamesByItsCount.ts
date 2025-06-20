import { Games } from '@/types'

export const filterGamesByItsCount = (games: Games) =>
  games
    .filter(({ games: gamesList }) => gamesList.length)
    .sort((firstGame, secondGame) => (firstGame.games.length < secondGame.games.length ? 1 : -1))
