<template>
  <div>
    <v-calendar id="calender-dots"
      :from-date="new Date()"
      :attributes="attributes"
      />
    </div>
</template>

<script>
export default {
  data () {
    return {
      attributes: [
        {
          dot: {
            backgroundColor: '#ff4d4d',
          },
          dates: [
            new Date(2021, 7, 1),
            new Date(2021, 7, 10),
            new Date(2021, 7, 22),
            new Date(2021, 7, 6),
            new Date(2021, 7, 16),
          ]
        },
        // {
        //   dot: {
        //     backgroundColor: '#398fac',
        //   },
        //   dates: [
        //     new Date(2021, 8, 4),
        //     new Date(2021, 8, 10),
        //     new Date(2021, 8, 15),
        //     new Date(2021, 1, 1),
        //     new Date(2021, 1, 12),
        //     {
        //       start: new Date(2021, 1, 20),
        //       end: new Date(2021, 1, 25),
        //     },
        //   ],
        // },
        // {
        //   dot: {
        //     backgroundColor: '#794dff',
        //   },
        //   dates: [
        //     new Date(2021, 8, 12),
        //     new Date(2021, 8, 26),
        //     new Date(2021, 8, 15),
        //     new Date(2021, 1, 5),
        //     new Date(2021, 1, 6),
        //     new Date(2021, 1, 9),
        //     new Date(2021, 1, 20),
        //     new Date(2021, 1, 25),
        //   ]
        // }
      ]
    }
  }
}
</script>
<style lang="scss">
#calender-dots {
  .vc-weeks {
    min-width: 90vw !important;
  }
}
</style>