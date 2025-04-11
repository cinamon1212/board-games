import { GAMES_LIST } from '@/data'
import { getImgPathWithoutExt } from './getImgPathWithoutExt'

export const getGameByPath = (path: string) => {
  return GAMES_LIST.filter(({ imgPath }) => {
    const pathWithoutExt = getImgPathWithoutExt(imgPath)
    return pathWithoutExt === path.slice(1)
  })[0]
}
