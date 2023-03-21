// @ts-ignore
import {ema} from "src/ema.ts"

export const zlema = (
  data: number[] = [],
  length: number
): (undefined | number)[] => {
  if (length <= 1) return data
  if (length > data.length) return new Array(data.length)

  const lag = Math.floor((length - 1) / 2)
  const zlema_data = data
    .map((value, index) => {
      return value + (value - data[index - lag])
    })
    .filter((value) => value)

  const zlemas = ema(zlema_data, length)
  const empty_space = new Array(lag).fill(undefined)

  return empty_space.concat(zlemas)
}
