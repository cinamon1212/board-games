import { PlayerScores } from "@/types"

export type NumGamePageProps = {
  numGames: PlayerScores<number>
  title: string
}

export type BoolGamePageProps = {
  title: string
}