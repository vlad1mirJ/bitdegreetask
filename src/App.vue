<script setup>
import GasCard from "./components/GasCard.vue"
import GasChart from "./components/GasChart.vue"
import GasChartMonth from "./components/GasChartMonth.vue"
import GasChartThreeMoths from "./components/GasChartThreeMoths.vue"

import data from "../data.js"
</script>

<script>
export default {
  data() {
    return {
      chartTimeframe: "7d",
    }
  },
}
</script>

<template>
  <header class="header">
    <h1>Eth Gas trcaker</h1>
  </header>

  <main>
    <div class="tracker">
      <GasCard :data="data.ethLow" priceClass="low" />
      <GasCard :data="data.ethMid" priceClass="avarage" />
      <GasCard :data="data.ethHigh" priceClass="high" />
    </div>
    <div class="chart">
      <div class="timeframe">
        <div
          @click="chartTimeframe = '7d'"
          :class="['toggle', chartTimeframe == '7d' ? 'current' : '']"
        >
          <span>7D</span>
        </div>
        <div
          @click="chartTimeframe = '30d'"
          :class="['toggle', chartTimeframe == '30d' ? 'current' : '']"
        >
          <span>30D</span>
        </div>
        <div
          @click="chartTimeframe = '90d'"
          :class="['toggle', chartTimeframe == '90d' ? 'current' : '']"
        >
          <span>90D</span>
        </div>
      </div>

      <GasChart v-if="chartTimeframe == '7d'" />
      <GasChartMonth v-if="chartTimeframe == '30d'" />
      <GasChartThreeMoths v-if="chartTimeframe == '90d'" />
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 0 0 1rem 0;
}

.chart {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
}

.timeframe {
  display: flex;
  gap: 1rem;
}

.current {
  background-color: rgb(50, 150, 250);
}

.toggle {
  border: 1px solid #e7eaf3;
  border-radius: 0.5rem;
  max-width: 50px;
  text-align: center;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.heaeder {
  width: 100vw;
}

.tracker {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

@media (max-width: 780px) {
  .tracker {
    flex-direction: column;
  }
} ;
</style>
