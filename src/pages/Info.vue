<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex items-center">
            <Title :title="'系統教室管理'" />
          </div>
        </div>
      <div class="flex flex-wrap">

        <div class="w-full px-2">
          <Table
            :columns="tableList.columns"
            :actions="tableList.actions"
            :data="tableList.datas"
            :isaccordion="true"
            >
            <!-- <template slot="statusLabel">
              <th class="whitespace-no-wrap text-center">狀態</th>
            </template>
            <template slot="actionsLabel">
              <th class="whitespace-no-wrap text-center">執行動作</th>
            </template>
            <template slot="statusText">
              <td data-th="狀態">
                <button @click="openDetail()"
                  class="text-gray-600 mx-1 border rounded border-gray-600 p-1 px-3 focus:outline-none"
                  >
                  idle
                </button>
              </td>
            </template>
            <template slot="actionsBtn">
              <td data-th="執行動作">
                <button @click="openDetail()"
                  class="text-primary-normal hover:text-black-1  mx-1 focus:outline-none"
                  >
                  <img src="@/assets/img/icons/more.svg" alt="" class="w-8 object-contain">
                </button>
              </td>
            </template> -->
          </Table>
          <Pagination v-on:pageChange="pageChange" :pagination="pagination" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Table from '@/components/table_accordion'
import Pagination from '@/components/modules/Pagination'
import Title from '@/components/Title'
  export default {
    name: "Info",
    components: {
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
          // columns: ['教室編號', '代碼', '狀態', '執行動作']
          columns: [
            { name: 'id', label: '教室編號' },
            { name: 'number', label: '代碼' }
          ],
          datas: [
            {
              id: 'ROOM1',
              number: 'VeZzfU9wR1K7dRccNYpMbg'
            },
            {
              id: 'ROOM2',
              number: 'VeZzfU9wR1K7dRccNYpMbg'
            },
            {
              id: 'ROOM3',
              number: 'VeZzfU9wR1K7dRccNYpMbg'
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