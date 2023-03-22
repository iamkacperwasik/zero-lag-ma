### About "Zero lag moving average"

The idea is to do a regular exponential moving average (EMA) calculation but on a de-lagged data instead of doing it on the regular data. Data is de-lagged by removing the data from "lag" days ago thus removing (or attempting to) the cumulative effect of the moving average.

Source: https://en.wikipedia.org/wiki/Zero_lag_exponential_moving_average

### Install

```bash
$ npm i zero-lag-ma
```

or

```bash
$ yarn add zero-lag-ma
```

### Usage

```js
import {zlema} from "zero-lag-ma"

zlema([1, 2, 3, 4, 5], 2) // [1, 1.66, 2.55, 3.51, 4.50]
zlema([1, 2, 3, 4, 5], 4)) // [undefined, 3, 3.4, 4.04, 4.824]

zlema([1, 2, 3, 4, 5], 5)) // [5x undefined]
zlema([1, 2, 3, 4, 5, 6, 7], 5)) // [undefined, undefined, 5, 5.33, 5.88, 6.59, 7.39]

// When length is less than 1 (or equal), it returns untouched array
zlema([1, 2, 3, 4, 5], 0.5) // [1, 2, 3, 4, 5]

// When length is bigger than length of array, it returns empty array
zlema([1, 2, 3, 4, 5], 200) // [5x undefined]
```

### License

[MIT](./LICENSE)
