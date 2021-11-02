<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'LiveTeacher課程管理'" />
        </div>
        <div class="flex text-xs flex-wrap">
          <h5 class="mr-3 whitespace-no-wrap">上線中<span class="bg-white rounded-lg px-2 py-1 mx-1">999</span>課</h5>
          <h5 class="mr-3 whitespace-no-wrap">草稿<span class="bg-white rounded-lg px-2 py-1 mx-1">915</span>課</h5>
          <h5 class="mr-3 whitespace-no-wrap">結束<span class="bg-white rounded-lg px-2 py-1 mx-1">9</span>課</h5>
        </div>
      </div>
      <div class="flex items-center justify-between w-full flex-wrap lg:flex-no-wrap mb-4">
        <FilterModal :showItems="showItems" />

        <div class="flex justify-end items-center">
          <button class="px-4 py-2 bg-second-blue text-white text-sm mx-1 rounded whitespace-no-wrap">
            批次匯入
          </button>
          <button @click="addClass" class="px-4 py-2  bg-second-red text-white text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 新增課程
          </button>
        </div>
      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
          <template v-slot:actionsLabel><th class="whitespace-no-wrap text-center">課程動作</th></template>
          <template v-slot:RegistrationReviewLabel><th class="whitespace-no-wrap text-center">報名審核動作</th></template>

          <template scope="props" slot="actionsBtn">
            <td data-th="課程動作">
              <button @click="edit(props.item.id)"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <img :src="require('@/assets/img/icons/edit.svg')" alt="" class="w-8 object-contain">
              </button>
              <button @click="openModal"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <img :src="require('@/assets/img/icons/more.svg')" alt="" class="w-8 object-contain">
              </button>
              <button @click="del(props.item.id)"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <img :src="require('@/assets/img/icons/delete.svg')" alt="" class="w-8 object-contain">
              </button>
            </td>
          </template>
          <template slot="RegistrationReview">
            <td data-th="報名審核動作">
              <button @click="toAudit()"
                class="text-white bg-gray-900 hover:text-black-1 hover:bg-gray-600 mx-1 px-2 py-1 rounded"
                >
                查看<i class="fas fa-arrow-right ml-1"></i>
              </button>
              <!-- <button @click="toAudit()"
                class="border border-gray-900 hover:text-black-1 hover:bg-gray-600 mx-1 px-2 py-1 rounded"
                >
                額滿<i class="far fa-folder-open ml-1"></i>
              </button> -->
              <!-- <button @click="toAudit()"
                class="border border-gray-900 hover:text-black-1 hover:bg-gray-600 mx-1 px-2 py-1 rounded"
                >
                紀錄<i class="far fa-folder-open ml-1"></i>
              </button> -->
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
          classroom: true,
          role: false,
          listStatus: false,
          classTopic: true,
          classification: true,
          branch: true,
          classType: true,
          timePeriod: true,
          search: true,
          sync: true
        },

        tableList: {
          columns: [
            { name: 'id', label: 'ID', required: true },
            { name: 'classroom', label: '教室', required: true },
            { name: 'teacher', label: '老師', required: true },
            { name: 'topic', label: '主題分類', required: true },
            { name: 'className', label: '課名', required: true },
            { name: 'NumberOfClass', label: '堂數', required: true },
            { name: 'NumberOfPass', label: '已通過人數', required: true },
            { name: 'status', label: '狀態', required: true }
          ],
          datas: [
            {
              id: '282638',
              classroom: 'ROOM1',
              teacher: 'Peggy',
              topic: '作文班',
              className: '作文的起承轉合',
              NumberOfClass: '13',
              NumberOfPass: '25/40',
              status: '已上線'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      addClass () {
        this.$router.push({ name: 'addTeacherClass', params: { status: 'add'} })
      },
      toEdit () {
        this.$router.push({ name: 'course_template' })
      },

      toAudit () {
        this.$router.push({ name: 'CoursesTeacher_Audit' })
      },

      open (id) {
        console.log(id)
      },
      del (id) {
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