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
  import Button from "./Button";

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
    data() {
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
        // eslint-disable-next-line no-console
        console.log('edit manage');
      },
      open() {
        // eslint-disable-next-line no-console
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
        // eslint-disable-next-line no-console
        console.log('d')
        this.$router.push({ path: '/ctl_class/preview' })
      },
      toReview () {
        // eslint-disable-next-line no-console
        console.log('d')
        this.$router.push({ path: '/ctl_class/review' })
      }
    }
  }
</script>

<style scoped>
.title {
  color: #808080;
}
  .c-table table { border-spacing: 0 1rem;  }

  .c-btn-sortable svg { transition: transform .15s ease-in; }
  .c-btn-sortable .is-asc { transform: rotateZ(0deg); }
  .c-btn-sortable .is-dsc { transform: rotateZ(180deg); }

  .c-expand-section { @apply flex justify-center items-center; }
  .c-expand-section::before, .c-expand-section::after {
      @apply block bg-black-4;
      height: 1px;
      content: "";
      -webkit-box-flex: 1;
      flex: auto;
      background-clip: content-box;
  }
  .table-row-move { transition: transform 1s; }

/* test */

.rwd-table {
  margin: auto;
  min-width: 300px;
  max-width: 100%;
  /* border-collapse: collapse; */
  border-collapse: separate;
}

.rwd-table tr:first-child {
  border-top: none;
}

.rwd-table tr:not(:first-child) {
  /* box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%); */
  /* margin-bottom: 0.75rem; */
}

.rwd-table th {
  display: none;
}

.rwd-table td {
  display: block;
  background: white;
}

.rwd-table td:first-child {
  margin-top: .5em;
}

.rwd-table td:last-child {
  margin-bottom: .5em;
}

.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 120px;
  display: inline-block;
  color: #000;
}

.rwd-table th,
.rwd-table td {
  text-align: center;
}

.rwd-table {
  color: #333;
  border-radius: .4em;
  overflow: hidden;
}

@media screen and (max-width: 1024px) {
  .rwd-table tr:nth-child(2) {
    border-top: none;
  }
  .rwd-table th,
  .rwd-table td {
    text-align: left;
  }
  .rwd-table th,
  .rwd-table td {
    padding: .5em 1em;
  }

}
@media screen and (min-width: 1025px) {
  .rwd-table tr:hover:not(:first-child) {
    background-color: #d8e7f3;
  }
  .rwd-table td:before {
    display: none;
  }
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: .25em .5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
  .rwd-table th,
  .rwd-table td {
    padding: .75em !important;
  }
}


/* THE END OF THE IMPORTANT STUFF */

/* Basic Styling */

h1 {
  text-align: center;
  font-size: 2.4em;
  color: #f2f2f2;
}
.container {
  display: block;
  text-align: center;
}
h3 {
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 1.5em;
  color: #cecece;
}
h3:before {
  content: "\25C0";
  position: absolute;
  left: -50px;
  -webkit-animation: leftRight 2s linear infinite;
  animation: leftRight 2s linear infinite;
}
h3:after {
  content: "\25b6";
  position: absolute;
  right: -50px;
  -webkit-animation: leftRight 2s linear infinite reverse;
  animation: leftRight 2s linear infinite reverse;
}
@-webkit-keyframes leftRight {
  0%    { -webkit-transform: translateX(0)}
  25%   { -webkit-transform: translateX(-10px)}
  75%   { -webkit-transform: translateX(10px)}
  100%  { -webkit-transform: translateX(0)}
}
@keyframes leftRight {
  0%    { transform: translateX(0)}
  25%   { transform: translateX(-10px)}
  75%   { transform: translateX(10px)}
  100%  { transform: translateX(0)}
}
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