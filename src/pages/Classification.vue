
<template>
	<main class="flex flex-wrap p-3 xl:p-6">
		<h1 class="text-xl ading-none text-black-1 mr-2 font-bold" v-if="selectedFirst === null && selectedSecond === null && selectedThird === null">分類管理</h1>
		<h1 class="text-xl ading-none text-black-1 mr-2 font-bold" v-if="(selectedFirst !== null && selectedSecond === null && selectedThird === null) || selectedFirst !== null && selectedSecond !== null && selectedThird === null">課程分類管理</h1>

    <section class="w-full mt-2 min-h-screen px-3 lg:px-6 py-4">
      <div class="flex justify-between mb-4">
        <ul class='flex cursor-pointer text-sm'>
          <li class='py-2 mr-1'>
            <Button @click="$router.back(-1)" class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
              <i class="fas fa-chevron-left mr-1"></i>回上層
            </Button>
          </li>
        </ul>

        <ul class='flex cursor-pointer text-sm'>
          <li class='py-2 mr-1'>
            <Button @click="$router.back(-1)" class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
              <i class="fas fa-plus mr-1"></i>新增分類
            </Button>
          </li>
        </ul>
      </div>
      <div v-if="isData">
        <div class="text-NotoSansRegular textColorblack mx-auto">
          <div class="w-full flex flex-wrap leading-normal mb-1" v-if="selectedFirst === null && selectedSecond === null && selectedThird === null">
            <div class="w-full px-3 py-5 md:flex mb-6 bg-white shadow-md hover:bg-gray-300 cursor-pointer" v-for="(item, index) in ClassifyData" :key="index" @click="setFirst(0)">
              <div class="md:w-9/12 md:pt-2 px-3">
                <p class="text-left tracking-wide text-2xl mb-2 md:mb-0 font-bold">
                  {{ item.name }}
                </p>
              </div>
            </div>

          </div>
          <div class="w-full flex flex-wrap leading-normal mb-1" v-if="selectedFirst !== null && selectedSecond === null && selectedThird === null">
            <div class="w-full px-3 py-5 md:flex mb-6 bg-white shadow-md hover:bg-gray-300" v-for="(item, index) in ClassifyData[0].items" :key="index">
              <div class="md:w-9/12 md:pt-2 px-3">
                <p class="text-left tracking-wide text-2xl mb-2 md:mb-0 font-bold">
                  {{ item.name }}
                </p>
              </div>
              <div class="w-full md:w-3/12 flex items-center justify-end md:pl-2">
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1" @click="setSecond(0)">
                  <i class="fas fa-folder-open"></i>
                </button>
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>

          </div>

          <div class="w-full flex flex-wrap leading-normal mb-1" v-if="selectedFirst !== null && selectedSecond !== null && selectedThird === null">
            <div class="w-full px-3 py-5 md:flex mb-6 bg-white shadow-md hover:bg-gray-300" v-for="(item, index) in ClassifyData[0].items[0].items" :key="index">
              <div class="md:w-9/12 md:pt-2 px-3">
                <p class="text-left tracking-wide text-2xl mb-2 md:mb-0 font-bold">
                  {{ item.name }}
                </p>
              </div>
              <div class="w-full md:w-3/12 flex items-center justify-end md:pl-2">
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-folder-open"></i>
                </button>
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <NoData v-else />

    </section>
	</main>
</template>

<script>
/* eslint-disable no-console */
  import NoData from '@/components/NoData'
  export default {
    name: "Classification",
    components: {
      NoData
    },
    data () {
      return {
        isData: true,
        selectedFirst: null,
        selectedSecond: null,
        selectedThird: null,

        ClassifyData: [
          { id: 0,
            name: '課程分類管理',
            items: [
              { name: 'LiveTalk直播課',
                items: [
                  { id: 0, name: 'Come to Live' },
                  { id: 1, name: '自然發音' },
                  { id: 2, name: '生活英語' },
                  { id: 3, name: '商業英語' },
                  { id: 4, name: '日文課程' },
                  { id: 5, name: '互動英語雜誌' }
                ]
              },
              { name: 'LiveTalk預錄課',
                items: [
                  { name: 'Come to Live' },
                  { name: '自然發音' }
                ]
              }
            ] },
          { id: 1,
            name: '主任校別分類管理',
            items: [
              { name: '一般分校',
                items: [
                  { name: 'RG' },
                  { name: 'AIE' },
                  { name: 'RG' },
                  { name: 'KID' },
                  { name: 'RO' },
                  { name: 'ABC' }
                ]
              },
              { name: 'CTL分校',
                items: [
                  { name: 'Come to Live' },
                  { name: '自然發音' }
                ]
              }
            ] }
        ]
      }
    },
    computed: {
      presentData () {
        if (this.selectedFirst) {
          return this.ClassifyData[this.selectedFirst].items
        } else if (this.selectedFirst && this.selectedSecond) {
          return this.ClassifyData[this.selectedFirst].items
        } else {
          return this.ClassifyData[this.selectedFirst].items
        }
      }
    },
    mounted() {

    },
    methods: {
      setFirst (idx) {
        console.log(idx)
        this.selectedFirst = idx
        // this.$router.push({ name: 'classification', params: { first: idx } })
      },
      setSecond (idx) {
        console.log(idx)
        this.selectedSecond = idx
        // this.$router.push({ name: 'classification', params: { first: item.id, second: item.id } })
      },
      setThird (idx) {
        console.log(idx)
        this.selectedThird = idx
        // this.$router.push({ name: 'classification', params: { first: item.id, second: item.id, third: item.id } })
      }
    }
  }
</script>
<style scoped lang="scss">
</style>