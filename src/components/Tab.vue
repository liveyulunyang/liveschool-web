<template>
  <ul class="flex cursor-pointer">
    <li v-for="(item, index) in tagArr" :key="index" class="py-4 px-6 tag flex items-center justify-center mr-2 font-bold"
      :class="{ tagAct: tag === index }" @click="emit(index)">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Tab",
    props: {
      tag: {
        type: Number,
        default: 0
      },
      tagArr: {
        type: Array,
        require: true
      }
    },
    methods: {
      emit (index) {
        this.$emit('tagIdx', index)
      }
    }
  }
</script>
<style scoped>
  .tag {
    background: #A5C3C7;
    color: #DEECF0;
  }
  .tagAct {
    background: white;
    color: black;
  }
</style>