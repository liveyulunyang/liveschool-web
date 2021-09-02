<template>
  <div class="c-table">
    <table class="rwd-table w-full mb-2 border-separate text-sm">
      <tbody>
        <tr>
          <th v-for="column in columns" :key="column.name" class="whitespace-no-wrap text-center">{{ column.label }}</th>
        </tr>
        <tr v-for="item in data" :key="item.id">
          <td data-th="交易日期">
            {{ item.id }}
          </td>
          <td data-th="點數異動/課程名稱">
            {{ item.classroom }}
          </td>
          <td data-th="異動帳號">
            {{ item.classname }}
          </td>
          <td data-th="異動類別">
            {{ item.teacher }}
          </td>
          <td data-th="點數">
            {{ item.number }}
          </td>
          <td data-th="來源">
            {{ item.point }}
          </td>
          <td data-th="異動原因">
            成功預約
          </td>
          <td data-th="執行帳號">
            {{ item.classtype }}
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
      },
      toPreview () {
        this.$router.push({ path: '/ctl_class/preview' })
      },
      toReview () {
        this.$router.push({ path: '/ctl_class/review' })
      }
    }
  }
</script>

<style scoped>
</style>