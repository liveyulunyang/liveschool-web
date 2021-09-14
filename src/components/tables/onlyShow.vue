<template>
  <table class="table-order w-full text-left border-separate" column="8">
    <thead class="text-sm text-NotoSansRegular tracking-wider">
      <tr>
        <th v-for="column in columns" :key="column.name" class="whitespace-no-wrap text-center">{{ column.label }}</th>
      </tr>
    </thead>
    <tbody class="text-sm">
      <tr v-for="(item, index) in data" :key="index" class="bg-white">
        <td v-for="(column, indexColumn) in columns" :key="indexColumn" class="sm:border-b text-gray-700 sm:px-2">
          <span class="w-1/2 mobile-label">{{ column.label }}：</span>
          <span class="w-1/2 sm:w-full text-right whitespace-no-wrap sm:inline-block sm:text-center">{{ item[column.name] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
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
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .table-order {
    border-spacing: 0 1rem;
    tbody {
      tr {
        td {
          padding: .8rem 0;
        }
      }
    }
  }
  .table-order .mobile-label {
    display: none;
  }
  .member-content-bd a, .member-content-bd button span {
    position: relative;
    display: inline-block;
  }
  @media (min-width: 1025px) {
    .member-content-bd .hoverA:hover:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #303030;
      bottom: -2px;
    }
  }

  @media (max-width: 641px) {
    .table-order .mobile-label {
      display: inline-block !important;
      text-align: left;
    }
    .table-order thead tr:first-child {
        display: none;
      }
    .table-order tbody, .table-order td, .table-order tbody tr, .table-order td .mobile-label {
        display: block;
        text-align: left;
    }
    .table-order tbody tr {
        border: 1px solid #C4C4C4;
        border-radius: 5px;
        padding: 12px 16px;
        font-size: 0;
        margin-bottom: .6rem;
        box-sizing: border-box;
    }
    .table-order tbody, .table-order td, .table-order tr {
        display: block;
        text-align: left;
    }
    .table-order td {
        display: inline-block;
        box-sizing: border-box;
        padding: 4px 4px 4px 0 !important;
        vertical-align: top;
        font-size: .9rem;
        font-weight: 900;
    }
    .table-order tbody, .table-order td, .table-order tr {
      display: block;
      text-align: left;
    }
    .table-order td>span {
      display: inline-block;
    }
  }
</style>