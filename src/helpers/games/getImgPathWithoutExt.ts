/**
 * Удаляет расширение файла из пути к изображению.
 * Используется для создания URL пути игры из имени файла изображения.
 *
 * @param path - Путь к изображению (например, "cascadia.png")
 * @returns Путь без расширения (например, "cascadia")
 */
export const getImgPathWithoutExt = (path: string) => path.split('.')[0]
