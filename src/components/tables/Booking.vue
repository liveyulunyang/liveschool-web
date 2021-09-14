<template>
  <div class="c-table">
    <table class="rwd-table w-full mb-2 border-separate text-sm">
      <tbody>
        <tr>
          <th v-for="column in columns" :key="column.name" class="whitespace-no-wrap text-center">{{ column.label }}</th>
        </tr>
        <tr v-for="item in data" :key="item.id">
          <td data-th="建立時間">
            {{ item.setTime }}
          </td>
          <td data-th="分校">
            {{ item.BranchChool }}
          </td>
          <td data-th="課程名稱">
            {{ item.classname }}
          </td>
          <td data-th="課程種類">
            {{ item.classtype }}
          </td>
          <td data-th="教師專案">
            {{ item.teacherProject }}
          </td>
          <td data-th="安排教師">
            <i class="fas fa-user-circle text-2xl text-black-3"></i>
            {{ item.teacher }}
          </td>
          <td data-th="人數">
            {{ item.number }}
          </td>
          <td data-th="點數">
            {{ item.point }}
          </td>
          <td data-th="預約時間">
            {{ item.bookingTime }}
          </td>
          <td data-th="實際開課時間">
            {{ item.classtime }}
          </td>
          <td data-th="執行動作">
            {{ item.status }}
          </td>
          <td data-th="狀態">
            <button v-if="item.actions"
              class="mx-1 btnAudit px-2 py-1" @click.native="openModal"
              rounded>
              審核<i class="fas fa-arrow-right ml-1"></i>
            </button>
            <button v-if="!item.actions"
              class="mx-1 btnCheck px-2 py-1" @click.native="openModal"
              rounded>
              查看<i class="far fa-folder-open ml-1"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <BookingModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" />
  </div>

</template>

<script>
  import BookingModal from '@/components/modules/BookingModal'
  export default {
    name: "Table",
    components: {
      BookingModal
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
        this.showfirstModal = true
      },
      closeModal (closeModal) {
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
  .btnAudit {
    color: white;
    background: black;
    border: 1px solid black;
  }
  .btnCheck {
    background: white;
    border: 1px solid black;
  }
</style>