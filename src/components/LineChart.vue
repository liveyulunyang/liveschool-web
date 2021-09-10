<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    name: 'LineChart',
    props: ['chartdata', 'options'],
    data () {
      return {
        bgGradient: [
          {
            red: '255',
            green: '255',
            blue: '255'
          }
        ]
      }
    },
    mounted () {
      this.constructGradients(this.bgGradient)

      this.renderChart(this.chartdata, this.options)
    },
    methods: {
      constructGradients(gradients) {
        gradients.forEach((gradient, index) => {
          let firstGradient = this.$refs.canvas
              .getContext('2d')
              .createLinearGradient(0, 0, 0, 450)

          firstGradient.addColorStop(0, 'rgba('+gradient.red+','+gradient.green+','+gradient.blue+',0.4)')
          firstGradient.addColorStop(0.3, 'rgba('+gradient.red+','+gradient.green+','+gradient.blue+',0.15)')
          firstGradient.addColorStop(0.5, 'rgba('+gradient.red+','+gradient.green+','+gradient.blue+',0.05)')
          firstGradient.addColorStop(1, 'rgba('+gradient.red+','+gradient.green+','+gradient.blue+',0)')
          this.chartdata.datasets[index].backgroundColor = firstGradient
        })
      }
    }
  }
</script>