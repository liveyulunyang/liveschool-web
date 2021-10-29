<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">學生管理</h1>
        </div>
        <!-- <div class="flex text-xs flex-wrap">
          <h5 class="mr-3 whitespace-no-wrap">管理者<span class="bg-white rounded-lg px-2 py-1 mx-1">2</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">主任 / HR<span class="bg-white rounded-lg px-2 py-1 mx-1">915</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">督導<span class="bg-white rounded-lg px-2 py-1 mx-1">9</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">老師<span class="bg-white rounded-lg px-2 py-1 mx-1">99</span>人</h5>
          <h5 class="whitespace-no-wrap">學生<span class="bg-white rounded-lg px-2 py-1 mx-1">9999</span>人</h5>
        </div> -->
      </div>
      <div class="flex items-center justify-between w-full flex-wrap">
        <div class="flex items-center justify-start flex-wrap">
          <FilterModal :showItems="showItems" />
        </div>
        <div class="w-full lg:w-auto flex justify-end">
          <button class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i>匯入學生清單
          </button>
          <button @click="toManage" class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i>新增學生
          </button>
        </div>
      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
        <template slot="actionsLabel">
          <th class="whitespace-no-wrap text-center">執行動作</th>
        </template>
        <template scope="props" slot="actionsBtn" class="flex items-center">
          <td data-th="執行動作">
            <button @click="toEditAccount"
              class="text-primary-normal hover:text-black-1 hover:bg-gray-600 mx-1"
              >
              <img src="@/assets/img/icons/edit.svg" alt="" class="w-8 object-contain">
            </button>
            <button @click="openDetail"
              class="text-primary-normal hover:text-black-1 hover:bg-gray-600 mx-1"
              >
              <img src="@/assets/img/icons/more.svg" alt="" class="w-8 object-contain">
            </button>
            <button @click="toPoint"
              class="hover:text-black-1 hover:bg-gray-600 mx-1"
              >
              <img src="@/assets/img/icons/tick.svg" alt="" class="w-8 object-contain">
            </button>
            <button @click="toSectionalDrawing(props.item.id)"
              class="hover:text-black-1 hover:bg-gray-600 mx-1"
              >
              <img src="@/assets/img/icons/ability.svg" alt="" class="w-8 object-contain">
            </button>
            <button @click="del(props.item.id)"
              class="text-primary-normal hover:text-black-1 hover:bg-gray-600 mx-1 ml-3"
              >
              <img src="@/assets/img/icons/delete.svg" alt="" class="w-8 object-contain">
            </button>
          </td>
        </template>
      </Table>
      <Pagination />
    </div>
  </main>
</template>

<script>
  import Table from "@/components/table";
  import Pagination from "@/components/modules/Pagination"
  import FilterModal from '../components/FilterModal.vue'
  export default {
    name: "Students",
    components: {
      Table,
      Pagination,
      FilterModal
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
          timePeriod: false,
          search: true,
          sync: true,
          isExportBtn: true
        },

        tableList: {
          columns: [
            { name: 'id', label: '帳號(信箱)', required: true, sortable: true },
            { name: 'name', label: '姓名/英文姓名', required: true, sortable: true },
            { name: 'mobile', label: '電話', required: true, sortable: true },
            { name: 'point', label: '點數', required: true, sortable: false},
            { name: 'branch', label: '分校', required: true, sortable: true },
            { name: 'class', label: '班級', required: true, sortable: true }
          ],
          datas: [
            {
              id: 'rex_chu1_1@liveabc.com',
              name: '測試名稱',
              nameEn: 'Peggy',
              CTL: '是',
              mobile: '0912312312',
              point: 8,
              role: '管理者',
              source: '本站',
              city: '台北市',
              branch: '總部測試校',
              class: 'C8',
              time: '2020-11-30 09:59'
            },
            {
              id: 'rex_chu1@liveabc.com',
              name: '測試名稱',
              nameEn: 'Peggy',
              CTL: '是',
              mobile: '0912312312',
              point: 8,
              role: '管理者',
              source: '本站',
              city: '台北市',
              branch: '總部測試校',
              class: 'C8',
              time: '2020-11-30 09:59'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      toManage () {
        this.$router.push({ name: 'studentsAdd' })
      },
      toEditAccount () {
        this.$router.push({ name: 'account_edit', params: { id: 1} })
      },
      openDetail () {
        this.$router.push({ name: 'learn_record_student' })
      },
      toPoint () {
        this.$router.push({ name: 'point' })
      },
      toSectionalDrawing (id) {
        this.$router.push({ name: 'SectionalDrawing' })
        console.log(id)
      },
      async del(id) {
        console.log(id)
        let self = this
        const inputOptions = new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              '1.已長期未使用': '已長期未使用',
              '2.建立錯誤': '建立錯誤',
              '3.測試用': '測試用'
            })
          }, 0)
        })

        const { value: reason } = await self.$swal.fire({
          title: '請選擇刪除原因',
          text: '請協助勾選帳號需刪除原因，以便增進網站管理品質',
          input: 'radio',
          showCancelButton: true,
          confirmButtonText: '刪除',
          cancelButtonText: '取消',
          customClass: {
            title: 'font-bold bg-gray-alert text-2xl text-black',
            htmlContainer: 'text-sm bg-gray-alert pb-3',
            actions: 'btns',
            confirmButton: 'btn btn-confirm',
            cancelButton: 'btn btn-cancel'
          },
          inputOptions: inputOptions,
          inputValidator: (value) => {
            if (!value) {
              return '請選擇原因'
            }
          }
        })

        if (reason) {
          console.log(reason)
          self.$swal.fire({
            icon: 'success',
            title: '刪除成功!',
            text: '您所選擇的檔案已刪除完成',
            confirmButtonColor: '#808080',
            confirmButtonText: '確認',
            iconColor: '#B2B2B2',
            customClass: {
              title: 'font-bold text-2xl text-black',
              htmlContainer: 'text-sm',
              actions: 'btns',
              confirmButton: 'btn btn-confirm',
              cancelButton: 'btn btn-cancel'
            }
          })
        }
      }
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
.multiselect {
  width: fit-content !important;
}
</style>