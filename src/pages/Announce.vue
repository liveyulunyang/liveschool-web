<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">公告管理</h1>
          </div>
        </div>
        <div class="content">
          <div class="flex justify-end items-center mb-4">
            <button @click="openModal(true)" class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm mx-1 rounded whitespace-no-wrap">
              <i class="fas fa-plus mr-1"></i> 新增公告
            </button>
          </div>

          <div class="flex flex-wrap bg-white py-6 px-6 mb-4 hover:bg-gray-300 shadow-lg" v-for="n in 5" :key="n">
            <div class="w-full md:w-3/4 text-left mb-3 md:mb-0">
              <h3 class="text-2xl md:text-3xl font-bold">ZOOM版本更新下載 通知</h3>
              <p class="text-xl bar text-gray-800">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium incidunt quidem ut totam ab inventore distinctio quas similique asperiores suscipit, fugit nobis atque consequuntur eos est nisi sit, molestiae nesciunt nemo reprehenderit omnis in tenetur ducimus id. Temporibus incidunt enim error, nobis veritatis sed modi iste dicta fugiat a eum?
              </p>
            </div>
            <div class="w-full md:w-1/4 flex flex-col justify-center items-end">
              <div class="flex mb-4 order-2 md:order-1">
                <button @click="openModal(false)"
                  class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                  >
                  <img src="@/assets/img/icons/more.svg" alt="" class="w-8 object-contain">
                </button>
                <button @click="openModal(true)"
                  class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                  >
                  <img src="@/assets/img/icons/edit.svg" alt="" class="w-8 object-contain">
                </button>
                <button @click="del()"
                  class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                  >
                  <img src="@/assets/img/icons/delete.svg" alt="" class="w-8 object-contain">
                </button>
              </div>
              <div class="text-lg md:text-xl text-gray-600 font-semibold order-1 md:order-2 mb-3 md:mb-0">
                <p>2021.09.06  10:06:57</p>
              </div>
            </div>
          </div>

          <Pagination />
          <AnnounceModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isEdit="isEdit" />
        </div>
    </div>
  </main>
</template>

<script>
  import Pagination from "@/components/modules/Pagination"
  import AnnounceModal from '@/components/popup/AnnounceModal'
  // import DatePicker from 'vue2-datepicker'
  export default {
    name: "Announce",
    components: {
      Pagination,
      AnnounceModal,
      // DatePicker
    },
    data () {
      return {
        isEdit: false,
        showfirstModal: false
      }
    },
    computed: {
    },
    methods: {
      openModal (val) {
        this.showfirstModal = true
        this.isEdit = val
      },
      closeModal (closeModal) {
        this.showfirstModal = closeModal
      },
      del () {
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
      }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .bar {
    line-height: 2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

</style>