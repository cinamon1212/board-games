import { GamesStatistics } from '@/types'

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

export const GAMES_STATISTICS: GamesStatistics = {
  'Ticket to Ride: Европа': TICKET_TO_RIDE_EUROPE,
  'Ticket to Ride: Азия': TICKET_TO_RIDE_ASIA,
  'Кланк!': CLANK,
  'Кланк! В! Космосе!': CLANK_IN_SPACE,
  Эверделл: EVERDELL,
  Плотина: BARRAGE,
  'Kutna Hora': KUTNA_HORA,
  Эволюция: EVOLUTION,
}
