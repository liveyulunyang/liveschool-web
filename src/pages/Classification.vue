
<template>
	<main class="flex flex-wrap p-3 xl:p-6">
		<h1 class="text-xl ading-none text-black-1 mr-2 font-bold">分類管理</h1>

    <section class="w-full mt-2 min-h-screen px-3 lg:px-6 py-4">
      <div class="flex justify-between mb-4">
        <ul class='flex cursor-pointer text-sm'>
          <li class='py-2 mr-1'>
            <Button @click="$router.back(-1)" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
              <i class="fas fa-chevron-left"></i>回上層
            </Button>
          </li>
          <!-- <li class='py-2 px-4 flex items-center justify-center mx-1'>LiveTalk 直播課 / 課程主題 </li> -->
        </ul>

        <ul class='flex cursor-pointer text-sm'>
          <li class='py-2 mr-1'>
            <Button @click="$router.back(-1)" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
              <i class="fas fa-plus"></i>新增分類
            </Button>
          </li>
        </ul>
      </div>
      <div v-if="isData">
        <div class="text-NotoSansRegular textColorblack mx-auto">
          <div class="w-full flex flex-wrap leading-normal mb-1">
            <div class="w-full px-3 py-5 md:flex mb-6 bg-white shadow-lg hover:bg-gray-300 cursor-pointer" v-for="(item, index) in ClassifyData" :key="index" @click="setSecond(item)">
              <div class="md:w-9/12 md:pt-2 px-3">
                <p class="text-left tracking-wide text-2xl mb-2 md:mb-0 font-bold" for="email">
                  {{ item.name }}
                </p>
              </div>
              <!-- <div class="w-full md:w-3/12 flex items-center justify-end md:pl-2">
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-folder-open"></i>
                </button>
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div> -->
            </div>

          </div>
        </div>
        <Pagination />
      </div>

      <NoData v-else />

    </section>
	</main>
</template>

<script>
/* eslint-disable no-console */
  import NoData from '@/components/NoData'
  import Pagination from "@/components/modules/Pagination";
  export default {
    name: "Classification",
    components: {
      NoData,
      Pagination
    },
    data () {
      return {
        isData: true,

        ClassifyData: [
          { id: 0,
            name: '課程分類管理',
            items: [
              { name: 'LiveTalk直播課',
                items: [
                  { name: 'Come to Live' },
                  { name: '自然發音' }
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
              { name: 'LiveTalk直播課',
                items: [
                  { name: 'Come to Live' },
                  { name: '自然發音' }
                ]
              },
              { name: 'LiveTalk預錄課',
                items: [
                  { name: 'Come to Live' },
                  { name: '自然發音' }
                ]
              }
            ] }
        ]
      }
    },
    mounted() {

    },
    methods: {
      setSecond (item) {
        console.log(item)
        this.$router.push({ name: 'classification', params: { second: item.id } })
      }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped lang="scss">
</style>