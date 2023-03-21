// @ts-ignore
import {ema} from "./src/ema.ts"

it("should return untouched array when length is less than 1", () => {
  expect(ema([1, 2, 3], 1)).toEqual([1, 2, 3])
  expect(ema([1, 2, 3], 0.5)).toEqual([1, 2, 3])
  expect(ema([1, 2, 3], 0.1)).toEqual([1, 2, 3])
})

it("should return empty array when length is larger than array length", () => {
  expect(ema([1, 2, 3], 4)).toEqual([undefined, undefined, undefined])
  expect(ema([1], 2)).toEqual([undefined])
  expect(ema([], 1)).toEqual([])
})

it("should return untouched array when length is equal to 1", () => {
  expect(ema([1, 2, 3], 1)).toEqual([1, 2, 3])
  expect(ema([1], 1)).toEqual([1])
  expect(ema([], 1)).toEqual([])
})

it("should match expected output", () => {
  expect(ema([1, 2, 3], 2)).toEqual([
    1, 1.6666666666666665, +2.5555555555555554,
  ])
  expect(ema([1, 2, 3, 4, 5], 3)).toEqual([1, 1.5, 2.25, 3.125, 4.0625])
})
