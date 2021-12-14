<template>
  <main class="flex items-start">
    <div class="flex flex-col p-6 w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'操作手冊'" />
        </div>
      </div>
      <div class="content container">
        <pdf src="/manual.pdf" :page="pagination.currentPage + 1" @loaded="loaded = true" @num-pages="getPageNum($event)"></pdf>
        <Pagination v-on:pageChange="pageChange" :pagination="pagination" v-if="loaded" />
      </div>
    </div>
  </main>
</template>

<script>
  import Title from '@/components/Title'
  import Pagination from "@/components/modules/Pagination"
  import pdf from 'vue-pdf'
  export default {
    name: 'Manual',
    components: {
      Title,
      pdf,
      Pagination
    },
    data () {
      return {
        loaded: false,

        pagination: {
          currentPage: 0,
          length: 10
        }
      }
    },
    computed: {
    },
    methods: {
      getPageNum (event) {
        let self = this
        event ? self.pagination.length = event : null
      },
      pageChange (pageChange) {
        let self = this
        self.pagination.currentPage = pageChange
      }
    }
  }
</script>
<style>
</style>