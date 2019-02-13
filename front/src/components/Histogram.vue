<script>
import { Bar } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default {
  name: 'Histogram',
  extends: Bar,
  props: ['data'],
  data () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          datalabels: {
            color: 'white',
            textShadowBlur: 5,
            textShadowColor: 'black',
            font: {
              size: '16',
              weight: 'bolder'
            },
            formatter: function (value, context) {
              if (value !== 0) {
                return value
              } else {
                return ''
              }
            }
          }
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data) {
              return tooltipItems.yLabel
            }
          }
        },
        hover: {
          mode: 'nearest'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              steps: 10,
              stepValue: 5
            }
          }]
        },
        legend: {},
        pointLabelFontFamily: 'Quadon Extra Bold',
        scaleFontFamily: 'Quadon Extra Bold'
      }
    }
  },
  methods: {
    render () {
      this.renderChart({
        type: 'horizontalBar',
        labels: [''],
        datasets: [
          {
            label: 'Moins de 700 Kwh/m²/an',
            data: [this.data[0]],
            backgroundColor: '#40afa8'
          },
          {
            label: 'De 700 à 800 Kwh/m²/an',
            data: [this.data[1]],
            backgroundColor: '#4c87b9'
          },
          {
            label: 'De 800 à 900 Kwh/m²/an',
            data: [this.data[2]],
            backgroundColor: '#E0E1E2'
          },
          {
            label: 'De 900 à 1000 Kwh/m²/an',
            data: [this.data[3]],
            backgroundColor: '#F2C037'
          },
          {
            label: 'Plus de 1000 Kwh/m²/an',
            data: [this.data[4]],
            backgroundColor: '#d05454'
          }
        ]
      }, this.options)
    }
  },
  watch: {
    data (newValue, oldValue) {
      this.render()
    }
  },
  mounted () {
    this.addPlugin(ChartDataLabels)
    // Overwriting base render method with actual data.
    this.render()
  }
}
</script>

<style>
</style>
