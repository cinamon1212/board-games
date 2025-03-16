import { PlayerScores } from './statistics'

export type GameTitles =
  | 'Ticket to Ride: Европа'
  | 'Challengers'
  | 'Ticket to Ride: Азия'
  | 'Кланк!'
  | 'Кланк! В! Космосе!'
  | 'Эверделл'
  | 'Плотина'
  | 'Kutna Hora'
  | 'Эволюция'

export type GameInfo = {
  imgPath?: string | null
  games?: PlayerScores
  title: GameTitles
}

export type Games = Array<GameInfo>
