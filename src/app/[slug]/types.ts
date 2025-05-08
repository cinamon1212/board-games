import { PlayerScores } from '@/types'

export type NumGamePageProps = {
  numGames: PlayerScores<number>
  title: string
}

export type BoolGamePageProps = {
  boolGames: PlayerScores<boolean>
  title: string
}
