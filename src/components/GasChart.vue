<script>
import VueApexCharts from "vue3-apexcharts"

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      options: {
        chart: {
          id: "vuechart",
        },
        xaxis: {
          categories: [
            "01 Aug",
            "02 Aug",
            "03 Aug",
            "04 Aug",
            "05 Aug",
            "06 Aug",
            "07 Aug",
          ],
        },
      },
      series: [
        {
          name: "Gwei",
          data: [30, 40, 45, 50, 49, 60, 70],
        },
      ],
    }
  },
}
</script>

<template>
  <apexchart
    class="chart"
    width="500"
    type="line"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<style></style>
