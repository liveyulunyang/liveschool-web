<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">能力剖面圖</h1>
          </div>
        </div>
        <div class="content">
          <section class="flex flex-wrap mb-4 font-bold text-lg lg:text-xl whitespace-no-wrap">
            <div class="w-full lg:w-1/5 p-1 xl:p-3">
              <div class="bg-white py-6">
                <h5>總分</h5>
                <p class="text-2xl lg:text-3xl font-black">888</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6">
                <h5>完成課程數</h5>
                <p class="text-2xl lg:text-3xl font-black">30</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6">
                <h5>聽力</h5>
                <p class="text-2xl lg:text-3xl font-black">88</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6">
                <h5>句型組織</h5>
                <p class="text-2xl lg:text-3xl font-black">66</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6">
                <h5>理解</h5>
                <p class="text-2xl lg:text-3xl font-black">60</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6">
                <h5>口說</h5>
                <p class="text-2xl lg:text-3xl font-black">66</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6">
                <h5>參與度</h5>
                <p class="text-2xl lg:text-3xl font-black">66</p>
              </div>
            </div>
          </section>
          <!-- chartJs -->
          <div class="flex flex-wrap">
            <section class="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
              <div class="bg-white px-4 py-5">
                <p class="text-left mb-4 font-bold text-lg">成長曲線圖</p>
                <line-chart :chartdata="datacollectionLinear" :options="lineOptions" :bg-gradient="gradients"/>
              </div>
            </section>
            <section class="w-full lg:w-1/2 px-2">
              <div class="bg-white px-4 py-5">
                <p class="text-left mb-4 font-bold text-lg">能力雷達圖</p>
                <Radarchart />
              </div>
            </section>
          </div>
        </div>
    </div>
  </main>
</template>

<script>
  import LineChart from "@/components/LineChart"
  import Radarchart from "@/components/Radarchart"
  export default {
    name: "Sectional_drawing",
    components: {
      LineChart,
      Radarchart
    },
    data () {
      return {
        trips: [
          {
            start: 'Chrysler Building',
            end: 'The High Line',
            price: '0',
            date: new Date('06/03/2018'),
            time: '24min'
          },
          {
            start: 'Theatre District',
            end: 'Prospect Park',
            price: '20',
            date: new Date('06/03/2018'),
            time: '21min'
          },
          {
            start: 'Brooklyn Musuem',
            end: 'Time Square',
            price: '30',
            date: new Date('06/04/2018'),
            time: '45min'
          },
          {
            start: 'Brookfield Place',
            end: 'Chelse Market',
            price: '40',
            date: new Date('06/04/2018'),
            time: '14min'
          },
          {
            start: 'Smorgasburg',
            end: 'Yankee Stadium',
            price: '50',
            date: new Date('06/05/2018'),
            time: '52min'
          }
        ],
        datacollectionLinear: {
          labels: ['', '', '', '', '', '', '', '', '', '', ''],
          datasets: [
            {
              label: '',
              borderColor: '#2E5BFF',
              pointBackgroundColor: '#2E5BFF',
              fill: true,
              lineTension: 0,
              data: [
                {
                  x: 0,
                  y: 8
                },
                {
                  x: 1,
                  y: 11
                },
                {
                  x: 2,
                  y: 98
                },
                {
                  x: 3,
                  y: 151
                },
                {
                  x: 4,
                  y: 230
                },
                {
                  x: 5,
                  y: 220
                },
                {
                  x: 6,
                  y: 160
                },
                {
                  x: 7,
                  y: 138
                },
                {
                  x: 8,
                  y: 163
                },
                {
                  x: 9,
                  y: 170
                }
              ]
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
                  let tempVal = value.toString()
                  if (tempVal.length >= 4)
                    tempVal = tempVal.substring(0, tempVal.length - 3)
                  return tempVal
                }
              }
            }],
            xAxes: [{
              display: false,
              gridLines: {
                color: "",
                borderDash: [3, 3]
              },
              ticks: {
                fontColor: "#B0BAC9"
              }
            }]
          },
          legend: {
            display: false,
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
        gradients: [
          {
            red: '255',
            green: '255',
            blue: '255'
          }
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