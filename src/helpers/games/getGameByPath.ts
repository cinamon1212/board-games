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
  return GAMES_LIST.filter(({ imgPath }) => {
    const pathWithoutExt = getImgPathWithoutExt(imgPath)
    return pathWithoutExt === path.slice(1)
  })[0]
}
