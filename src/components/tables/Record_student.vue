<template>
  <div class="c-table">
    <table class="rwd-table w-full mb-2 border-separate text-sm">
      <tbody>
        <tr>
          <th v-for="column in columns" :key="column.name" class="whitespace-no-wrap text-center">{{ column.label }}</th>
        </tr>
        <tr v-for="item in data" :key="item.id">
          <td data-th="課程時間">
            {{ item.time }}
          </td>
          <td data-th="課程狀態">
            {{ item.status }}
          </td>
          <td data-th="課程點數">
            {{ item.point }}
          </td>
          <td data-th="主題">
            {{ item.topic }}
          </td>
          <td data-th="主題分類">
            {{ item.classification }}
          </td>
          <td data-th="名稱">
            {{ item.name }}
          </td>
          <td data-th="其他">
            <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
              問券調查
            </button>
            <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
              老師評語
            </button>
          </td>
          <td data-th="課程詳情">
            <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
              <i class="fas fa-folder-open"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  // import Avatar from "./Avatar";
  // import Button from "@/components/Button";
  export default {
    name: "Table",
    components: {
      // Avatar,
      // Button,
    },
    props: {
      columns: {
        name: String,
        required: Boolean,
        label: String,
        sortable: Boolean,
        actions: Object
      },
      data: Array,
      filterKey: String
    },
    data () {
      let sortOrders = {};
      this.columns.forEach((column) => {
        sortOrders[column.name] = 1
      });
      return {
        sortKey: '',
        sortOrders: sortOrders,
        avatarSize: 8,
        nbVehiclesToShow: 8,
        vehiclesShown: 8,

        showfirstModal: false
      }
    },
    computed: {
    },
    methods: {
      openModal () {
        console.log('open')
        this.showfirstModal = true
      },
      closeModal (closeModal) {

        console.log(closeModal)
        this.showfirstModal = closeModal
      }
      // edit() {
      //   console.log('edit manage')
      // },
      // open() {
      //   console.log('open manage')
      // },
      // del() {
      //   this.$swal.fire({
      //     title: '確認要刪除此筆資料?',
      //     icon: 'warning',
      //     showCancelButton: true,
      //     confirmButtonColor: '#3085d6',
      //     cancelButtonColor: '#d33',
      //     confirmButtonText: '刪除',
      //     cancelButtonText: '取消'
      //   }).then((result) => {
      //     if (result.isConfirmed) {
      //       this.$swal.fire(
      //         'Deleted!',
      //         'Your file has been deleted.',
      //         'success'
      //       )
      //     }
      //   })
      // }
    }
  }
</script>

<style scoped>
.hasData {
  display: none;
}
.isActive .noData {
  display: none;
}
.isActive .hasData {
  display: block;
}


.btnAudit {
  color: white;
  background: black;
  border: 1px solid black;
}
.btnCheck {
  /* color: white; */
  background: white;
  border: 1px solid black;
}
</style>