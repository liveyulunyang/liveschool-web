<template>
  <div class="c-table">
    <table class="rwd-table w-full mb-2 border-separate text-sm">
      <tbody>
        <tr>
          <th v-for="column in columns" :key="column.name" class="whitespace-no-wrap text-center">{{ column.label }}</th>
        </tr>
        <tr v-for="item in data" :key="item.id">
          <td data-th="姓名/英文姓名">
            {{ item.name }}
          </td>
          <td data-th="帳號(信箱)">
            {{ item.account }}
          </td>
          <td data-th="分校">
            {{ item.branch }}
          </td>
          <td data-th="班級">
            {{ item.class }}
          </td>
          <td data-th="點數">
            {{ item.point }}
          </td>
          <td data-th="班主任">
            {{ item.director }}
          </td>
          <td data-th="執行動作">
            <router-link :to="{ name: 'learn_record_student', params: { id: '1' } }" class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
              <i class="fas fa-folder-open"></i>
            </router-link>
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
/* .title {
  color: #808080;
} */


/* THE END OF THE IMPORTANT STUFF */

/* Basic Styling */

/* h1 {
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
  background: white;
  border: 1px solid black;
} */
</style>