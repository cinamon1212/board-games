export type PlayerSingle = 'Тамик' | 'Илья' | 'Андрей' | 'Соня' | 'Сергей' | 'Лиля' | 'Саша' | 'Славик'

export type PlayersCouple = `${PlayerSingle} и ${PlayerSingle}`

export type Player = PlayersCouple | PlayerSingle

export type PlayersList = Array<Player>
