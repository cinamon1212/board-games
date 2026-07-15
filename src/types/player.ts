export type PlayerId = string

export type Player = PlayerId

/**
 * Профиль игрока, как он хранится в узле `players` в Firebase.
 * Все пять полей (`name`, `color`, `avatar`, `userUid`, `createdAt`)
 * всегда присутствуют в Firebase.
 */
export type PlayerProfile = {
  id: PlayerId
  name: string
  color: string
  avatar: string
  userUid: string | null
  createdAt: number
}

export type PlayerList = Array<PlayerProfile>

export type PlayersById = Record<PlayerId, PlayerProfile>
