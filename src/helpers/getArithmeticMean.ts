export const getArithmeticMean = (scores: Array<number>) => {
  const sum = scores.reduce((acc, score) => (acc += score), 0)
  return Number((sum / scores.length).toFixed(0))
}
