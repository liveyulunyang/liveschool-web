<template>
  <main class="flex p-6">
    <div class="md:flex w-full container">
      <router-link :to="{ name: 'bookingClass', params: { type: 'talk' } }" target="_blank" class="w-1/3 p-5 cursor-pointer"><img alt="" src="@/assets/img/digital/btn_talk.png" class="object-contain mx-auto transform hover:scale-105 shadow-lg"></router-link>
      <router-link :to="{ name: 'bookingClass', params: { type: 'class' } }" target="_blank" class="w-1/3 p-5 cursor-pointer"><img alt="" src="@/assets/img/digital/btn_class.png" class="object-contain mx-auto transform hover:scale-105 shadow-lg"></router-link>
      <router-link :to="{ name: 'bookingClass', params: { type: 'teacher' } }" target="_blank" class="w-1/3 p-5 cursor-pointer"><img alt="" src="@/assets/img/digital/btn_teacher.png" class="object-contain mx-auto transform hover:scale-105 shadow-lg"></router-link>
    </div>
  </main>
</template>

<script>
  export default {
    name: "Info",
    components: {
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>