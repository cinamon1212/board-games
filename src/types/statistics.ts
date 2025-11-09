import { GameParams } from './game'
import { Player, PlayerProfileWithoutName } from './player'

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
 * Дженерик для объектов, где ключи - это имена игроков
 * Все поля опциональны, так как не все игроки могут участвовать в каждой партии
 */
export type PlayerObj<T> = Partial<Record<Player, T>>

/**
 * Объект с опциональным полем params для хранения параметров партии
 * (например, расширение, режим игры и т.д.)
 */
export type ParamObj = Partial<Record<'params', GameParams>>

/**
 * Результаты одной партии для всех игроков
 * Содержит результаты каждого игрока и опциональные параметры партии
 */
export type PlayerScore<T extends GameResult> = PlayerObj<T> & ParamObj

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
} & PlayerProfileWithoutName

/**
 * Карта статистики всех игроков
 * Ключи - имена игроков, значения - их статистика
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
} & PlayerProfileWithoutName

/**
 * Карта упрощенной статистики всех игроков для конкретной партии
 * Ключи - имена игроков, значения - их результаты в этой партии
 */
export type PersonsMapGames<T extends SingleGameResult> = PlayerObj<PersonMapGameItem<T>>
