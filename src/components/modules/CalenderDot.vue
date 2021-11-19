<template>
  <div class="bg-white">
    <v-calendar id="calender-dots" :class="{ isFull: isFullWidth }"
      :from-date="new Date()"
      :attributes="attributes"
      />
  </div>
</template>

<script>
export default {
  props: {
    isFullWidth: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showDate: new Date(),
      attributes: [
        {
          key: 'today',
          highlight: true,
          dates: new Date(),
        },
        {
          dot: {
            backgroundColor: '#ff4d4d',
          },
          dates: [
            new Date(2021, 8, 1),
            new Date(2021, 8, 10),
            new Date(2021, 8, 22),
            new Date(2021, 8, 6),
            new Date(2021, 8, 16)
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss">
#calender-dots {
  .isFull {
    .vc-weeks {
      min-width: 80vw !important;
    }
  }
}

</style>