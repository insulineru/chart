<script setup lang="ts">
import { createChart } from 'lightweight-charts'
import { onMounted } from 'vue';
import data from './data.json'
import { markers } from './txs';
onMounted(() => {

  const firstChart = createChart('first-chart', { layout: { textColor: 'black', background: { type: 'solid', color: 'white' } }, width: window.innerWidth, height: window.innerHeight, localization: { priceFormatter: (p: number) => p.toFixed(0) } });

  const areaSeries = firstChart.addAreaSeries({ lineColor: '#2962FF', topColor: '#2962FF', bottomColor: 'rgba(41, 98, 255, 0.28)' });

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

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
