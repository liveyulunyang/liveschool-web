<template>
  <v-calendar
    class="custom-calendar max-w-full"
    :masks="masks"

    :attributes="attributes"
    disable-page-swipe
    is-expanded
    locale="en"
  >
    <template v-slot:day-content="{ day, attributes }">
      <div class="flex flex-col h-full z-10 overflow-hidden">
        <span class="day-label text-sm text-gray-900 text-right">{{ day.day }}</span>
        <div class="flex-grow overflow-y-auto overflow-x-auto">
          <p
            v-for="attr in attributes"
            :key="attr.key"
            class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1 text-left border-l-2"
            :class="attr.customData.class"
          >
            {{ attr.customData.time }}<br/>
            {{ attr.customData.title }}
          </p>
        </div>
      </div>
    </template>
  </v-calendar>
</template>

<script>
export default {
  name: 'Calemder',
  data() {
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    return {
      masks: {
        weekdays: 'WWW'
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: 'Lunch with mom.',
            class: 'bg-gray-400 font-bold',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: 'Take Noah to basketball practice',
            class: 'bg-gray-400 font-bold',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: 'bg-gray-400 font-bold',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Take car to the shop',
            class: 'bg-gray-400 font-bold',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Meeting with new client.',
            class: 'bg-gray-400 font-bold',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Mia's gymnastics practice.",
            class: 'bg-gray-400 font-bold',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: 'Cookout with friends.',
            class: 'bg-gray-400 font-bold',
            time: '08:00 - 08:50'
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Mia's gymnastics recital.",
            class: 'bg-gray-400 font-bold',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: 'Visit great grandma.',
            class: 'bg-gray-400 font-bold',
            time: '08:00 - 08:50'
          },
          dates: new Date(year, month, 25),
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
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
    /* background-color: #f1f5f8; */
    padding: 10px 0;
  }
  .vc-weeks {
    padding: 0;
  }
  .vc-weekday {
    /* background-color: var(--weekday-bg); */
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
    color: black !important;
    /* text-align: right !important; */
  }
  .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    /* height: var(--day-height); */
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
</style>