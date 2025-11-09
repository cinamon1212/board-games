/**
 * Удаляет расширение файла и префикс папки из пути к изображению.
 * Используется для создания URL пути игры из имени файла изображения.
 * Поддерживает пути с подпапками (например, "numeric/cascadia.png" -> "cascadia").
 *
 * @param path - Путь к изображению (например, "cascadia.png" или "numeric/cascadia.png")
 * @returns Имя файла без расширения и без папки (например, "cascadia")
 */
export const getImgPathWithoutExt = (path: string) => {
  // Удаляем расширение файла
  const lastDotIndex = path.lastIndexOf('.')
  const pathWithoutExt =
    lastDotIndex !== -1 ? path.slice(0, lastDotIndex) : path

  // Удаляем префикс папки (numeric/ или boolean/)
  const lastSlashIndex = pathWithoutExt.lastIndexOf('/')
  return lastSlashIndex !== -1
    ? pathWithoutExt.slice(lastSlashIndex + 1)
    : pathWithoutExt
}
