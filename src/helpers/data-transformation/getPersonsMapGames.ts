import {
  PersonsMapGames,
  PlayerId,
  PlayerScores,
  SingleGameResult,
  PlayersById,
} from '@/types'
import { getPlayerColor, sortPlayerName } from '../players'

const getPlayerIdsKey = (playerIds: Array<PlayerId>) =>
  sortPlayerName(playerIds).join('&')

const getScoreValues = <T extends SingleGameResult>(
  game: PlayerScores<T>[number],
): Array<T> => {
  if (Array.isArray(game.teams)) {
    return game.teams.map(({ score }) => score as T)
  }

  return Object.entries(game)
    .filter(([key]) => key !== 'params' && key !== 'teams')
    .map(([, score]) => score)
    .filter(
      (score): score is T =>
        typeof score === 'number' || typeof score === 'boolean',
    )
}

const getResultEntries = <T extends SingleGameResult>(
  game: PlayerScores<T>[number],
): Array<{ key: string; playerIds: Array<PlayerId>; score: T }> => {
  if (Array.isArray(game.teams)) {
    return game.teams.map(({ players, score }) => {
      const playerIds = sortPlayerName(players)

      return {
        key: getPlayerIdsKey(playerIds),
        playerIds,
        score: score as T,
      }
    })
  }

  return Object.entries(game)
    .filter(([key]) => key !== 'params' && key !== 'teams')
    .filter(
      (entry): entry is [PlayerId, T] =>
        typeof entry[1] === 'number' || typeof entry[1] === 'boolean',
    )
    .map(([playerId, score]) => ({
      key: playerId,
      playerIds: [playerId],
      score,
    }))
}

const getName = (playerIds: Array<PlayerId>, playersById: PlayersById) =>
  playerIds.map((playerId) => playersById[playerId].name).join(' & ')

/**
 * Преобразует массив результатов партий в карту игроков или команд.
 */
export const getPersonsMapGames = <T extends SingleGameResult>(
  games: PlayerScores<T>,
  playersById: PlayersById,
): PersonsMapGames<T> => {
  const map: PersonsMapGames<T> = {}

  games.forEach((game) => {
    const values = getScoreValues(game)
    const max =
      typeof values[0] === 'number'
        ? Math.max(...(values as Array<number>))
        : null

    for (const { key, playerIds, score } of getResultEntries(game)) {
      const color = getPlayerColor(playerIds, playersById)
      const firstPlayer =
        playerIds.length === 1 ? playersById[playerIds[0]] : null
      const fields = firstPlayer
        ? {
            id: firstPlayer.id,
            name: firstPlayer.name,
            color: firstPlayer.color,
            avatar: firstPlayer.avatar,
            userUid: firstPlayer.userUid,
            createdAt: firstPlayer.createdAt,
          }
        : {
            id: key,
            name: getName(playerIds, playersById),
            color,
            avatar: '',
            userUid: null,
            createdAt: 0,
          }

      const isWin =
        (typeof score === 'boolean' && score) ||
        (typeof score === 'number' && score === max)

      if (map[key] && Object.keys(map[key]).length) {
        const currentWinCount = map[key].winCount
        const winCount = isWin ? currentWinCount + 1 : currentWinCount

        map[key].scores.push(score)
        map[key].winCount = winCount
      } else {
        const winCount = isWin ? 1 : 0

        map[key] = {
          scores: [score],
          winCount,
          ...fields,
        }
      }
    }
  })

  return map
}
