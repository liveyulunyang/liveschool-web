<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <Title :title="'學習紀錄列表'" />
          </div>
        </div>
        <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row mb-4">
          <div class="flex items-center justify-start flex-wrap">
            <FilterModal :showItems="showItems" />
          </div>
          <div>
            <ExportBtn />
          </div>
        </div>
        <Table
          :columns="tableList.columns"
          :actions="tableList.actions"
          :data="tableList.datas">
          <template slot="actionsLabel">
            <th class="whitespace-no-wrap text-center">執行動作</th>
          </template>
          <template scope="props" slot="actionsBtn">
            <td data-th="執行動作">
              <button @click="open(props.item.id)"
                class="mx-1 table-btn-actions rounded"
                >
                <i class="far fa-folder-open"></i>
              </button>
            </td>
          </template>
        </Table>
        <Pagination v-on:pageChange="pageChange" :pagination="pagination" />
    </div>
  </main>
</template>

<script>
import Table from '@/components/table'
import 'vue2-datepicker/index.css'
import FilterModal from '@/components/FilterModal'
import ExportBtn from '@/components/modules/ExportBtn'
import Title from '@/components/Title'
import Pagination from "@/components/modules/Pagination"
  export default {
    name: "Learn_record",
    components: {
      Table,
      FilterModal,
      ExportBtn,
      Title,
      Pagination
    },
    props: [
      'props'
    ],
    data () {
      return {
        showItems: {
          role: false,
          listStatus: false,
          classTopic: false,
          classification: false,
          branch: false,
          classType: false,
          timePeriod: true,
          search: true,
          sync: true
        },

        tableList: {
          columns: [
            { name: 'name', label: '姓名/英文姓名', required: true },
            { name: 'account', label: '帳號(信箱)', required: true },
            { name: 'branch', label: '分校', required: true },
            { name: 'class', label: '班級', required: true },
            { name: 'point', label: '點數', required: true },
            { name: 'director', label: '班主任', required: true },
          ],
          datas: [
            {
              name: '測試/Peggy',
              account: '2021.08.08',
              branch: '總公司',
              class: 'C8',
              point: '88',
              director: 'peggy@gmail.com'
            },
            {
              name: '測試/Peggy',
              account: '2021.08.08',
              branch: '總公司',
              class: 'C8',
              point: '88',
              director: 'peggy@gmail.com'
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
      open() {
        console.log('open manage')
        this.$router.push({ name: 'learn_record_student' })
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