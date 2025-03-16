import { Games } from '@/types'
import {
  BARRAGE,
  CLANK,
  CLANK_IN_SPACE,
  EVERDELL,
  EVOLUTION,
  KUTNA_HORA,
  TICKET_TO_RIDE_ASIA,
  TICKET_TO_RIDE_EUROPE,
} from './games-single-statistics'

export const GAMES_LIST: Games = [
  { title: 'Challengers', imgPath: 'challengers.png' },
  {
    games: TICKET_TO_RIDE_EUROPE,
    imgPath: 'ticket-to-ride-europe.jpg',
    title: 'Ticket to Ride: Европа',
  },
  {
    games: TICKET_TO_RIDE_ASIA,
    imgPath: 'ticket-to-ride-asia.jpg',
    title: 'Ticket to Ride: Азия',
  },
  {
    games: CLANK,
    title: 'Кланк!',
    imgPath: 'clank.png',
  },
  {
    games: CLANK_IN_SPACE,
    title: 'Кланк! В! Космосе!',
  },
  {
    games: EVERDELL,
    title: 'Эверделл',
  },
  {
    games: BARRAGE,
    title: 'Плотина',
  },
  {
    games: KUTNA_HORA,
    title: 'Kutna Hora',
  },
  {
    games: EVOLUTION,
    title: 'Эволюция',
  },
]
