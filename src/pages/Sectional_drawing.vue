<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex items-center">
            <Title :title="'學生能力圖'" />
            <a class="text-gray-700 block cursor-pointer mr-4" v-tooltip.top-center="'說明'"><i class="far fa-question-circle"></i></a>
            <h2>abc@gmail.com</h2>
          </div>
        </div>
        <div class="content">
          <section class="flex flex-wrap mb-4 font-bold text-lg lg:text-xl whitespace-no-wrap">
            <div class="w-full lg:w-1/5 p-1 xl:p-3">
              <div class="bg-white py-6 rounded-lg">
                <h5>總分</h5>
                <p class="text-2xl lg:text-3xl font-black">888</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6 rounded-lg">
                <h5>完成課程數</h5>
                <p class="text-2xl lg:text-3xl font-black">30</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6 rounded-lg">
                <h5>聽力</h5>
                <p class="text-2xl lg:text-3xl font-black">88</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6 rounded-lg">
                <h5>句型組織</h5>
                <p class="text-2xl lg:text-3xl font-black">66</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6 rounded-lg">
                <h5>理解</h5>
                <p class="text-2xl lg:text-3xl font-black">60</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6 rounded-lg">
                <h5>口說</h5>
                <p class="text-2xl lg:text-3xl font-black">66</p>
              </div>
            </div>
            <div class="w-1/2 lg:flex-1 p-1 xl:p-3">
              <div class="bg-white py-6 rounded-lg">
                <h5>參與度</h5>
                <p class="text-2xl lg:text-3xl font-black">66</p>
              </div>
            </div>
          </section>
          <!-- chartJs -->
          <div class="flex flex-wrap">
            <section class="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
              <div class="bg-white px-4 py-5 rounded-lg shadow-lg">
                <div class="flex justify-between items-start mb-5 flex-wrap md:flex-no-wrap">
                  <div class="mr-2">
                    <p class="text-left font-bold text-xl whitespace-no-wrap">成長曲線圖</p>
                    <p class="text-left font-bold text-gray-500 whitespace-no-wrap">近10堂課程積分</p>
                  </div>
                  <FilterModal :showItems="showItems" />
                </div>
                <line-chart :chartdata="dataLinear" :options="lineOptions" />
              </div>
            </section>
            <section class="w-full lg:w-1/2 px-2">
              <div class="bg-white px-4 py-5 rounded-lg shadow-lg">
                <div class="flex justify-between items-start mb-5">
                  <div>
                    <p class="text-left font-bold text-xl">能力雷達圖</p>
                    <p class="text-left font-bold text-gray-500">全課程能力的平均分</p>
                  </div>
                </div>
                <Radarchart :chartdata="RadarData"  />
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
  import FilterModal from '@/components/FilterModal'
  import Title from '@/components/Title'
  export default {
    name: "Sectional_drawing",
    components: {
      LineChart,
      Radarchart,
      FilterModal,
      Title
    },
    data () {
      return {
        showItems: {
          role: false,
          listStatus: false,
          classTopic: false,
          classification: false,
          branch: false,
          classType: false,
          timePeriod: true,
          search: false,
          sync: false
        },
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
        // LineChart
        dataLinear: {
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
        // RadarChart
        RadarData: {
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
              data: [65, 59, 90, 81, 56]
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style lang="scss">
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>