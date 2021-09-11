<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">LiveTalk課程模板</h1>
          </div>
        </div>
        <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row">
          <div class="flex items-center justify-start flex-wrap">
            <button @click="$router.back(-1)" class="mr-3 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
              <i class="fas fa-chevron-left"></i>返回
            </button>
            <FilterModal :showItems="showItems" />
          </div>
          <div class="flex justify-end items-center">
            <Button @click="addClass" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm mx-1 rounded whitespace-no-wrap">
              + 新增模板
            </Button>
          </div>
        </div>
        <Table :columns="tableList.columns"
          :actions="tableList.actions"
          :data="tableList.datas">
        </Table>
    </div>
  </main>
</template>

<script>
  import Table from "@/components/tables/Template"
  import FilterModal from '@/components/FilterModal'
  export default {
    name: "CourseTemplate",
    components: {
      Table,
      FilterModal
    },
    data () {
      return {
        showItems: {
          role: false,
          listStatus: false,
          classTopic: true,
          classification: true,
          branch: false,
          classType: true,
          timePeriod: true,
          serach: true,
          sync: true
        },
        tableList: {
          columns: [
            { name: 'type', label: '課程種類', required: true },
            { name: 'name', label: '課程名稱', required: true },
            { name: 'materials', label: '補充教材', required: true },
            { name: 'actions', label: '執行動作', required: true }
          ],
          datas: [
            {
              type: 'CTL口說班',
              name: 'CTL口說升級測驗Starter'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      addClass () {
        this.$router.push({ name: 'addTalkClass' })
      }
      // edit() {
      //   console.log('edit manage');
      // },
      // open() {
      //   console.log('open manage');
      // },
      // del() {
      //   console.log('del manage');
      // }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .role {
    width: 6em !important;
  }
  .search {
    width: 10em !important;
  }
/* .mx-datepicker-range {
  width: 15em;
  height: 42px !important;
} */
.mx-input {
  height: 42px !important;
}
</style>