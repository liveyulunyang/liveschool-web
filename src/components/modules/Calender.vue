<template>
  <div id="calendar-month">
    <v-calendar
    class="custom-calendar max-w-full"
    :masks="masks"

    :attributes="attributes"
    disable-page-swipe
    is-expanded
    locale="en"
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden relative">
          <span class="day-label text-sm text-gray-900 text-right">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p @click="openDayEvent(attr)"
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1 text-left cursor-pointer"
              :class="attr.customData.class"
            >
              {{ attr.customData.time }}<br/>
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
    <CalenderModel :showfirstModal="showfirstModal" v-on:closeModal="closeModal" />
  </div>
</template>

<script>
import CalenderModel from '@/components/modules/CalenderModel'
export default {
  name: 'Calemder',
  components: {
    CalenderModel
  },
  data () {
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    return {
      showfirstModal: false,
      masks: {
        weekdays: 'WWW'
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: 'Lunch with mom.',
            class: 'finishClass',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 1)
        },
        {
          key: 2,
          customData: {
            title: 'Take Noah to basketball practice',
            class: 'finishClass',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 2)
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: 'finishClass',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 5)
        },
        {
          key: 4,
          customData: {
            title: 'Take car to the shop',
            class: 'finishClass',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 5)
        },
        {
          key: 4,
          customData: {
            title: 'Meeting with new client.',
            class: 'branchClass',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 7)
        },
        {
          key: 5,
          customData: {
            title: "Mia's gymnastics practice.",
            class: 'personClass',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 11)
        },
        {
          key: 6,
          customData: {
            title: 'Cookout with friends.',
            class: 'personClass',
            time: '08:00 - 08:50'
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Mia's gymnastics recital.",
            class: 'branchClass',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 22)
        },
        {
          key: 8,
          customData: {
            title: 'Visit great grandma.',
            class: 'personClass',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 25)
        },
        {
          key: 8,
          customData: {
            title: 'Visit great grandma.',
            class: 'personClass',
            time: '08:00 - 08:50'
          },
          dates: new Date()
        }
      ]
    }
  },
  methods: {
    openDayEvent (val) {
      console.log(val)
      this.showfirstModal = true
    },
    closeModal (closeModal) {
      this.showfirstModal = closeModal
    }
  }
}
</script>

<style lang="scss">
#calendar-month {
  .is-today {
    --tw-bg-opacity: 1;
    background-color: rgba(255, 251, 235, var(--tw-bg-opacity)) !important;
  }
  .bg-gray-400 {
    --tw-bg-opacity: 1;
    background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
  .custom-calendar.vc-container {
    --day-border: 1px solid #d1d6db;
    --day-border-highlight: 1px solid #b8c2cc;
    --day-width: 90px;
    --day-height: 90px;
    --weekday-bg: #f8fafc;
    --weekday-border: 1px solid #eaeaea;
    border-radius: 0;
    width: 100%;
  }
  .vc-header {
    padding: 10px 0;
  }
  .vc-weeks {
    padding: 0;
  }
  .vc-weekday {
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
    color: black !important;
  }
  .day-label {
    position: absolute;
    right: 5px;
  }
  .vc-day {
    padding: 0 0px 3px 0px;
    text-align: left;
    min-height: 90px !important;
    min-width: var(--day-width);
    background-color: white;
  }
  .vc-day .weekday-1,
  .vc-day .weekday-7 {
      background-color: #eff8ff;
    }
  .vc-day:not(.on-bottom) {
    border-bottom: var(--day-border);
  }
  .vc-day.weekday-1 {
    border-bottom: var(--day-border-highlight);
  }
  .vc-day:not(.on-right) {
    border-right: var(--day-border);
  }
  .vc-day-dots {
    margin-bottom: 5px;
  }
}
.personClass {
  background: rgba(199, 101, 101, 0.1);
  border-left: 3px solid #C76565 !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  line-height: 18px !important;
}
.branchClass {
  background: rgba(85, 172, 184, 0.1);
  border-left: 3px solid #55ACB8 !important;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
}
.finishClass {
  background: rgba(86, 86, 86, 0.1);
  border-left: 3px solid #565656 !important;
  font-weight: 700  !important;
  font-size: 16px !important;
  line-height: 18px !important;
}
</style>