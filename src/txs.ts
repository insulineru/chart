import { SeriesMarker, Time, UTCTimestamp } from "lightweight-charts";

const data = [
    {
        "time": 1665763722,
        "name": "decreaseLiquidity",

    },
    {
        "time": 1665763226,
      "name": "mint",
        "text": '204450 / 204460'
    },
    {
        "time": 1665759760,
        "name": "decreaseLiquidity"
    },
    {
        "time": 1665759626,
      "name": "mint",
        "text": '204450 / 204460'
    },
    {
        "time": 1665756752,
        "name": "decreaseLiquidity"
    },
    {
        "time": 1665756180,
        "name": "decreaseLiquidity"
    },
    {
        "time": 1665756048,
      "name": "mint",
        "text": '204430 / 204440'
    },
    {
        "time": 1665756038,
      "name": "mint",
        "text": '204420 / 204430'
    },
    {
        "time": 1665752427,
        "name": "decreaseLiquidity"
    },
    {
        "time": 1665748824,
      "name": "mint",
        "text": '204420 / 204430'
    }
]

const markers = data.map<SeriesMarker<Time>>(el => ({
  time: el.time as UTCTimestamp,
  position: 'inBar',
  color: 'black',
  shape: 'circle',
  text: `${el.name} ${el.text ? el.text : ''}`,
  size: 1,
}));

console.log(data)

export { markers}
