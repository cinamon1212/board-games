import { GameInfo, PlayerScores } from '@/types'

const TICKET_TO_RIDE_EUROPE_GAMES: PlayerScores = [
  { Соня: 150 },
  { Соня: 128, Андрей: 140, Сергей: 121, Лиля: 109 },
  { Илья: 134, Андрей: 114, Соня: 114, Лиля: 111, Саша: 96 },
  { Илья: 116, Андрей: 117, Соня: 128, Лиля: 112, Сергей: 85 },
]

const TICKET_TO_RIDE_ASIA_GAMES: PlayerScores = [
  { 'Андрей и Сергей': 150, 'Илья и Тамик': 188 },
  { 'Илья и Андрей': 128, 'Лиля и Соня': 184 },
  { 'Илья и Тамик': 208, 'Андрей и Соня': 155, 'Лиля и Сергей': 150 },
  { 'Илья и Тамик': 186, 'Лиля и Славик': 167, 'Андрей и Соня': 157 },
]

const TICKET_TO_RIDE_ASIA_SILK_GAMES: PlayerScores = [{ Андрей: 113, Соня: 109, Илья: 106, Тамик: 89, Лиля: 69 }]

export const TICKET_TO_RIDE_EUROPE: GameInfo = {
  games: TICKET_TO_RIDE_EUROPE_GAMES,
  imgPath: 'ticket-to-ride-europe.jpg',
  title: 'Ticket to Ride: Европа',
}

export const TICKET_TO_RIDE_ASIA: GameInfo = {
  games: TICKET_TO_RIDE_ASIA_GAMES,
  imgPath: 'ticket-to-ride-asia.jpg',
  title: 'Ticket to Ride: Азия',
}

export const TICKET_TO_RIDE_ASIA_SILK: GameInfo = {
  games: TICKET_TO_RIDE_ASIA_SILK_GAMES,
  imgPath: 'ticket-to-ride-asia-silk.jpg',
  title: 'Ticket to Ride: Азия. Шелковый путь',
}
