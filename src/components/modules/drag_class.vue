<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2 pr-2 lg:px-3">
      <div class="bg-white text-left md::px-4 leading-loose font-semibold text-lg mb-4 flex items-center px-6 flex-wrap">
        <div class="py-4 mr-3">
          <h6 class="text-xl font-bold">課程清單</h6>
        </div>
        <div>
          <FilterModal :showItems="showItems" />
        </div>
      </div>
      <div class="h-screen-50">
        <div class="overflow-y-scroll overflow-x-hidden h-full">
          <draggable
            class="dragArea list-group flex flex-col pl-0 mb-0  h-full"
            :list="list1"
            :clone="clone"
            :group="{ name: 'people', pull: pullFunction }"
            @start="start"
          >
            <div class="list-group-item mb-3 bg-white py-3 flex px-2 cursor-pointer items-center text-left flex-wrap" v-for="element in list1" :key="element.id">
              <div class="w-3/4 xl:w-full flex flex-wrap xl:items-center">
                <div class="w-1/2 xl:w-3/12 mb-2 xl:mb-0">生活英語</div>
                <div class="w-1/2 xl:w-3/12 mb-2 xl:mb-0">兒童生活英語</div>
                <div class="w-full xl:w-4/12 mb-2 xl:mb-0">01. Fast-Food Restaurant</div>
                <div class="w-1/2 xl:w-1/12 mb-2 xl:mb-0">
                  <button
                    class="mx-1 table-btn-actions rounded"
                    >
                    <i class="far fa-folder-open"></i>
                  </button>
                </div>
                <div class="w-1/2 xl:w-1/12 mb-2 xl:mb-0">
                  <button class="px-4 py-2 btn-main text-white  text-sm rounded whitespace-no-wrap">
                    加入
                  </button>
                </div>
              </div>
            </div>
          </draggable>
        </div>
      </div>

    </div>
    <div class="w-full md:w-1/2 pl-2 lg:px-3">
      <div class="bg-white text-left md::px-4 leading-loose font-semibold text-lg mb-4 flex justify-between items-center px-6">
        <div class=" w-full py-4">
          <h6 class="text-xl font-bold">熱門課程清單</h6>
        </div>
        <div>
          <button class="px-4 py-2 btn-main text-white text-sm rounded whitespace-no-wrap" @click="revertData">
            清空
          </button>
        </div>
      </div>
      <div class="h-screen-50">
        <div class="overflow-y-scroll overflow-x-hidden h-full">
          <draggable
            class="dragArea list-group flex flex-col pl-0 mb-0  h-full"
            :list="list2"
            :clone="clone"
            :group="{ name: 'people', pull: pullFunction }"
            @start="start"
          >
            <div class="list-group-item mb-3 bg-white py-3 flex px-2 cursor-pointer items-center text-left flex-wrap" v-for="element in list2" :key="element.id">
              <div class="w-3/4 xl:w-full flex flex-wrap xl:items-center">
                <div class="w-1/2 xl:w-3/12 mb-2 xl:mb-0">生活英語</div>
                <div class="w-1/2 xl:w-3/12 mb-2 xl:mb-0">兒童生活英語</div>
                <div class="w-full xl:w-4/12 mb-2 xl:mb-0">01. Fast-Food Restaurant</div>
                <div class="w-1/2 xl:w-1/12 mb-2 xl:mb-0">
                  <button
                    class="mx-1 table-btn-actions rounded"
                    >
                    <i class="far fa-folder-open"></i>
                  </button>
                </div>
                <div class="w-1/2 xl:w-1/12 mb-2 xl:mb-0">
                  <button class="px-4 py-2 btn-main text-white  text-sm rounded whitespace-no-wrap">
                    移除
                  </button>
                </div>
              </div>
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import FilterModal from '@/components/FilterModal'
let idGlobal = 8
export default {
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    draggable,
    FilterModal
  },
  data () {
    return {
      list1: [
        { name: 'Jesus', id: 1 },
        { name: 'Paul', id: 2 },
        { name: 'Peter', id: 3 },
        { name: 'Peter', id: 4 },
        { name: 'Peter', id: 5 },
        { name: 'Peter', id: 6 },
        { name: 'Peter', id: 7 },
        { name: 'Peter', id: 8 }
      ],
      list2: [
        { name: 'Luc', id: 5 },
        { name: 'Thomas', id: 6 },
        { name: 'John', id: 7 }
      ],
      controlOnStart: true,

      showItems: {
        classTopic: true,
        classification: true,
        searchOnlyInput: true,
        sync: true,
      }
    };
  },
  methods: {
    clone ({ name }) {
      return { name, id: idGlobal++ }
    },
    pullFunction () {
      return this.controlOnStart ? 'clone' : true
    },
    start ({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey
    },
    revertData () {
      this.$data.list1 = this.$options.data().list1
      this.$data.list2 = this.$options.data().list2
    }
  }
}
</script>
<style scoped></style>