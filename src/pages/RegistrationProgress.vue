<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">LiveTeacher報名進度</h1>
        </div>
      </div>
      <div class="flex items-center justify-between w-full flex-wrap  mb-4">
        <FilterModal :showItems="showItems" />

        <div class="w-full lg:w-auto flex justify-end">
          <button @click="addClass" class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm mx-1 whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 新增報名
          </button>
        </div>
      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
          <template slot="statusLabel">
            <th class="whitespace-no-wrap text-center">狀態</th>
          </template>
          <template v-slot:actionsLabel><th class="whitespace-no-wrap text-center">課程資料</th></template>

          <template slot="statusText">
            <td data-th="狀態" >
              <div class="lg:flex justify-center">
                <div class="border border-gray-900 rounded-lg text-center w-32 ml-16 -mt-4 lg:mt-0 lg:ml-0">審核中<br/>-取消報名-</div>
              </div>
            </td>
          </template>
          <template slot="actionsBtn">
            <td data-th="課程資料">
              <button @click="openModal"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <img :src="require('@/assets/img/icons/more.svg')" alt="" class="w-8 object-contain">
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
  import CommentModal from '@/components/popup/CourseModel'
  export default {
    name: 'CoursesTeacher',
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
          ProgressStatus: true,
          classroom: false,
          role: false,
          listStatus: false,
          classTopic: false,
          classification: false,
          branch: false,
          classType: true,
          timePeriod: true,
          search: true,
          sync: true,
          isExportBtn: true
        },

        tableList: {
          columns: [
            { name: 'time', label: 'ID', required: true },
            { name: 'teacher', label: '老師', required: true },
            { name: 'topic', label: '主題分類', required: true },
            { name: 'className', label: '課程名稱', required: true },
            { name: 'NumberOfClass', label: '課程堂數', required: true },
            { name: 'NumberOfStudent', label: '課程人數', required: true }
          ],
          datas: [
            {
              time: '282638',
              teacher: 'Peggy',
              topic: '作文班',
              className: '作文的起承轉合',
              NumberOfClass: '13',
              NumberOfStudent: '20/40'
            },
            {
              time: '282639',
              teacher: 'Peggy',
              topic: '作文班',
              className: '作文的起承轉合',
              NumberOfClass: '13',
              NumberOfStudent: '20/40'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      addClass () {
        this.$router.push({ name: 'AddApply' })
        // this.$router.push({ name: 'addTalkClass', params: { status: 'add'} })
      },
      toEdit () {
        this.$router.push({ name: 'course_template' })
      },

      edit(id) {
        console.log(id)
        this.$router.push({ name: 'addTalkClass', params: { status: 'edit'} })
      },
      open(id) {
        console.log(id)
      },
      del(id) {
        console.log(id)
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