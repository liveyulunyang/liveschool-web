<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex items-center">
            <Title :title="'老師授課紀錄列表'" />
          </div>
        </div>
        <div class="w-full flex items-center lg:justify-between flex-wrap lg:flex-no-wrap mb-4">
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
                class="mx-1 table-btn-actions rounded"
                >
                <i class="far fa-folder-open"></i>
              </button>
              </td>
            </template>
          </Table>
          <Pagination v-on:pageChange="pageChange" :pagination="pagination" />
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
import Title from '@/components/Title'
  export default {
    name: "Teach_record",
    components: {
      FilterModal,
      ExportBtn,
      Table,
      Pagination,
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
        },

        // pagination
        pagination: {
          currentPage: 0,
          length: 10
        }
      }
    },
    computed: {
    },
    methods: {
      submit () {},
      openDetail () {
        this.$router.push({ name: 'Learn_record_teacher' })
      },
      pageChange (pageChange) {
        let self = this
        self.pagination.currentPage = pageChange
      }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>