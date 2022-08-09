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
            "07 May",
            "12 May",
            "17 May",
            "22 May",
            "27 May",
            "01 Jun",
            "06 Jun",
            "11 Jun",
            "16 Jun",
            "21 Jun",
            "26 Jun",
            "01 Jul",
            "06 Jul",
            "11 Jul",
            "16 Jul",
            "21 Jul",
            "27 Jul",
            "01 Aug",
            "06 Aug",
          ],
        },
      },
      series: [
        {
          name: "Gwei",
          data: [
            55, 68, 90, 74, 79, 61, 47, 34, 64, 85, 75, 68, 90, 94, 89, 84, 67,
            54, 32,
          ],
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
