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
  {
    title: 'Challengers',
    imgPath: 'challengers.png',
  },
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
    imgPath: 'clank-in-space.jpg',
  },
  {
    games: EVERDELL,
    title: 'Эверделл',
    imgPath: 'everdell.jpg',
  },
  {
    games: BARRAGE,
    title: 'Плотина',
    imgPath: 'barrage.jpg',
  },
  {
    games: KUTNA_HORA,
    title: 'Kutna Hora',
    imgPath: 'kutna-hora.jpg',
  },
  {
    games: EVOLUTION,
    title: 'Эволюция',
    imgPath: 'evolution.jpg',
  },
  {
    title: 'Повелитель Токио: Монстр Бокс',
    imgPath: 'tokyo-lord-monster-box.jpg',
  },
  { title: 'Великий западный путь. Второе издание', imgPath: 'great-western-route.jpg' },
  { title: 'Древний ужас', imgPath: 'ancient-horror.jpg' },
  { title: 'Проект Возрождение', imgPath: 'project-revival.jpg' },
  { title: 'Иниш', imgPath: 'inish.jpg' },
  { title: 'Руины острова арнак', imgPath: 'arnak.jpg' },
  { title: 'Монстер арт', imgPath: 'monster_art.jpg' },
  { title: 'Heat: Pedal to the Metal', imgPath: 'heat-pedal-to-metal.jpg' },
  { title: 'Мертвый сезон', imgPath: 'dead-season.jpg' },
  { title: 'Орлеан', imgPath: 'orlean.jpg' },
  { title: 'Каскадия', imgPath: 'cascadia.png' },
  { title: 'Каркассон: Королевский подарок', imgPath: 'karkasson_king_gift.jpg' },
  { title: 'Unmatched: битва легенд', imgPath: 'unmatched-legend.jpg' },
  { title: 'Море, соль, бумага', imgPath: 'sea-salt-and-paper.jpg' },
  { title: 'Замес', imgPath: 'zames.jpg' },
  { title: 'Имаджинариум', imgPath: 'imadginarium.jpg' },
  { title: 'Манчкин', imgPath: 'munchkin.jpg' },
  { title: 'ЭСБМ. Битва на горе Черепламени', imgPath: 'battle-wizards-chereplameni.jpg' },
  { title: 'ЭСБМ. В грибучем болоте', imgPath: 'battle-wizards-murdershroom-marsh.webp' },
  { title: '7 чудес', imgPath: '7-wonders.jpg' },
  { title: 'Палео', imgPath: 'paleo.jpg' },
  { title: 'Крылья', imgPath: 'winspawn.jpg' },
]
