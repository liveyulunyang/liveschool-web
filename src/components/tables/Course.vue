<template>
  <div class="c-table">
    <table class="rwd-table w-full mb-2 border-separate text-sm">
      <tbody>
        <tr>
          <th v-for="column in columns" :key="column.name" class="whitespace-no-wrap text-center">{{ column.label }}</th>
        </tr>
        <tr v-for="item in data" :key="item.id">
          <td data-th="ID">
            {{ item.id }}
          </td>
          <td data-th="教室">
            {{ item.classroom }}
          </td>
          <td data-th="課程名稱">
            {{ item.classname }}
          </td>
          <td data-th="老師">
            <!-- <div class="flex md:flex-col items-center"> -->
              <!-- <Avatar v-if="item.img" type="simple" :size="avatarSize"
                      :img="item.img" class="mr-3"></Avatar>
              <Avatar v-else type="simple" :size="avatarSize"></Avatar> -->
            <i class="fas fa-user-circle text-2xl text-black-3"></i>
            {{ item.teacher }}
            <!-- </div> -->
          </td>
          <td data-th="人數">
            {{ item.number }}
          </td>
          <td data-th="點數">
            {{ item.point }}
          </td>
          <td data-th="開課時間">
            <!-- {{ item.classtime }} -->
            2021-06-22
            22:00-23:00
          </td>
          <td data-th="課程種類">
            {{ item.classtype }}
          </td>
          <td data-th="是否公開">
            {{ item.isPublic }}
          </td>
          <td data-th="站別">
            {{ item.branch }}
          </td>
          <td data-th="紀錄">
            <!-- {{ item.record }} -->
            <Button
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
              rounded>
              <img src="@/assets/img/icons/list.svg" alt="" class="h-6 object-contain noData">
              <!-- <img src="@/assets/img/icons/film_active.svg" alt="" class="h-6 object-contain hasData"> -->
            </Button>
            <Button
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
              rounded>
              <img src="@/assets/img/icons/film.svg" alt="" class="h-6 object-contain noData">
              <img src="@/assets/img/icons/film_active.svg" alt="" class="h-6 object-contain hasData">
            </Button>
          </td>
          <td data-th="補充教材">
            <Button
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
              rounded>
              <img src="@/assets/img/icons/file.svg" alt="" class="h-6 object-contain noData">
              <img src="@/assets/img/icons/file_active.svg" alt="" class="h-6 object-contain hasData">
            </Button>
            <Button @click.native="toPreview"
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
              rounded>
              <img src="@/assets/img/icons/before_test.svg" alt="" class="h-6 object-contain noData">
              <img src="@/assets/img/icons/before_test_active.svg" alt="" class="h-6 object-contain hasData">
            </Button>
            <Button @click.native="toReview"
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1 isActive"
              rounded>
              <img src="@/assets/img/icons/after_test.svg" alt="" class="h-6 object-contain noData">
              <img src="@/assets/img/icons/after_test_active.svg" alt="" class="h-6 object-contain hasData">
            </Button>
            <!-- {{ item.materials }} -->
          </td>
          <td data-th="執行動作">
            <Button
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
              rounded>
              <img src="@/assets/img/icons/edit.svg" alt="" class="w-6 object-contain">
            </Button>
            <Button
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
              @click="del"
              rounded>
              <img src="@/assets/img/icons/delete.svg" alt="" class="w-6 object-contain">
            </Button>
          </td>
          <td data-th="狀態">
            {{ item.status }}
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
      },
      toPreview () {
        
        console.log('d')
        this.$router.push({ path: '/ctl_class/preview' })
      },
      toReview () {
        
        console.log('d')
        this.$router.push({ path: '/ctl_class/review' })
      }
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
</style>