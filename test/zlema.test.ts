// @ts-ignore
import {zlema} from "./src/index.ts"

it("should return untouched array when length is less than 1", () => {
  expect(zlema([1, 2, 3], 1)).toEqual([1, 2, 3])
  expect(zlema([1, 2, 3], 0.5)).toEqual([1, 2, 3])
  expect(zlema([1, 2, 3], 0.1)).toEqual([1, 2, 3])
})

it("should return empty array when length is larger than array length", () => {
  expect(zlema([1, 2, 3], 4)).toEqual([undefined, undefined, undefined])
  expect(zlema([1], 2)).toEqual([undefined])
  expect(zlema([], 1)).toEqual([])
})

it("should return untouched array when length is equal to 1", () => {
  expect(zlema([1, 2, 3], 1)).toEqual([1, 2, 3])
  expect(zlema([1], 1)).toEqual([1])
  expect(zlema([], 1)).toEqual([])
})

it("should match expected output", () => {
  expect(zlema([1, 2, 3, 4, 5], 4)).toEqual([undefined, 3, 3.4, 4.04, 4.824])
  expect(zlema([1, 2, 3, 4, 5], 5)).toEqual([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ])
  expect(zlema([1, 2, 3, 4, 5, 6], 5)).toEqual([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ])
  expect(zlema([1, 2, 3, 4, 5, 6], 6)).toEqual([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ])
  expect(zlema([1, 2, 3, 4, 5, 6], 7)).toEqual([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ])
  expect(zlema([1, 2, 3, 4, 5, 6, 7], 5)).toEqual([
    undefined,
    undefined,
    5,
    5.333333333333334,
    5.888888888888889,
    6.5925925925925934,
    7.395061728395063,
  ])
  expect(zlema([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toEqual([
    undefined,
    undefined,
    undefined,
    7,
    7.25,
    7.6875,
    8.265625,
    8.94921875,
    9.7119140625,
    10.533935546875,
  ])
})
