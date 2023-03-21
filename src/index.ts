import {ema} from "src/ema.js"

const zlema = (data: number[] = [], length: number): (undefined | number)[] => {
  if (length <= 1 || length > data.length) return data

  const lag = Math.floor((length - 1) / 2)
  const zlema_data = data.map((value, i) => {
    return value + (value - data[i - lag])
  })

  const zlemas = ema(
    zlema_data.filter((v) => v),
    length
  )

  return zlemas
}

export {zlema}
