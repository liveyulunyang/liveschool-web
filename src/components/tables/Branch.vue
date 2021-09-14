<template>
  <div class="c-table">
    <table class="rwd-table w-full mb-2 border-separate text-sm">
      <tbody>
        <tr>
          <th v-for="column in columns" :key="column.name" class="whitespace-no-wrap text-center">{{ column.label }}</th>
        </tr>
        <tr v-for="item in data" :key="item.id">
          <td data-th="分區/校名">
            {{ item.id }}
          </td>
          <td data-th="校別">
            {{ item.name }}
          </td>
          <td data-th="主任帳號">
            {{ item.CTL }}
          </td>
          <td data-th="姓名/英文姓名">
            {{ item.mobile }}
          </td>
          <td data-th="預約成功課數">
            {{ item.point }}
          </td>
          <td data-th="待審核課數">
            {{ item.role }}
          </td>
          <td data-th="已結束課數">
            {{ item.source }}
          </td>
          <td data-th="原始課數">
            {{ item.source }}
          </td>
          <td data-th="新增課數">
            {{ item.branch }}
          </td>
          <td data-th="已使用點數">
            {{ item.class }}
          </td>
          <td data-th="剩餘點數">
            {{ item.time }}
          </td>
          <td data-th="執行動作">
            <!-- <button
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
              >
              <img src="@/assets/img/icons/more.svg" alt="" class="w-6 object-contain">
            </button> -->
            <button @click="$router.push({ name: 'Learn_record_supervise' })"
              class="bg-gray-900 text-white hover:text-black-1 hover:bg-primary-light mx-1 w-8 h-8 rounded actionBtn"
              >
              <i class="far fa-folder-open text-lg"></i>
            </button>
            <button
              class="bg-gray-900 text-white hover:text-black-1 hover:bg-primary-light mx-1 w-8 h-8 rounded actionBtn"
              >
              <i class="fas fa-ticket-alt text-lg"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Table",
    components: {
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
        vehiclesShown: 8
      }
    },
    computed: {
    },
    methods: {
      edit() {
        console.log('edit manage')
      },
      open() {
        console.log('open manage')
      },
      del() {
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

<style scoped lang="scss">
.actionBtn {
  i {
    line-height: 32px;
  }
}
</style>