<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'首頁管理'" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import Title from '@/components/Title'
  export default {
    name: "IndexManage",
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