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
            <Button v-if="item.actions"
              class="mx-1 btnAudit px-2 py-1" @click.native="openModal"
              rounded>
              審核<i class="fas fa-arrow-right ml-1"></i>
            </Button>
            <Button v-if="!item.actions"
              class="mx-1 btnCheck px-2 py-1" @click.native="openModal"
              rounded>
              查看<i class="far fa-folder-open ml-1"></i>
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
    <BookingModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" />
  </div>

</template>

<script>
  // import Avatar from "./Avatar";
  import Button from "@/components/Button";
  import BookingModal from '@/components/modules/BookingModal'
  export default {
    name: "Table",
    components: {
      // Avatar,
      Button,
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
.title {
  color: #808080;
}
.c-table table { border-spacing: 0 1rem;  }

.c-btn-sortable svg { transition: transform .15s ease-in; }
.c-btn-sortable .is-asc { transform: rotateZ(0deg); }
.c-btn-sortable .is-dsc { transform: rotateZ(180deg); }


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