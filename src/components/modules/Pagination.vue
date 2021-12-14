<template>
  <div id="app" class="pagination m-6 flex justify-center">
    <div class="w-full mb-6 flex justify-center">
      <vue-ads-pagination
        :page="pagination.currentPage"
        :itemsPerPage="1"
        :max-visible-pages="3"

        :totalItems="pagination.length"
        >
          <template
            slot="buttons"
            slot-scope="props"
          >
          <vue-ads-page-button
            v-for="(button, key) in props.buttons"
            :key="key"
            v-bind="button"
            :class="{ 'vue-pagination-active pagination-btn': button.active }"
            @page-change="pageChange(button)"
            @range-change="rangeChange (button.start, button.end)"
          />
        </template>
      </vue-ads-pagination>
    </div>
  </div>
</template>

<script>
import '@/../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '@/../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css'
import VueAdsPagination, { VueAdsPageButton } from 'vue-ads-pagination'

export default {
    name: 'Pagination',

    components: {
      VueAdsPagination,
      VueAdsPageButton
    },

    props: {
      pagination: {
        type: Object
      }
    },

    data () {
      return {
        loading: false
      }
    },
    methods: {
      pageChange (button) {
        let self = this
        self.$emit('pageChange', button.page)
        console.log(button)
      },
      rangeChange (start, end) {
        console.log(start, end)
      }
    }
}
</script>
<style lang="scss">
.pagination {
  .vue-ads-pr-2 {
    display: none;
  }
  .vue-ads-w-6 {
    width: auto;
    padding: .5rem .75rem;
    border: 2px solid #0F455C !important;
    background: white;
  }

  .vue-ads-cursor-default {
    border: none !important;
    background: rgb(0, 0, 0, 0);
  }
  .vue-pagination-active {
    background: #0F455C;
    &:hover {
      background: #011F2C;
    }
  }
}
</style>