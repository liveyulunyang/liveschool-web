<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'LiveTalk預約課程清單'" />
        </div>
      </div>
      <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row mb-4">
        <div class="flex items-center justify-start flex-wrap">
          <FilterModal :showItems="showItems" />
        </div>
        <div class="flex justify-end items-center"  v-if="$store.state.userRole === 'director'">
          <button @click="addBook" class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 新增預約
          </button>
        </div>
      </div>
      <Table
        :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
          <template slot="statusLabel">
            <th class="whitespace-no-wrap text-center">狀態</th>
          </template>
          <template slot="actionsLabel">
            <th class="whitespace-no-wrap text-center">紀錄</th>
          </template>

          <template slot="statusText">
            <td data-th="狀態">
              <span class="px-1 py-2 border border-gray-900 rounded-lg">審核成功</span>
            </td>
          </template>
          <template slot="actionsBtn">
            <td data-th="紀錄">
              <button @click="openModal"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1 text-white bg-gray-900 px-2 py-1 rounded text-lg"
                >
                <i class="fas fa-clipboard-list"></i>
              </button>
              <button @click="openModal"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1 text-white bg-gray-900 px-2 py-1 rounded text-lg"
                >
                <i class="fas fa-film"></i>
              </button>
            </td>
          </template>
      </Table>
      <CommentModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
    </div>
  </main>
</template>

<script>
  import Table from '@/components/table'
  import FilterModal from '@/components/FilterModal'
  import CommentModal from '@/components/popup/CommentModal'
  import Title from '@/components/Title'
  export default {
    name: "Book_course",
    components: {
      Table,
      FilterModal,
      CommentModal,
      Title
    },
    data () {
      return {
        showfirstModal: false,

        showItems: {
          role: false,
          listStatus: true,
          classTopic: false,
          classification: false,
          branch: false,
          classType: false,
          timePeriod: true,
          search: true,
          sync: true,
          isExportBtn: true
        },

        tableList: {
          columns: [
            // { name: 'id', label: 'ID', required: true },
            { name: 'setTime', label: '建立時間', required: true },
            { name: 'BranchChool', label: '分校', required: true },
            { name: 'classname', label: '課程名稱', required: true },
            { name: 'classtype', label: '課程種類', required: true },
            { name: 'teacherProject', label: '教師專案', required: true },
            { name: 'teacher', label: '安排教師', required: true },
            { name: 'number', label: '人數', required: true, sortable: false},
            { name: 'point', label: '點數', required: true },
            { name: 'bookingTime', label: '預約時間', required: true },
            { name: 'classtime', label: '實際開課時間', required: true },
            { name: 'status', label: '狀態', required: true },
          ],
          datas: [
            {
              id: '282638',
              setTime: '2021.08.08',
              BranchChool: '總公司',
              classname: 'B1 U1-U3 Class 2',
              classtype: 'CTL口說班',
              teacherProject: '菲常厲害優惠專案',
              teacher: 'Peggy',
              number: 'CTL口說班',
              point: 88,
              bookingTime: '2021-06-22 22:00-23:00',
              classtime: '',
              status: '審核中'
            },
            {
              id: '282639',
              setTime: '2021.08.08',
              BranchChool: '總公司',
              classname: 'B1 U1-U3 Class 2',
              classtype: 'CTL口說班',
              teacherProject: '菲常厲害優惠專案',
              teacher: 'Peggy',
              number: '0/0',
              point: 88,
              bookingTime: '2021-06-22 22:00-23:00',
              classtime: '2021-06-22 22:00-23:00',
              status: '通過'
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
      toEdit () {
        this.$router.push({ name: 'course_template' })
      },
      addBook () {
        this.$router.push({ name: 'AddBooking' })
      },

      openModal () {
        this.showfirstModal = true
      },
      closeModal (closeModal) {
        this.showfirstModal = closeModal
      },
      submit (submit) {
        // this.$router.push({ name: submit })
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
</style>