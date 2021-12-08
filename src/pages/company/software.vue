<template>
  <main class="flex items-start">
    <div class="flex flex-col p-6 w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'軟體下載'" />
        </div>
      </div>
      <div class="content w-full">
      </div>
    </div>
  </main>
</template>

<script>
import Title from '@/components/Title'
  export default {
    name: 'QA',
    components: {
      Title
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
<style>
</style>