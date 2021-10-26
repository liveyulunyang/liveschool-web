<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">LiveClass課程管理</h1>
        </div>
        <div class="flex text-xs flex-wrap">
          <h5 class="mr-3 whitespace-no-wrap">上線中<span class="bg-white rounded-lg px-2 py-1 mx-1">999</span>課</h5>
          <h5 class="mr-3 whitespace-no-wrap">草稿<span class="bg-white rounded-lg px-2 py-1 mx-1">915</span>課</h5>
        </div>
      </div>
      <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row mb-4">
        <FilterModal :showItems="showItems" />

        <div class="flex justify-end items-center">
          <button class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm mx-1 rounded whitespace-no-wrap">
            批次匯入
          </button>
          <button @click="addClass" class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 新增課程
          </button>
        </div>
      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
          <template v-slot:RegistrationReviewLabel><th class="whitespace-no-wrap text-center">執行動作</th></template>

          <template slot="RegistrationReview">
            <td data-th="執行動作">
              <button @click="edit()"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <img :src="require('@/assets/img/icons/edit.svg')" alt="" class="w-8 object-contain">
              </button>
              <button @click="del()"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <img :src="require('@/assets/img/icons/delete.svg')" alt="" class="w-8 object-contain">
              </button>
            </td>
          </template>
      </Table>
      <CommentModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
      <Pagination />
    </div>
  </main>
</template>

<script>
  import Table from '@/components/table'
  import FilterModal from '@/components/FilterModal'
  import Pagination from '@/components/modules/Pagination'
  import 'vue2-datepicker/index.css'
  import CommentModal from '@/components/modules/CourseModel'
  export default {
    name: 'CoursesClass',
    components: {
      Table,
      FilterModal,
      Pagination,
      CommentModal
    },
    props: [
      'props'
    ],
    data () {
      return {
        showfirstModal: false,

        showItems: {
          classTopic: true,
          classification: true,
          timePeriod: true,
          search: true,
          sync: true
        },

        tableList: {
          columns: [
            { name: 'buildTime', label: '建立時間', required: true },
            { name: 'topic', label: '主題', required: true },
            { name: 'topicType', label: '主題分類', required: true },
            { name: 'className', label: '課程名稱', required: true },
            { name: 'NumberOfPeople', label: '人數', required: true },
            { name: 'point', label: '點數', required: true },
            { name: 'lengthOfFilm', label: '影片總時數', required: true },
            { name: 'status', label: '狀態', required: true }
          ],
          datas: [
            {
              buildTime: '2021-06-01 09:00~13:00',
              topic: '作文班',
              topicType: '作文的起承轉合',
              className: '13',
              NumberOfPeople: '2',
              point: '4',
              lengthOfFilm: '90分鐘',
              status: '上線中'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      addClass () {
        this.$router.push({ name: 'addLiveClassClass', params: { status: 'add'} })
      },
      toEdit () {
        this.$router.push({ name: 'course_template' })
      },

      edit(id) {
        console.log()
        this.$router.push({ name: 'addLiveClassClass', params: { status: 'edit'} })
      },
      open(id) {
        console.log()
      },
      del(id) {
        console.log()
        this.$swal.fire({
          title: '確認要刪除此筆資料?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '刪除',
          cancelButtonText: '取消'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      },
      toPreview () {
        console.log('d')
        this.$router.push({ path: '/ctl_class/preview' })
      },
      toReview () {
        console.log('d')
        this.$router.push({ path: '/ctl_class/review' })
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
    }
  }
</script>
<style src='vue-multiselect/dist/vue-multiselect.min.css'></style>
<style>
  .role {
    width: 6em !important;
  }
  .search {
    width: 10em !important;
  }
</style>