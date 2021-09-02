<template>
  <div class="c-table">
    <table class="rwd-table w-full mb-2 border-separate text-sm">
      <tbody>
        <tr>
          <th v-for="column in columns" :key="column.name" class="whitespace-no-wrap text-center">{{ column.label }}</th>
        </tr>
        <tr v-for="item in data" :key="item.id">
          <td data-th="帳號(信箱)">
            {{ item.id }}
          </td>
          <td data-th="姓名/英文姓名">
            {{ item.name }}
          </td>
          <td data-th="CTL帳號">
            {{ item.CTL }}
          </td>
          <td data-th="行動電話">
            {{ item.mobile }}
          </td>
          <td data-th="點數">
            {{ item.point }}
          </td>
          <td data-th="角色">
            {{ item.role }}
          </td>
          <td data-th="來源">
            {{ item.source }}
          </td>
          <td data-th="縣市">
            {{ item.source }}
          </td>
          <td data-th="分校">
            {{ item.branch }}
          </td>
          <td data-th="班級">
            {{ item.class }}
          </td>
          <td data-th="建立時間">
            {{ item.time }}
          </td>
          <td data-th="執行動作">
            <Button
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
              rounded>
              <img src="@/assets/img/icons/edit.svg" alt="" class="w-6 object-contain">
            </Button>
            <Button
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"

              rounded>
              <img src="@/assets/img/icons/more.svg" alt="" class="w-6 object-contain">
            </Button>
            <Button
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
              @click.native="del"
              rounded>
              <img src="@/assets/img/icons/delete.svg" alt="" class="w-6 object-contain">
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  // import Avatar from "./Avatar";
  import Button from "@/components/Button";

  export default {
    name: "Table",
    components: {
      // Avatar,
      Button
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
        
        console.log('edit manage');
      },
      open() {
        
        console.log('open manage');
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

<style scoped>
</style>