/**
 * Вычисляет среднее арифметическое значение массива чисел.
 * Результат округляется до целого числа.
 *
 * @param scores - Массив числовых значений
 * @returns Среднее арифметическое, округленное до целого
 */
export const getArithmeticMean = (scores: Array<number>) => {
  const sum = scores.reduce((acc, score) => (acc += score), 0)
  return Number((sum / scores.length).toFixed(0))
}

