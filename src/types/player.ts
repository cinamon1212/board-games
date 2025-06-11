export type PlayerSingle = 'Тамик' | 'Илья' | 'Андрей' | 'Соня' | 'Сергей' | 'Лиля' | 'Саша' | 'Славик' | 'Лена' | 'Ольга'

export type PlayersCouple = `${PlayerSingle} и ${PlayerSingle}`

export type Player = PlayersCouple | PlayerSingle

export type PlayerProfile = {
  id: number
  color: string
  name: Player
  img: string
}

export type PlayerProfileWithoutName = Omit<PlayerProfile, 'name'>

export type PlayerList = Array<PlayerProfile>

export type PlayersByName = Record<Player, PlayerProfileWithoutName>