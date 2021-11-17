<template>
  <main class="p-6 max-w-8xl mx-auto">
    <FilterModal :showItems="showItems" class="mb-4"/>
    <div class="w-full flex flex-wrap">
      <div v-for="n in 5" :key="n" class="w-full sm:w-1/2 lg:w-1/4 p-4">
        <ClassModual class="" />
      </div>
    </div>
    <Pagination />

  </main>
</template>

<script>
import ClassModual from '@/components/booking/ClassModule'
import FilterModal from '@/components/FilterModal'
import Pagination from '@/components/modules/Pagination'

  export default {
    name: "Booking_Class",
    components: {
      FilterModal,
      ClassModual,
      Pagination,
    },
    data () {
      return {
        showItems: {
          role: false,
          listStatus: false,
          classTopic: true,
          classification: true,
          branch: false,
          classType: false,
          timePeriod: true,
          searchOnlyInput: true,
          sync: true,
          approvalStatus: false
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