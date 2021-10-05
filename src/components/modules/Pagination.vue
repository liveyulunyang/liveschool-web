<template>
  <div id="app" class="m-6 flex justify-center">
    <div class="w-full mb-6 flex justify-center">
      <vue-ads-pagination
        :page="page"
        :itemsPerPage="10"
        :max-visible-pages="5"

        :totalItems="200"
      >
          <template
              slot="buttons"
              slot-scope="props"
          >
          <vue-ads-page-button
            v-for="(button, key) in props.buttons"
            :key="key"
            v-bind="button"
            :class="{ 'bg-gray-900 pagination-btn': button.active }"
            @page-change="page = button.page"
            @range-change="start = button.start; end = button.end"
          />
        </template>
      </vue-ads-pagination>
    </div>
  </div>
</template>

<script>
import '@/../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '@/../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css';

import VueAdsPagination, { VueAdsPageButton } from 'vue-ads-pagination';

export default {
    name: 'Pagination',

    components: {
        VueAdsPagination,
        VueAdsPageButton
    },

    data () {
      return {
        loading: false,
        page: 0,
      }
    },

    methods: {
      pageChange (page) {
        this.page = page
      },
      rangeChange (start, end) {
        console.log(start, end)
      },
    }
}
</script>
<style lang="scss">
  .vue-ads-pr-2 {
    display: none;
  }
  .flex {
    display: flex !important;
  }
  .vue-ads-w-6 {
    width: auto;
    padding: .5rem .75rem;
    border: 2px solid rgb(0, 0, 0) !important;
  }
  .vue-ads-cursor-default {
    border: none !important;
  }
</style>