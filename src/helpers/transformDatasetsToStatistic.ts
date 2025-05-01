import { PlayerWithMaxArithmeticMean, TransformDatasetsToStatistic } from '@/types'
import { getArithmeticMean } from './getArithmeticMean'

export const transformDatasetsToStatistic: TransformDatasetsToStatistic = (datasets) => {
  let playerWithMaxArithmeticMean: PlayerWithMaxArithmeticMean = {
    arithmeticMean: 0,
    name: null,
    color: '',
  }

  const statisticArr = datasets.map(({ label, data, borderColor }) => {
    const scores = data.slice(1)
    const arithmeticMean = getArithmeticMean(scores)

    if (arithmeticMean > playerWithMaxArithmeticMean.arithmeticMean) {
      const newPlayerObj = {
        name: label,
        color: borderColor,
        arithmeticMean,
      }

      playerWithMaxArithmeticMean = newPlayerObj
    }

    return {
      name: label,
      scores,
      arithmeticMean,
      color: borderColor,
    }
  })

  return { statisticArr, ...playerWithMaxArithmeticMean }
}
