<script setup lang="ts">
import { createChart } from 'lightweight-charts'
import { onMounted } from 'vue';
import data from './data.json'
import { markers } from './txs';
onMounted(() => {

  // @ts-ignore
  const firstChart = createChart('first-chart', { layout: { textColor: 'black', background: { type: 'solid', color: 'white' } }, width: window.innerWidth, height: window.innerHeight, localization: { priceFormatter: (p: number) => p.toFixed(0) } });

  const areaSeries = firstChart.addAreaSeries({ lineColor: '#2962FF', topColor: '#2962FF', bottomColor: 'rgba(41, 98, 255, 0.28)' });

  // @ts-ignore
  areaSeries.setData(data)

  firstChart.timeScale().applyOptions({
    borderColor: '#71649C',
    barSpacing: 1,
    timeVisible: true,
});

  window.addEventListener('resize', () => {
    firstChart.resize(window.innerWidth, window.innerHeight);
  });

  areaSeries.setMarkers(markers)

})
</script>

<template>
  <div>
    <div id="first-chart" style="height: 100vh; width: 100%;"></div>
  </div>
</template>
