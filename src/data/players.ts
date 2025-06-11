import { PlayerProfile, PlayerList, PlayersByName } from '@/types'

const ILIA: PlayerProfile = {
  id: 1,
  color: '#e84275',
  img: '',
  name: 'Илья',
}

const LILIA: PlayerProfile = {
  id: 2,
  color: '#08b6ff',
  img: '',
  name: 'Лиля',
}

const SASHA: PlayerProfile = {
  id: 3,
  color: '#ec8758',
  img: '',
  name: 'Саша',
}

const SERGEI: PlayerProfile = {
  id: 4,
  color: '#a5e66d',
  img: '',
  name: 'Сергей',
}

const SONYA: PlayerProfile = {
  id: 5,
  color: '#ffaff4',
  img: '',
  name: 'Соня',
}

const TAMIK: PlayerProfile = {
  id: 6,
  color: '#4c4cff',
  img: '',
  name: 'Тамик',
}

const ANDREW: PlayerProfile = {
  id: 7,
  color: '#f8efaf',
  img: '',
  name: 'Андрей',
}

const SLAVA: PlayerProfile = {
  id: 8,
  color: '#0fffca',
  img: '',
  name: 'Славик',
}

const OLGA: PlayerProfile = {
  id: 9,
  color: '#df4550',
  img: '',
  name: 'Ольга',
}

const LENA: PlayerProfile = {
  id: 10,
  color: '#fffc1f',
  img: '',
  name: 'Лена',
}

export const PLAYERS_LIST: PlayerList = [ILIA, LILIA, SASHA, SERGEI, SONYA, TAMIK, ANDREW, SLAVA, OLGA, LENA]

export const PLAYERS_BY_NAME = PLAYERS_LIST.reduce((acc, { name, ...fields }) => {
  return (acc = { ...acc, [name]: { ...fields } })
}, {}) as PlayersByName
