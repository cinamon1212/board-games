import { Games } from '@/types'

export const filterGamesByRegExp = (games: Games, regExpStr: string) => {
  const regex = new RegExp(regExpStr, 'i')

  return games.filter((game) => regex.test(game.title))
}
