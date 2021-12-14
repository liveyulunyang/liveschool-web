<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'LiveTeacher報名進度'" />
        </div>
      </div>
      <div class="flex items-center justify-between w-full flex-wrap lg:flex-no-wrap mb-4">
        <FilterModal :showItems="showItems" />

        <div class="w-full lg:w-auto flex justify-end">
          <button @click="addClass" class="px-4 py-2 btn-red text-white text-sm mx-1 whitespace-no-wrap rounded">
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
              <button @click="openModal()"
                class="mx-1 table-btn-actions rounded"
                >
                <i class="far fa-folder-open"></i>
              </button>
            </td>
          </template>
      </Table>
      <CommentModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
      <Pagination v-on:pageChange="pageChange" :pagination="pagination" />
    </div>
  </main>
</template>

<script>
  import Table from '@/components/table'
  import FilterModal from '@/components/FilterModal'
  import Pagination from '@/components/modules/Pagination'
  import 'vue2-datepicker/index.css'
  import CommentModal from '@/components/popup/CourseModel'
  import Title from '@/components/Title'
  export default {
    name: 'CoursesTeacher',
    components: {
      Table,
      FilterModal,
      Pagination,
      CommentModal,
      Title
    },
    props: [
      'props'
    ],
    data () {
      return {
        showfirstModal: false,

        showItems: {
          progressStatus: true,
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
          confirmButtonText: '刪除',
          cancelButtonText: '取消',
          customClass: {
            title: 'font-bold text-2xl text-black',
            actions: 'btns',
            confirmButton: 'btn btn-confirm',
            cancelButton: 'btn btn-cancel'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire({
              icon: 'success',
              title: '刪除成功!',
              text: '您所選擇的檔案已刪除',
              confirmButtonColor: '#808080',
              confirmButtonText: 'OK',
              customClass: {
                title: 'font-bold text-2xl text-black',
                htmlContainer: 'text-sm',
                actions: 'btns',
                confirmButton: 'px-10'
              }
            })
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
      },
      pageChange (pageChange) {
        let self = this
        self.pagination.currentPage = pageChange
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