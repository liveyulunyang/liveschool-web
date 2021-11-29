<script>
  import { Radar } from 'vue-chartjs'

  export default {
    extends: Radar,
    name: 'Radarchart',
    props: {
      // chartdata: {
      //   type: Object
      // }
    },
    data () {
      return {
        chartData: {
          labels: ['口說', '聽力', '句型組織', '理解', '參與度'],
          datasets: [
            {
              label: '能力雷達圖',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [99, 88, 90, 88, 99]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
            align: 'end',
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              padding: 20,
              fontColor: "#B0BAC9"
            }
          }
        }
      }
    },
    mounted () {
      if (this.chartData && this.options) {
        this.renderChart(this.chartData, this.options)
      }
    },
    methods: {
    }
  }
</script>