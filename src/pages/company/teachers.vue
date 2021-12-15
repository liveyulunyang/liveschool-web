<template>
  <main class="flex items-start">
    <div class="flex flex-col p-6 w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'師資陣容'" />
        </div>
      </div>
      <div class="content w-full">

        <Pagination v-on:pageChange="pageChange" :pagination="pagination" />
      </div>
    </div>
  </main>
</template>

<script>
import Title from '@/components/Title'
import Pagination from "@/components/modules/Pagination"
  export default {
    name: 'QA',
    components: {
      Title,
      Pagination
    },
    data () {
      return {
        pagination: {
          currentPage: 0,
          length: 10
        }
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style>
</style>