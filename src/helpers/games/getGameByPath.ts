import { GAMES_LIST } from '@/data'
import { getImgPathWithoutExt } from './getImgPathWithoutExt'

/**
 * Находит игру по URL пути (slug).
 * Сравнивает путь без расширения изображения с переданным путем.
 *
 * @param path - URL путь игры (например, "/cascadia")
 * @returns Объект игры или undefined, если игра не найдена
 */
export const getGameByPath = (path: string) => {
  // Первый сегмент пути без ведущих/завершающих слэшей (например "/foo/" -> "foo")
  const slug = path.split('/').filter(Boolean)[0]
  if (slug === undefined) {
    return undefined
  }

  return GAMES_LIST.find(({ imgPath }) => {
    const pathWithoutExt = getImgPathWithoutExt(imgPath)
    return pathWithoutExt === slug
  })
}
