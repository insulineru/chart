<script setup lang="ts">
import { createChart } from 'lightweight-charts'
import { onMounted } from 'vue';
import data from './data.json'
import { markers } from './txs';
onMounted(() => {

  // @ts-ignore
  const firstChart = createChart('first-chart', { layout: { textColor: 'black', background: { type: 'solid', color: 'white' } }, width: window.innerWidth, height: window.innerHeight, localization: { priceFormatter: (p: number) => p.toFixed(0) } });

  const areaSeries = firstChart.addLineSeries();
  const avgTickSeries = firstChart.addLineSeries({ color: '#111215', title: 'Average 200' });
  const avgTickMinusSeries = firstChart.addLineSeries({ color: 'green', title: 'Average minus 200' });
  // @ts-ignore
  areaSeries.setData(data.map(el => ({ time: el.time, value: el.tick })))
  // @ts-ignore
  avgTickSeries.setData(data.map(el => ({ time: el.time, value: el.avgTick })))
  // @ts-ignore
  avgTickMinusSeries.setData(data.map(el => ({ time: el.time, value: el.avgTickMinus200 })))

  firstChart.timeScale().applyOptions({
    borderColor: '#71649C',
    barSpacing: 1,
    timeVisible: true,
});

  window.addEventListener('resize', () => {
    firstChart.resize(window.innerWidth, window.innerHeight);
  });

  // areaSeries.setMarkers(markers)

})
</script>

<template>
  <div>
    <div id="first-chart" style="height: 100vh; width: 100%;"></div>
  </div>
</template>
