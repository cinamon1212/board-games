export const getColorOrGradient = (color?: string) => {
  const splitted = color?.split(', ')
  const gradient = `linear-gradient(90deg, ${color})`

  const isGradient = splitted?.length !== 1

  color = splitted?.length === 1 && color ? color : gradient

  return { color, isGradient }
}
