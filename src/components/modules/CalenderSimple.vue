<template>
  <div id="calendar">
    <calendar-view
      :displayPeriodUom="Calendertype"
      :displayPeriodCount="1"
      :show-date="showDate"
      :startingDayOfWeek="1"
      :items="events"
      :locale="'en'"
      :enableDragDrop="false"
      :showTimes="true"
      @click-item="onClickItem"
      @click-date="onClickDate"
      @show-date-change="onShowDateChange"
      class="theme-default holiday-us-traditional holiday-us-official">
      <calendar-view-header
        slot="header"
        slot-scope="t"
        :header-props="t.headerProps"
        @input="setShowDate" />
    </calendar-view>
  </div>
</template>

<script>
	import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'
  require("vue-simple-calendar/static/css/default.css")
	require("vue-simple-calendar/static/css/holidays-us.css")
  export default {
    name: 'Calendar',
    props: {
      Calendertype: {
        type: String,
        default: 'month'
      }
    },
    data () {
      return {
        showDate: new Date(),
        selectedDate: {},
        events: [
          {
            startDate: '2021-8-4 8:00',
            endDate: '2021-8-4 8:00',
            title: 'Sample event 1',
            classes: 'alreadyDone'
          },
          {
            startDate: '2021-8-15 8:00',
            endDate: '2021-8-15 8:00',
            title: 'Sample event 1',
            classes: 'alreadyDone'
          },
          {
            startDate: '2021-8-21 10:00',
            endDate: '2021-8-21 10:00',
            title: 'Sample event 2',
            classes: 'alreadyDone'
          },
          {
            startDate: '2021-8-25 10:00',
            endDate: '2021-8-25 10:00',
            title: 'Sample event 2',
            classes: 'reservelClass'
          },
          {
            startDate: '2021-8-25 8:00',
            endDate: '2021-8-25 8:00',
            title: 'Sample event 1',
            classes: 'reservelClass'
          },
          {
            startDate: '2021-8-27 10:00',
            endDate: '2021-8-27 10:00',
            title: 'Sample event 2',
            classes: 'personalClass'
          }
        ]
      }
    },
    components: {
      CalendarView,
      CalendarViewHeader
    },
    mounted () {
    },
    methods: {
      setShowDate (d) {
        this.showDate = d
      },
      onShowDateChange(d) {
        this.showDate = d
        console.log('onShowDateChange')
      },
      onClickDate (d, calendarItems) {
        this.selectedDate = { [d.toISOString().substring(0,10)]: ["ClassForSelectedDate"] }
        console.log(d)
      },
      onClickItem (calendarItem) {
        console.log(calendarItem)
      }
    }
  }
</script>
<style>
	#calendar {
		color: #2c3e50;
		height: calc(100vh - 250px);
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
  .cv-day {
    min-height: 80px;
  }

  .personalClass {
    border-radius: 0 !important;
    border-left: 2px solid #C76565 !important;
    background: rgba(199, 101, 101, 0.1) !important;
    padding-left: 4px !important;
    text-align: left;
  }
  .reservelClass {
    border-radius: 0 !important;
    border-left: 2px solid #55ACB8 !important;
    background: rgba(85, 172, 184, 0.1) !important;
    padding-left: 4px !important;
    text-align: left;
  }
  .alreadyDone {
    border-radius: 0 !important;
    border-left: 2px solid rgb(54, 0, 50) !important;
    background: rgba(86, 86, 86, 0.1) !important;
    padding-left: 4px !important;
    text-align: left;
  }
  .theme-default .cv-header, .theme-default .cv-header-day {
    background-color: #ffffff !important;
  }
  .theme-default .cv-day.past {
    background-color: #ffffff !important;
  }
</style>