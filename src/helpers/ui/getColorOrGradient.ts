/**
 * Определяет, является ли цвет градиентом или обычным цветом.
 * Если цвет содержит запятую, создает CSS градиент.
 * Иначе возвращает исходный цвет.
 *
 * @param color - Цвет в формате "#hex" или "color1, color2" для градиента
 * @returns Объект с цветом (или градиентом) и флагом isGradient
 */
export const getColorOrGradient = (color?: string) => {
  const splitted = color?.split(', ')
  const gradient = `linear-gradient(90deg, ${color})`

  const isGradient = splitted?.length !== 1

  color = splitted?.length === 1 && color ? color : gradient

  return { color, isGradient }
}
