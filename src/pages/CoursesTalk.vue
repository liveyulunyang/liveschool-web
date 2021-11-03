<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'LiveClass課程管理'" />
        </div>
        <div class="flex text-xs flex-wrap">
          <h5 class="mr-3 whitespace-no-wrap">已結束<span class="bg-white rounded-lg px-2 py-1 mx-1">999</span>課</h5>
          <h5 class="mr-3 whitespace-no-wrap">已取消<span class="bg-white rounded-lg px-2 py-1 mx-1">915</span>課</h5>
          <h5 class="mr-3 whitespace-no-wrap">進行中<span class="bg-white rounded-lg px-2 py-1 mx-1">9</span>課</h5>
          <h5 class="mr-3 whitespace-no-wrap">未結束<span class="bg-white rounded-lg px-2 py-1 mx-1">99</span>課</h5>
        </div>
      </div>
      <div class="flex items-center justify-between w-full flex-wrap lg:flex-no-wrap mb-4">
        <FilterModal :showItems="showItems" />

        <div class="flex justify-end items-center">
          <button class="px-4 py-2 btn-blue text-white text-sm mx-1 rounded whitespace-no-wrap">
            批次匯入
          </button>
          <button @click="toEdit" class="px-4 py-2 btn-green text-white text-sm mx-1 rounded whitespace-no-wrap">
            編輯模板
          </button>
          <button @click="addClass" class="px-4 py-2 btn-red text-white text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 新增課程
          </button>
        </div>
      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
          <template v-slot:peopleNum><th class="whitespace-no-wrap text-center">人數</th></template>
          <template v-slot:record><th class="whitespace-no-wrap text-center">紀錄</th></template>
          <template v-slot:supplementaryMaterials><th class="whitespace-no-wrap text-center">補充教材</th></template>
          <template v-slot:actionsLabel><th class="whitespace-no-wrap text-center">執行動作</th></template>

          <template slot="peopleNumContent">
            <td data-th="人數">
              <StudentListModal :showfirstModal="showStudentsListModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
              <button @click="openPeopleNumModal()"
                class="text-primary-normal hover:text-black-1 hover:underline">
                0/0
              </button>
            </td>
          </template>

          <template slot="recordBtn">
            <td data-th="紀錄">
              <button @click="preClass()"
                class="text-primary-normal hover:text-black-1  mx-1">
                <img :src="require('@/assets/img/icons/list.svg')" alt="" class="h-8 object-contain noData">
              </button>
              <button @click="reviewClass()"
                class="text-primary-normal hover:text-black-1  mx-1">
                <img :src="require('@/assets/img/icons/film.svg')" alt="" class="h-8 object-contain noData">
                <!-- <img src="@/assets/img/icons/film_active.svg" alt="" class="h-8 object-contain hasData"> -->
              </button>
            </td>
          </template>
          <template slot="supplementaryMaterialsBtn">
            <td data-th="補充教材">
              <button
                class="text-primary-normal hover:text-black-1  mx-1"
                >
                <!-- <img src="@/assets/img/icons/file.svg" alt="" class="h-6 object-contain noData"> -->
                <img :src="require('@/assets/img/icons/file_active.svg')" alt="" class="h-6 object-contain hasData">
              </button>
              <button @click="toPreview"
                class="text-primary-normal hover:text-black-1  mx-1"
                >
                <!-- <img src="@/assets/img/icons/before_test.svg" alt="" class="h-6 object-contain noData"> -->
                <img :src="require('@/assets/img/icons/before_test_active.svg')" alt="" class="h-6 object-contain hasData">
              </button>
              <button @click="toReview"
                class="text-primary-normal hover:text-black-1  mx-1 isActive"
                >
                <!-- <img src="@/assets/img/icons/after_test.svg" alt="" class="h-6 object-contain noData"> -->
                <img :src="require('@/assets/img/icons/after_test_active.svg')" alt="" class="h-6 object-contain hasData">
              </button>
            </td>
          </template>
          <template scope="props" slot="actionsBtn">
            <td data-th="執行動作">
              <button @click="edit(props.item.id)"
                class="text-primary-normal hover:text-black-1  mx-1"
                >
                <img :src="require('@/assets/img/icons/edit.svg')" alt="" class="w-8 object-contain">
              </button>
              <button @click="open(props.item.id)"
                class="text-primary-normal hover:text-black-1  mx-1"
                >
                <img :src="require('@/assets/img/icons/more.svg')" alt="" class="w-8 object-contain">
              </button>
              <button @click="del(props.item.id)"
                class="text-primary-normal hover:text-black-1  mx-1"
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
  import CommentModal from '@/components/popup/CommentModal'
  import StudentListModal from '@/components/popup/StudentListModal'
  import Title from '@/components/Title'
  export default {
    name: 'CoursesTalk',
    components: {
      Table,
      FilterModal,
      Pagination,
      CommentModal,
      StudentListModal,
      Title
    },
    props: [
      'props'
    ],
    data () {
      return {
        showfirstModal: false,
        showStudentsListModal: false,

        showItems: {
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
            { name: 'classname', label: '課程名稱', required: true },
            { name: 'teacher', label: '老師', required: true },
            { name: 'point', label: '點數', required: true },
            { name: 'classtime', label: '開課時間', required: true },
            { name: 'classtype', label: '課程種類', required: true },
            { name: 'isPublic', label: '是否公開', required: true },
            { name: 'branch', label: '站別', required: true },
            { name: 'status', label: '狀態', required: true }
          ],
          datas: [
            {
              id: '282638',
              classroom: 'ROOM1',
              classname: 'CTL測試課程',
              teacher: 'Peggy',
              point: 88,
              classtime: '2021-06-22 22:00-23:00',
              classtype: 'CTL口說班',
              isPublic: '是',
              branch: 'XX站',
              record: 'C8',
              materials: 'C8',
              status: '準備中'
            },
            {
              id: '2825638',
              classroom: 'ROOM1',
              classname: 'CTL測試課程',
              teacher: 'Peggy',
              number: '0/0',
              point: 88,
              classtime: '2021-06-22 22:00-23:00',
              classtype: 'CTL口說班',
              isPublic: '是',
              branch: 'XX站',
              record: 'C8',
              materials: 'C8',
              status: '準備中'
            },
            {
              id: '282658',
              classroom: 'ROOM1',
              classname: 'CTL測試課程',
              teacher: 'Peggy',
              number: '0/0',
              point: 88,
              classtime: '2021-06-22 22:00-23:00',
              classtype: 'CTL口說班',
              isPublic: '是',
              branch: 'XX站',
              record: 'C8',
              materials: 'C8',
              status: '準備中'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      addClass () {
        this.$router.push({ name: 'addTalkClass', params: { status: 'add'} })
      },
      toEdit () {
        this.$router.push({ name: 'course_template' })
      },
      // edit() {
      //   console.log('edit manage');
      // },
      // open() {
      //   console.log('open manage');
      // },
      edit(id) {
        console.log(id)
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
      preClass () {
        this.showfirstModal = true
      },
      reviewClass () {
      },
      toPreview () {
        console.log('d')
        this.$router.push({ path: '/ctl_class/preview' })
      },
      toReview () {
        console.log('d')
        this.$router.push({ path: '/ctl_class/review' })
      },

      closeModal (closeModal) {
        this.showfirstModal = closeModal
        this.showStudentsListModal = closeModal
      },
      submit (submit) {
        // this.$router.push({ name: submit })
      },
      openPeopleNumModal () {
        this.showStudentsListModal = true
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