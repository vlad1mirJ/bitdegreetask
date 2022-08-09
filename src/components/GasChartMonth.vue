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
            "09 Jul",
            "10 Jul",
            "11 Jul",
            "12 Jul",
            "13 Jul",
            "14 Jul",
            "15 Jul",
            "16 Jul",
            "17 Jul",
            "18 Jul",
            "19 Jul",
            "20 Jul",
            "21 Jul",
            "22 Jul",
            "23 Jul",
            "24 Jul",
            "25 Jul",
            "26 Jul",
            "27 Jul",
            "28 Jul",
            "29 Jul",
            "30 Jul",
            "31 Jul",
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
          data: [
            30, 40, 45, 50, 49, 60, 70, 80, 96, 85, 63, 54, 67, 55, 43, 40, 45,
            56, 49, 64, 69, 54, 40, 45, 53, 49, 63, 75, 50, 40,
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
