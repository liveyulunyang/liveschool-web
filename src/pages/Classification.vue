
<template>
	<main class="flex flex-wrap p-3 xl:p-6">
    <section class="w-full min-h-screen">
      <div class="mb-4">
    <Title v-if="selectedFirst === null && selectedSecond === null && selectedThird === null" :title="'分類管理'" />
    <Title v-if="(selectedFirst !== null && selectedSecond === null && selectedThird === null) || selectedFirst !== null && selectedSecond !== null && selectedThird === null" :title="'課程分類管理'" />
      </div>
      <div class="flex justify-between mb-4">
        <ul class='flex cursor-pointer text-sm'>
          <li class='py-2 mr-1'>
            <button @click="$router.back(-1)" class="px-4 py-2 btn-main text-white  text-sm rounded whitespace-no-wrap">
              <i class="fas fa-chevron-left mr-1"></i>回上層
            </button>
          </li>
          <li>
            <FilterModal :showItems="showItems" />
          </li>
        </ul>

        <ul class='flex cursor-pointer text-sm'>
          <li class='py-2 mr-1'>
            <button @click="$router.back(-1)" class="px-4 py-2 btn-red text-white text-sm rounded whitespace-no-wrap">
              <i class="fas fa-plus mr-1"></i>新增分類
            </button>
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
              <div class="md:w-8/12 md:pt-2 px-3 flex justify-start">
              <!-- edit -->
              <input type="text" :value="item.name" class="tracking-wide text-2xl mb-2 md:mb-0 font-bold border w-full">
                <!-- <p class="text-left tracking-wide text-2xl mb-2 md:mb-0 font-bold">
                  {{ item.name }}
                </p> -->
              </div>
              <!-- edit -->
              <div class="w-full md:w-4/12 flex items-center justify-end lg:pl-3">
                <div class="w-full md:flex">
                  <div class="w-full md:w-4/12 flex items-center">
                    <label class="control control--checkbox">台灣站
                      <input type="checkbox" checked="checked" :disabled="isDisabled" />
                      <div class="control__indicator"></div>
                    </label>
                  </div>
                  <div class="w-full md:w-4/12 flex items-center">
                    <label class="control control--checkbox">企業站
                      <input type="checkbox" checked="checked"  :disabled="isDisabled"/>
                      <div class="control__indicator"></div>
                    </label>
                  </div>
                  <div class="w-full md:w-4/12 flex items-center">
                    <label class="control control--checkbox">大陸站
                      <input type="checkbox" checked="checked"  :disabled="isDisabled"/>
                      <div class="control__indicator"></div>
                    </label>
                  </div>
                </div>
                <button class="btn-main text-white py-2 px-3 rounded text-sm whitespace-no-wrap">
                  <i class="fas fa-check mr-1"></i> 儲存
                </button>
                <button class="btn-main text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
              <!-- <div class="w-full md:w-3/12 flex items-center justify-end md:pl-2">
                <span class="px-2 py-1 border border-gray-900 rounded mx-1">台灣站</span>
                <span class="px-2 py-1 border border-gray-900 rounded mx-1">大陸站</span>
                <button class="btn-main text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-folder-open"></i>
                </button>
                <button class="btn-main text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-edit"></i>
                </button>
              </div> -->
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
  import Title from '@/components/Title'
  import FilterModal from '@/components/FilterModal'
  export default {
    name: "Classification",
    components: {
      NoData,
      Title,
      FilterModal
    },
    data () {
      return {
        isData: true,
        selectedFirst: null,
        selectedSecond: null,
        selectedThird: null,

        showItems: {
          branch: true,
          searchOnlyInput: true,
          sync: true
        },

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