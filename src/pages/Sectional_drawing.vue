<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">能力剖面圖</h1>
          </div>
        </div>
        <div class="content">
          <section class="mb-10 mx-10">
            <line-chart :chartdata="datacollectionLinear" :options="lineOptions" :bg-gradient="gradients"/>
          </section>
        </div>
    </div>
  </main>
</template>

<script>
  import LineChart from "../components/LineChart"
  export default {
    name: "Live_class",
    components: {
      LineChart
    },
    data () {
      return {
        trips: [
          {
            start: 'Chrysler Building',
            end: 'The High Line',
            price: '$28',
            date: new Date('06/03/2018'),
            time: '24min'
          },
          {
            start: 'Theatre District',
            end: 'Prospect Park',
            price: '$34',
            date: new Date('06/03/2018'),
            time: '21min'
          },
          {
            start: 'Brooklyn Musuem',
            end: 'Time Square',
            price: '$39',
            date: new Date('06/04/2018'),
            time: '45min'
          },
          {
            start: 'Brookfield Place',
            end: 'Chelse Market',
            price: '$29',
            date: new Date('06/04/2018'),
            time: '14min'
          },
          {
            start: 'Smorgasburg',
            end: 'Yankee Stadium',
            price: '$52',
            date: new Date('06/05/2018'),
            time: '52min'
          },
          {
            start: 'Union Square',
            end: 'The Cloisters',
            price: '$44',
            date: new Date('06/03/2018'),
            time: '22min'
          }
        ],
        datacollectionLinear: {
          labels: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
          datasets: [
            {
              label: '',
              borderColor: '#2E5BFF',
              pointBackgroundColor: '#FFF',
              fill: true,
              lineTension: 0,
              data: [
                {
                  x: 0,
                  y: 8000
                },
                {
                  x: 1,
                  y: 11500
                },
                {
                  x: 2,
                  y: 9800
                },
                {
                  x: 3,
                  y: 15100
                },
                {
                  x: 4,
                  y: 23000
                },
                {
                  x: 5,
                  y: 22000
                },
                {
                  x: 6,
                  y: 16000
                },
                {
                  x: 7,
                  y: 13800
                },
                {
                  x: 8,
                  y: 16300
                },
                {
                  x: 9,
                  y: 17000
                },
                {
                  x: 10,
                  y: 24500
                },
                {
                  x: 11,
                  y: 19000
                },
                {
                  x: 12,
                  y: 12000
                },
                {
                  x: 13,
                  y: 8900
                },
                {
                  x: 14,
                  y: 16000
                },
                {
                  x: 15,
                  y: 27000
                },
                {
                  x: 16,
                  y: 22000
                },
                {
                  x: 17,
                  y: 21000
                }
              ]
            }
            // {
            //   label: 'Trips',
            //   borderColor: '#8C54FF',
            //   pointBackgroundColor: '#FFF',
            //   fill: true,
            //   lineTension: 0,
            //   data: [
            //     {
            //       x: 0,
            //       y: 4800
            //     },
            //     {
            //       x: 1,
            //       y: 5000
            //     },
            //     {
            //       x: 2,
            //       y: 7500
            //     },
            //     {
            //       x: 3,
            //       y: 7000
            //     },
            //     {
            //       x: 4,
            //       y: 11500
            //     },
            //     {
            //       x: 5,
            //       y: 13000
            //     },
            //     {
            //       x: 6,
            //       y: 7500
            //     },
            //     {
            //       x: 7,
            //       y: 8500
            //     },
            //     {
            //       x: 8,
            //       y: 6000
            //     },
            //     {
            //       y: 13700
            //     },
            //     {
            //       x: 10,
            //       y: 18000
            //     },
            //     {
            //       x: 11,
            //       y: 17600
            //     },
            //     {
            //       x: 12,
            //       y: 2500
            //     },
            //     {
            //       x: 13,
            //       y: 6000
            //     },
            //     {
            //       x: 14,
            //       y: 9000
            //     },
            //     {
            //       x: 15,
            //       y: 22500
            //     },
            //     {
            //       x: 16,
            //       y: 14000
            //     },
            //     {
            //       x: 17,
            //       y: 19000
            //     }
            //   ]
            // }
          ]
        },
        datacollectionMixed: {
          labels: ['Mon', 'Tue', 'Fri', 'Thu', 'Wed', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Average',
              borderColor: '#F7C137',
              fill: false,
              lineTension: 0,
              data: [110, 80, 100, 110, 74, 55, 124],
              type: 'line'
            },
            {
              barPercentage: 0.5,
              categoryPercentage: 0.3,
              label: 'Comfort',
              backgroundColor: '#2E5BFF',
              data: [82, 65, 75, 130, 55, 62, 120]
            },
            {
              barPercentage: 0.5,
              categoryPercentage: 0.3,
              label: 'Premium',
              backgroundColor: '#8C54FF',
              data: [90, 75, 80, 60, 45, 117]
            }
          ]
        },
        lineOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              gridLines: {
                color: "#B0BAC9",
                borderDash: [3, 3]
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 125,
                fontColor: "#B0BAC9",
                callback: (value) => {
                  let tempVal = value.toString();
                  if (tempVal.length >= 4)
                    tempVal = tempVal.substring(0, tempVal.length - 3) + 'k ';
                  return '$' + tempVal;
                }
              }
            }],
            xAxes: [{
              gridLines: {
                color: "#B0BAC9",
                borderDash: [3, 3]
              },
              ticks: {
                fontColor: "#B0BAC9"
              }
            }]
          },
          legend: {
            display: true,
            align: 'end',
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              padding: 20,
              fontColor: "#B0BAC9"
            }
          },
          elements: {
            point: {
              radius: 5,
              hoverRadius: 4,
              borderWidth: 3,
              hoverBorderWidth: 3
            }
          }
        },
        mixedOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              gridLines: {
                color: "#B0BAC9",
                borderDash: [3, 3]
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 125,
                fontColor: "#B0BAC9"
              }
            }],
            xAxes: [{
              gridLines: {
                color: "#B0BAC9",
                borderDash: [3, 3]
              },
              ticks: {
                fontColor: "#B0BAC9"
              }
            }]
          },
          legend: {
            display: true,
            align: 'end',
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              padding: 20,
              fontColor: "#B0BAC9"
            }
          },
          elements: {
            point: {
              radius: 5,
              hoverRadius: 4,
              borderWidth: 3,
              hoverBorderWidth: 3,
              backgroundColor: '#FFF'
            }
          }
        },
        gradients: [
          {
            red: '255',
            green: '255',
            blue: '255'
          }
          // {
          //   red: '255',
          //   green: '255',
          //   blue: '255'
          // }
        ]
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>