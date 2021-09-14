<template>
  <table class="table-order w-full text-left" column="8">
    <thead class="text-sm bg-gray-400 text-NotoSansRegular tracking-wider">
      <tr>
        <th class="py-3 px-2 sm:text-center text-gray-700">訂購日期</th>
        <th class="py-3 px-2 text-gray-700">訂單編號</th>
        <th class="py-3 px-2 sm:text-center text-gray-700">訂單狀態</th>
        <th class="py-3 px-2 sm:text-center text-gray-700">總金額</th>
        <th class="py-3 px-2 sm:text-center text-gray-700">發票類型</th>
        <th class="py-3 px-2 sm:text-center text-gray-700">載具類別</th>
        <th class="py-3 px-2 sm:text-center text-gray-700">發票日期</th>
        <th class="py-3 px-2 sm:text-center text-gray-700">發票號碼</th>
        <th class="py-3 px-2 sm:text-center text-gray-700">中獎狀態</th>
      </tr>
    </thead>
    <tbody class="text-sm">
      <tr>
        <td class="sm:border-b text-gray-700 sm:px-2">
          <span class="w-1/2 mobile-label">訂購日期：</span>
          <span class="w-1/2 text-right sm:text-center  whitespace-no-wrap">2021.09.01 12:00:00</span>
        </td>
        <td class="sm:border-b text-gray-700 sm:px-2">
          <span class="w-1/2 mobile-label">訂單編號：</span>
          <a
            class="w-1/2 sm:w-auto text-right sm:text-center hoverA cursor-pointer underline lg:no-underline">
            999
          </a>
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
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
      // openModal () {
      //   this.showfirstModal = true
      // },
      // closeModal (closeModal) {
      //   this.showfirstModal = closeModal
      // }
    }
  }
</script>

<style scoped lang="scss">
  .table-order {
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