export const getColorOrGradient = (color?: string) => {
  const splitted = color?.split(', ')
  const gradient = `linear-gradient(90deg, ${color})`

  color = splitted?.length === 1 && color ? color : gradient

  return color
}
