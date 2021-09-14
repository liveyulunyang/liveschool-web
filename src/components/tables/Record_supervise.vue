<template>
  <div class="c-table">
    <StudentsModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="''" v-on:submit="submit" />
    <table class="rwd-table w-full mb-2 border-separate text-sm">
      <tbody>
        <tr>
          <th v-for="column in columns" :key="column.name" class="whitespace-no-wrap text-center">{{ column.label }}</th>
        </tr>
        <tr v-for="item in data" :key="item.id">
          <td data-th="狀態">
            {{ item.time }}
          </td>
          <td data-th="建立時間">
            {{ item.status }}
          </td>
          <td data-th="課程名稱">
            {{ item.point }}
          </td>
          <td data-th="課程種類">
            {{ item.topic }}
          </td>
          <td data-th="教師專案">
            {{ item.classification }}
          </td>
          <td data-th="安排教師">
            {{ item.name }}
          </td>
          <td data-th="人數">
            <a class="block cursor-pointer" @click="openModal">
              {{ item.other }}
            </a>
          </td>
          <td data-th="課程使用點數">
            {{ item.detail }}
          </td>
          <td data-th="預約時間">
            {{ item.orderTime }}
          </td>
          <td data-th="實際開課時間">
            {{ item.classTime }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  import StudentsModal from '@/components/modules/StudentsModal'
  export default {
    name: "Table",
    components: {
      StudentsModal
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