<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <Title :title="'LiveTalk課程模板'" />
          </div>
        </div>
        <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row">
          <div class="flex items-center justify-start flex-wrap">
            <button @click="$router.back(-1)" class="mr-3 px-4 py-2 btn-main text-white  text-sm rounded whitespace-no-wrap">
              <i class="fas fa-chevron-left mr-1"></i>{{ $t('return') }}
            </button>
            <FilterModal :showItems="showItems" />
          </div>
          <div class="w-full lg:w-auto flex justify-end items-center">
            <Button @click="addClass" class="px-4 py-2 btn-red text-white  text-sm mx-1 rounded whitespace-no-wrap">
              <i class="fas fa-plus mr-1"></i> 新增模板
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
            <th class="whitespace-no-wrap text-center opacity-0">開課</th>
          </template>

          <template slot="supplementaryMaterialsBtn">
            <td data-th="補充教材">
              <button
                class="table-btn text-white  mx-1 w-8 h-8 rounded"
                >
                <i class="fas fa-folder-plus"></i>
              </button>
              <button @click="toPreview"
                class="table-btn mx-1 px-3 rounded"
                >
                <i class="fas fa-book-open mr-1"></i>課前
              </button>
              <button @click="toReview"
                class="table-btn mx-1 px-3 rounded"
                >
                <i class="fas fa-book-open mr-1"></i>課後
              </button>
            </td>
          </template>
          <template slot="actionsBtn">
            <td data-th="執行動作">
              <button @click="$router.push({ name: 'Learn_record_supervise' })"
                class="table-btn text-white  mx-1 w-8 h-8 rounded"
                >
                <i class="far fa-folder-open text-lg"></i>
              </button>
              <button
                class="table-btn text-white mx-1 w-8 h-8 rounded"
                >
                <i class="fas fa-ticket-alt text-lg"></i>
              </button>
            </td>
          </template>
          <template slot="startClass">
            <td data-th="開課">
              <!-- <button
                class="bg-gray-900 text-white hover:text-black-1  mx-1 px-2 py-1 rounded"
                >
                <i class="fas fa-plus mr-1"></i> 開課
              </button> -->
              <button
                class="text-white table-btn mx-1 px-3 rounded"
                >
                <i class="fas fa-arrow-right mr-1"></i>開課
              </button>
            </td>
          </template>
        </Table>
    </div>
  </main>
</template>

<script>
  import Table from '@/components/table'
  import FilterModal from '@/components/FilterModal'
  import Title from '@/components/Title'
  export default {
    name: "CourseTemplate",
    components: {
      Table,
      FilterModal,
      Title
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
          search: true,
          sync: true
        },
        tableList: {
          columns: [
            { name: 'type', label: '課程種類', required: true, isShow: true },
            { name: 'name', label: '課程名稱', required: true, isShow: true },
            { name: 'isOrder', label: '是否開放預約', required: true, isShow: true },
            { name: 'orderNum', label: '預約數量', required: true, isShow: true }
          ],
          datas: [
            {
              type: 'CTL口說班',
              name: 'CTL口說升級測驗Starter',
              isOrder: '是',
              orderNum: '5/20'
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