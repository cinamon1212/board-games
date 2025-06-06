import { PlayerScores } from './statistics'

export type GameTitles =
  | 'Ticket to Ride: Европа'
  | 'Challengers'
  | 'Ticket to Ride: Азия'
  | 'Ticket to Ride: Азия. Шелковый путь'
  | 'Кланк!'
  | 'Кланк! В! Космосе!'
  | 'Эверделл'
  | 'Плотина'
  | 'Kutna Hora'
  | 'Эволюция'
  | 'Повелитель Токио: Монстр Бокс'
  | 'Великий западный путь. Второе издание'
  | 'Древний ужас'
  | 'Проект Возрождение'
  | 'Иниш'
  | 'Руины острова арнак'
  | 'Монстер арт'
  | 'Heat: Pedal to the Metal'
  | 'Мертвый сезон'
  | 'Орлеан'
  | 'Каскадия'
  | 'Каркассон: Королевский подарок'
  | 'Unmatched: битва легенд'
  | 'Море, соль, бумага'
  | 'Замес'
  | 'Имаджинариум'
  | 'Манчкин'
  | 'ЭСБМ. В грибучем болоте'
  | 'ЭСБМ. Битва на горе Черепламени'
  | '7 чудес'
  | 'Палео'
  | 'Крылья'

export type GameInfo = {
  imgPath: string
  games: PlayerScores<number | boolean>
  title: GameTitles
  isBoolean?: boolean
}

export type Games = Array<GameInfo>
