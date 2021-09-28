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
          <template slot="supplementaryMaterials">
            <th class="whitespace-no-wrap text-center">補充教材</th>
          </template>
          <template slot="actionsLabel">
            <th class="whitespace-no-wrap text-center">執行動作</th>
          </template>
          <template slot="startClassLabel">
            <th class="whitespace-no-wrap text-center">開課</th>
          </template>

          <template slot="supplementaryMaterialsBtn">
            <td data-th="補充教材">
              <button
                class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
                >
                <!-- <img src="@/assets/img/icons/file.svg" alt="" class="h-6 object-contain noData"> -->
                <img src="@/assets/img/icons/file_active.svg" alt="" class="h-6 object-contain hasData">
              </button>
              <button @click="toPreview"
                class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
                >
                <!-- <img src="@/assets/img/icons/before_test.svg" alt="" class="h-6 object-contain noData"> -->
                <img src="@/assets/img/icons/before_test_active.svg" alt="" class="h-6 object-contain hasData">
              </button>
              <button @click="toReview"
                class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1 isActive"
                >
                <!-- <img src="@/assets/img/icons/after_test.svg" alt="" class="h-6 object-contain noData"> -->
                <img src="@/assets/img/icons/after_test_active.svg" alt="" class="h-6 object-contain hasData">
              </button>
              <!-- {{ item.materials }} -->
            </td>
          </template>
          <template slot="actionsBtn">
            <td data-th="執行動作">
              <button @click="$router.push({ name: 'Learn_record_supervise' })"
                class="bg-gray-900 text-white hover:text-black-1 hover:bg-primary-light mx-1 w-8 h-8 rounded actionBtn"
                >
                <i class="far fa-folder-open text-lg"></i>
              </button>
              <button
                class="bg-gray-900 text-white hover:text-black-1 hover:bg-primary-light mx-1 w-8 h-8 rounded actionBtn"
                >
                <i class="fas fa-ticket-alt text-lg"></i>
              </button>
            </td>
          </template>
          <template slot="startClass">
            <td data-th="開課">
              <button
                class="bg-gray-900 text-white hover:text-black-1 hover:bg-primary-light mx-1 px-2 py-1 rounded"
                >
                + 開課
              </button>
            </td>
          </template>
        </Table>
    </div>
  </main>
</template>

<script>
  import Table from "@/components/table"
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
            { name: 'name', label: '課程名稱', required: true }
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
      },
      toPreview () {
        console.log('d')
        this.$router.push({ path: '/ctl_class/preview' })
      },
      toReview () {
        console.log('d')
        this.$router.push({ path: '/ctl_class/review' })
      }
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
</style>