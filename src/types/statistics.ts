import { GameParams } from './game'
import { PlayerId, PlayerProfile, PlayerProfileWithoutName } from './player'

/**
 * Результат одной партии для одного игрока
 * - number: для числовых игр (очки)
 * - boolean: для булевых игр (победа/поражение)
 */
export type SingleGameResult = number | boolean

/**
 * Результат игры (может быть одиночным значением или массивом)
 * Используется для поддержки игр с несколькими результатами за партию
 */
export type GameResult = SingleGameResult | Array<SingleGameResult>

/**
 * Дженерик для объектов, где ключи - это ID игроков или команд
 * Все поля опциональны, так как не все игроки могут участвовать в каждой партии
 */
export type PlayerObj<T> = Partial<Record<string, T>>

export type TeamScore = {
  players: Array<PlayerId>
  score: number
}

/**
 * Объект с опциональным полем params для хранения параметров партии
 * (например, расширение, режим игры и т.д.)
 */
export type ParamObj = Partial<Record<'params', GameParams>>

/**
 * Результаты одной партии для всех игроков
 * Содержит результаты каждого игрока и опциональные параметры партии
 */
export type IndividualPlayerScore<T extends GameResult> = PlayerObj<T> &
  ParamObj

export type TeamPlayerScore = ParamObj & {
  teams: Array<TeamScore>
}

export type PlayerScore<T extends GameResult> =
  | IndividualPlayerScore<T>
  | TeamPlayerScore

/**
 * Массив результатов всех сыгранных партий игры
 * Каждый элемент представляет одну партию с результатами всех участников
 */
export type PlayerScores<T extends GameResult> = Array<PlayerScore<T>>

/**
 * Статистика по одному игроку для отображения в таблице и графиках
 * Содержит все результаты игрока, вычисленные метрики и профиль игрока
 */
export type PersonMapItem<T extends SingleGameResult> = {
  /** Массив всех результатов игрока в партиях */
  scores: Array<T>
  /** Общее количество сыгранных партий */
  scoresCount: number
  /** Процент побед в строковом формате (например, "75%") */
  winRate: string
  /** Средний результат (только для числовых игр) */
  avg?: number
  /** Минимальный результат (только для числовых игр) */
  minScore?: number
  /** Максимальный результат (только для числовых игр) */
  maxScore?: number
} & PlayerProfile

/**
 * Карта статистики всех игроков
 * Ключи - ID игроков или команд, значения - их статистика
 */
export type PersonsMap<T extends SingleGameResult> = PlayerObj<PersonMapItem<T>>

/**
 * Упрощенная статистика по одному игроку для конкретной партии
 * Используется для отображения результатов отдельной партии
 */
export type PersonMapGameItem<T extends SingleGameResult> = {
  /** Массив результатов игрока (может содержать несколько значений) */
  scores: Array<T>
  /** Количество побед в этой партии (для булевых игр) */
  winCount: number
} & PlayerProfileWithoutName & {
    name: string
  }

/**
 * Карта упрощенной статистики всех игроков для конкретной партии
 * Ключи - ID игроков или команд, значения - их результаты в этой партии
 */
export type PersonsMapGames<T extends SingleGameResult> = PlayerObj<
  PersonMapGameItem<T>
>
