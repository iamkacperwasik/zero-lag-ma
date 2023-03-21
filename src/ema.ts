export const ema = (
  data: number[] = [],
  length: number
): (undefined | number)[] => {
  if (length <= 1 || length > data.length) return data

  const alpha = 2 / (length + 1)
  const emas = [data[0]]

  for (var i = 1; i < data.length; i++) {
    emas.push(data[i] * alpha + emas[i - 1] * (1 - alpha))
  }

  return emas
}
