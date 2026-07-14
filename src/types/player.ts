export type PlayerId = string

export type Player = PlayerId

export type PlayerProfile = {
  id: PlayerId
  name: string
  color: string
  avatar: string
  userUid: string | null
  createdAt?: number
}

export type PlayerProfileWithoutName = Omit<PlayerProfile, 'name'>

export type PlayerList = Array<PlayerProfile>

export type PlayersById = Record<PlayerId, PlayerProfile>
