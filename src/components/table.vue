<template>
  <div class="c-table">
    <TeacherInfoModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
    <table class="rwd-table w-full mb-2 border-separate text-sm">
      <tbody>
        <tr>
          <slot name="AdmissionStatus"></slot>
          <th v-for="column in columns" :key="column.name" class="whitespace-no-wrap text-center">{{ column.label }}</th>
          <slot name="attend"></slot>
          <slot name="peopleNum"></slot>
          <slot name="record"></slot>
          <slot name="supplementaryMaterials"></slot>
          <slot name="statusLabel"></slot>
          <slot name="actionsLabel"></slot>
          <slot name="startClassLabel"></slot>
          <slot name="othersLabel"></slot>
          <slot name="classDetailLabel"></slot>
          <slot name="RegistrationNumLabel"></slot>
          <slot name="RegistrationReviewLabel"></slot>
        </tr>
        <tr v-for="(item, index) in data" :key="index">
          <slot name="AdmissionStatusContent"></slot>
          <td :data-th="column.label" v-for="(column, indexColumn) in columns" :key="indexColumn" @click="openModal" :class="{ cursorPointer: $route.name === 'Learn_record_supervise' }">
            <span class="lg:hidden" @click="openTeacherInfo(column.name)">
              <img v-if="column.name === 'teacher'" src="@/assets/img/vector.svg" alt="" class="inline-block object-contain w-8 mb-2 mr-2">
              {{ item[column.name] }}
            </span>
            <div class="flex-col items-center justify-center hidden lg:flex" @click="openTeacherInfo(column.name)">
              <img src="@/assets/img/vector.svg" alt="" class="block object-contain w-8 mb-1" v-if="column.name === 'teacher'">
              {{ item[column.name] }}
            </div>
          </td>
          <slot name="attendContent"></slot>
          <slot name="peopleNumContent"></slot>
          <slot name="recordBtn"></slot>
          <slot name="supplementaryMaterialsBtn"></slot>
          <slot name="statusText"></slot>
          <slot name="actionsBtn" :item="item"></slot>
          <slot name="startClass"></slot>
          <slot name="others"></slot>
          <slot name="classDetail"></slot>
          <slot name="RegistrationNumContent"></slot>
          <slot name="RegistrationReview"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import TeacherInfoModal from '@/components/popup/TeacherInfoModal'
  export default {
    name: 'Table',
    components: {
      TeacherInfoModal
    },
    props: {
      columns: {
        name: String,
        required: Boolean,
        label: String,
        sortable: Boolean,
        actions: Object
      },
      data: Array
    },
    data () {
      return {
        showfirstModal: false
      }
    },
    computed: {
    },
    methods: {
      openModal () {
        if (this.$route.name === 'Learn_record_supervise') {
          this.$emit('openModal', true)
        }
      },
      openTeacherInfo (name) {
        name === 'teacher' ? this.showfirstModal = true : null
      },
      closeModal (closeModal) {
        this.showfirstModal = closeModal
      },
      submit (submit) {
      }
    }
  }
</script>

<style scoped>
.cursorPointer {
  cursor: pointer;
}
.c-table table { border-spacing: 0 1rem;  }

.rwd-table {
  margin: auto;
  min-width: 300px;
  max-width: 100%;
  /* border-collapse: collapse; */
  border-collapse: separate;
}

.rwd-table tr:first-child {
  border-top: none;
}

.rwd-table tr:not(:first-child) {
  /* box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%); */
  /* margin-bottom: 0.75rem; */
}

.rwd-table th {
  display: none;
}

.rwd-table td {
  display: block;
  background: white;
}

.rwd-table td:first-child {
  /* rwd-table td */
}

.rwd-table td:last-child {
  margin-bottom: .5em;
}

.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 120px;
  display: inline-block;
  color: #000;
}

.rwd-table th,
.rwd-table td {
  text-align: center;
}

.rwd-table {
  color: #333;
  overflow: hidden;
}

@media screen and (max-width: 1025px) {
  .c-table table { border-spacing: 0 0rem !important; }
  .rwd-table tr:nth-child(2) {
    border-top: none;
  }
  .rwd-table th,
  .rwd-table td {
    text-align: left;
  }
  .rwd-table th,
  .rwd-table td {
    padding: .5em 1em;
  }

}
@media screen and (min-width: 1024px) {
  .rwd-table tr:hover:not(:first-child) {
    background-color: #d8e7f3;
  }
  .rwd-table td:before {
    display: none;
  }
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: .25em .5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
  .rwd-table td {
    padding: .75em !important;
  }
}

</style>