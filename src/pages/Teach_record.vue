<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex items-center">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">老師授課紀錄列表
            </h1>
          </div>
        </div>
        <div class="w-full flex items-center lg:justify-between flex-wrap flex-col lg:flex-row mb-4">
          <FilterModal :showItems="showItems" />
          <ExportBtn />
        </div>
      <div class="flex flex-wrap">

        <div class="w-full px-2">
          <Table
            :columns="tableList.columns"
            :actions="tableList.actions"
            :data="tableList.datas"
            >
            <template slot="actionsLabel">
              <th class="whitespace-no-wrap text-center">執行動作</th>
            </template>
            <template slot="actionsBtn">
              <td data-th="執行動作">
                <button @click="openDetail()"
                  class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                  >
                  <img src="@/assets/img/icons/more.svg" alt="" class="w-8 object-contain">
                </button>
              </td>
            </template>
          </Table>
          <Pagination />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Table from '@/components/table'
import FilterModal from '@/components/FilterModal'
import Pagination from '@/components/modules/Pagination'
import ExportBtn from '@/components/modules/ExportBtn'
  export default {
    name: "Teach_record",
    components: {
      FilterModal,
      ExportBtn,
      Table,
      Pagination
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
          timePeriod: false,
          search: true,
          sync: true,
          approvalStatus: false
        },
        tableList: {
          columns: [
            { name: 'id', label: '頭像', required: true },
            { name: 'classroom', label: '姓名/英文姓名', required: true },
            { name: 'classname', label: '國家', required: true },
            { name: 'teacher', label: '帳號/(信箱)', required: true }
          ],
          datas: [
            {
              id: '282638',
              classroom: 'Peggy',
              classname: '美國',
              teacher: 'Peggy@gmail.com'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      submit () {},
      openDetail () {
        this.$router.push({ name: 'Learn_record_teacher' })
      }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>