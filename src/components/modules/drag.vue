<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2 pr-2 lg:px-3">
      <div class="text-left md::px-4 leading-loose font-semibold text-lg mb-4">
        <div class="bg-white w-full px-6 py-4">
          <h6 class="text-xl font-bold">學生名單</h6>
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
              <div class="w-3/4 xl:w-full flex flex-wrap">
                <div class="w-full xl:w-5/12">student_peggy@liveabc.com</div>
                <div class="w-1/3 xl:w-4/12">傅以樂/Sol</div>
                <div class="w-1/3 xl:w-1/12">C8</div>
                <div class="w-1/3 xl:w-1/12">88</div>
                <div class="w-1/12 hidden xl:block">
                  <button class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
                    選擇
                  </button>
                </div>
              </div>
              <div class="w-1/4 xl:hidden flex justify-end">
                <button class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
                  選擇
                </button>
              </div>
            </div>
          </draggable>
        </div>
      </div>

    </div>
    <div class="w-full md:w-1/2 pl-2 lg:px-3">
      <div class="text-left md::px-4 leading-loose font-semibold text-lg mb-4">
        <div class="bg-white w-full px-6 py-4">
          <h6 class="text-xl font-bold">上課名單</h6>
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
              <div class="w-3/4 xl:w-full flex flex-wrap">
                <div class="w-full xl:w-5/12">student_peggy@liveabc.com</div>
                <div class="w-1/3 xl:w-4/12">傅以樂/Sol</div>
                <div class="w-1/3 xl:w-1/12">C8</div>
                <div class="w-1/3 xl:w-1/12">88</div>
                <div class="w-1/12 hidden xl:block">
                  <button class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
                    移除
                  </button>
                </div>
              </div>
              <div class="w-1/4 xl:hidden flex justify-end">
                <button class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
                  移除
                </button>
              </div>
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable"
let idGlobal = 8
export default {
  name: "clone-on-control",
  display: "Clone on Control",
  instruction: "Press Ctrl to clone element from list 1",
  order: 4,
  components: {
    draggable
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
      controlOnStart: true
    };
  },
  methods: {
    clone ({ name }) {
      return { name, id: idGlobal++ }
    },
    pullFunction () {
      return this.controlOnStart ? "clone" : true
    },
    start ({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey
    }
  }
};
</script>
<style scoped></style>