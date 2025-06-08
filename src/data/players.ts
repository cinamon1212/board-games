import { PlayerProfile, PlayerList, Player, PlayersByName } from '@/types'

const ILIA: PlayerProfile = {
  id: 1,
  color: 'red',
  img: '',
  name: 'Илья',
}

const LILIA: PlayerProfile = {
  id: 2,
  color: 'green',
  img: '',
  name: 'Лиля',
}

const SASHA: PlayerProfile = {
  id: 3,
  color: 'blue',
  img: '',
  name: 'Саша',
}

const SERGEI: PlayerProfile = {
  id: 4,
  color: 'yellow',
  img: '',
  name: 'Сергей',
}

const SONYA: PlayerProfile = {
  id: 5,
  color: 'pink',
  img: '',
  name: 'Соня',
}

const TAMIK: PlayerProfile = {
  id: 6,
  color: 'orange',
  img: '',
  name: 'Тамик',
}

const ANDREW: PlayerProfile = {
  id: 7,
  color: 'red',
  img: '',
  name: 'Андрей',
}

const SLAVA: PlayerProfile = {
  id: 8,
  color: 'blue',
  img: '',
  name: 'Славик',
}

export const PLAYERS_LIST: PlayerList = [ILIA, LILIA, SASHA, SERGEI, SONYA, TAMIK, ANDREW, SLAVA]

export const PLAYERS_BY_NAME = PLAYERS_LIST.reduce((acc, { name, ...fields }) => {
  return (acc = { ...acc, [name]: { ...fields } })
}, {}) as PlayersByName
