<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'LiveTeacher報名審核'" />
        </div>

      </div>
      <div class="flex justify-between items-center w-full flex-wrap mb-4">
        <button @click="$router.back(-1)" class="px-4 py-2 btn-main text-white text-sm rounded whitespace-no-wrap w-full lg:w-auto">
          <i class="fas fa-chevron-left mr-1"></i>返回
        </button>
        <div class="flex items-center flex-wrap w-full lg:w-11/12 justify-between px-2 bg-white text-sm shadow-md">
          <div class="flex w-full lg:flex-1 p-2 bg-white">
            <span class="lg:hidden">ID: </span>
            <p>28268</p>
          </div>
          <div class="flex w-full lg:flex-1 p-2 bg-white">
            <span class="lg:hidden">教室: </span>
            <p>ROOM1</p>
          </div>
          <div class="flex w-full lg:flex-1 p-2 bg-white">
            <span class="lg:hidden">老師: </span>
            <div>
              <img src="@/assets/img/vector.svg" alt="" class="inline-block object-contain w-8 mb-2">
              <p>Sherry老師</p>
            </div>
          </div>
          <div class="flex w-full lg:flex-1 p-2 bg-white">
            <span class="lg:hidden">主題分類: </span>
            <p>小二藝術班</p>
          </div>
          <div class="flex w-full lg:w-1/5 p-2 bg-white">
            <span class="lg:hidden">課程名稱: </span>
            <p>AIE to Live藝術跨領域學習</p>
          </div>
          <div class="flex w-full lg:flex-1 p-2 bg-white">
            <span class="lg:hidden">堂數: </span>
            <p>13</p>
          </div>
          <div class="flex w-full lg:flex-1 p-2 bg-white">
            <span class="lg:hidden">已通過人數: </span>
            <p>25/40</p>
          </div>
          <div class="flex w-full lg:flex-1 p-2 bg-white">
            <span class="lg:hidden">狀態: </span>
            <p>已上線</p>
          </div>
          <div class="flex w-full lg:flex-1 p-2 bg-white">
            <span class="lg:hidden">ID: </span>
            <div class="flex">
              <router-link :to="{ name: 'addTeacherClass', params: { status: 'edit' }}"
                class="mx-1 table-btn-actions rounded"
                >
                <i class="fas fa-edit"></i>
              </router-link>
              <button
                class="mx-1 table-btn-actions rounded"
                >
                <i class="far fa-folder-open"></i>
              </button>
              <button @click="del()"
                class="mx-1 table-btn-actions rounded"
                >
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center w-full flex-wrap flex-col lg:flex-row mb-4">
        <FilterModal :showItems="showItems" />

      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">

          <template v-slot:RegistrationNumLabel><th class="whitespace-no-wrap text-center">報名人數</th></template>
          <template v-slot:RegistrationReviewLabel><th class="whitespace-no-wrap text-center">報名審核動作</th></template>

          <template slot="RegistrationNumContent">
            <td data-th="報名審核動作">
              <a @click="showStudentsModal = true" class="hover:underline block cursor-pointer">10</a>
            </td>
          </template>

          <template slot="RegistrationReview">
            <td data-th="報名審核動作">
              <button @click="showfirstModal = true"
                class="table-btn mx-1 px-2 rounded"
                >
                審核<i class="fas fa-arrow-right ml-1"></i>
              </button>
            </td>
          </template>
      </Table>
      <ReviewRegistrationMaterials :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
      <StudentListModal :showfirstModal="showStudentsModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
      <Pagination />
    </div>
  </main>
</template>

<script>
  import Table from '@/components/table'
  import FilterModal from '@/components/FilterModal'
  import Pagination from '@/components/modules/Pagination'
  import 'vue2-datepicker/index.css'
  import ReviewRegistrationMaterials from '@/components/modules/Review_Registration_Materials'
  import StudentListModal from '@/components/popup/StudentListModal'
  import Title from '@/components/Title'
  export default {
    name: 'CoursesTeacher',
    components: {
      Table,
      FilterModal,
      Pagination,
      ReviewRegistrationMaterials,
      StudentListModal,
      Title
    },
    props: [
      'props'
    ],
    data () {
      return {
        showfirstModal: false,
        showStudentsModal: false,

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
          sync: true
        },

        tableList: {
          columns: [
            { name: 'id', label: '報名時間', required: true },
            { name: 'classroom', label: '報名人帳號', required: true },
            { name: 'teacher', label: '報名人姓名', required: true },
            { name: 'topic', label: '報名人手機', required: true },
            { name: 'className', label: '校別', required: true },
            { name: 'NumberOfClass', label: '狀態', required: true },
          ],
          datas: [
            {
              id: '282638',
              classroom: 'ROOM1',
              teacher: 'Peggy',
              topic: '作文班',
              className: '作文的起承轉合',
              NumberOfClass: '13'
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
        this.showStudentsModal = closeModal
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