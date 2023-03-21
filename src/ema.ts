export const ema = (
  data: number[] = [],
  length: number
): (undefined | number)[] => {
  if (length <= 1) return data
  if (length > data.length) return new Array(data.length)

  const alpha = 2 / (length + 1)
  const emas = [data.shift()!]

  data.forEach((value, index) => {
    emas.push(value * alpha + emas[index] * (1 - alpha))
  })

  return emas
}
