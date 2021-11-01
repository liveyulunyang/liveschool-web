

<template>
  <div id="vue-instance" class="c-table">
      <table class="table table-striped table-bordered table-hover w-full rwd-table mb-2 border-separate text-sm">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
                {{ column }}
            </th>
          </tr>
      </thead>

      <tbody>
      <template v-for="(item, idx) in testing">
        <tr :key="idx" class="shadow-lg">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td data-th="狀態">
            <!-- <button
            class="text-gray-600 mx-1 border rounded border-gray-600 p-1 px-3"
            >
            idle
            </button> -->
            <!-- <button @click="toggle(idx)"
            class="mx-1 border rounded p-1 px-3 text-class-blue border-class-blue focus:outline-none"
            >
            reserved <i class="fas fa-chevron-down ml-1" v-if="idx !== selectedIdx"></i> <i class="fas fa-chevron-up ml-1" v-if="idx === selectedIdx"></i>
            </button> -->
            <button  @click="toggle(idx)"
            class="text-class-red mx-1 border rounded p-1 px-3 border-class-red focus:outline-none"
            >
              in meeting <i class="fas fa-chevron-down ml-1" v-if="idx !== selectedIdx"></i> <i class="fas fa-chevron-up ml-1" v-if="idx === selectedIdx"></i>
            </button>
          </td>
          <td data-th="執行動作">
            <!-- <button class="bg-gray-900 mx-1 text-white py-2 px-3 rounded h-full text-sm focus:outline-none"
            >
            <i class="fas fa-plus mr-1 text-xs"></i> Create
            </button> -->
            <button class="bg-class-red mx-1 text-white py-2 px-3 rounded h-full text-sm focus:outline-none"
            >
            <i class="fas fa-plus mr-1 text-xs"></i> Destory
            </button>
          </td>
        </tr>
        <tr v-if="idx === selectedIdx" class="view " :key="item.id">
          <td :colspan="columns.length" >
            <div class="accordian-body">
              <div class="w-full px-3 py-3 md:flex">
                <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="id">ID
                </label>
                <div class="w-full md:w-11/12 flex items-center flex-wrap">
                  <div class="w-full px-1 flex items-center">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="id" type="text" disabled value="28301"  name="id">
                  </div>
                </div>
              </div>
              <div class="w-full px-3 py-3 md:flex">
                <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="topic">Topic
                </label>
                <div class="w-full md:w-11/12 flex items-center flex-wrap">
                  <div class="w-full px-1 flex items-center">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="topic" type="text" disabled value="CTL測試課程" name="topic">
                  </div>
                </div>
              </div>
              <div class="w-full px-3 py-3 md:flex">
                <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="time">Time
                </label>
                <div class="w-full md:w-11/12 flex items-center flex-wrap">
                  <div class="w-full px-1 flex items-center">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="time" type="text" disabled value="2021-06-22 22:00-23:00" name="time">
                  </div>
                </div>
              </div>
              <div class="w-full px-3 py-3 md:flex">
                <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="one_choice">Start URL
                </label>
                <div class="w-full md:w-9/12 flex items-center flex-wrap">
                  <div class="w-full px-1 flex items-center">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="startUrl" type="text" value="https://zoom.us/s/95354191093?zak=eyJ0eXAiOiJKV1QiLCJzdiI6IjAwMDAwMSIsInptX3NrbSI6InptX28ybSIsImFsZyI6IkhTMjU2In0.eyJhdWQiOiJjbGllbnRzbSIsInVpZCI6ImZxLU52N2FTVDNpNzVKbzRoTlhVSEEiLCJpc3MiOiJ3ZWIiLCJzdHkiOjEwMCwid2NkIjoiYXcxIiwiY2x0IjowLCJtbnVtIjoiOTUzNTQxOTEwOTMiLCJzdGsiOiJiVUszMHFDTnpLTjBqaEpjS0hwOG8zVTg4bENnckZwLVhRaHZVNi1XMTd3LkJnWWdRVVV2T1hSSFluSm1ORVYyU0hKQmNXaHRhVE5oTjJsRFptUm5WVlUyWlRkQVptRmpOV1JtTURjM1pqRXhNVEExWlRGaVlXSmhPVEkxWVRGbVpqYzFNV1EzTWpKa05XWTFNV0U0Tm1SbFkyUTNaVGRqWmpaak5UQmxPRFkzWTJRNE5nQU1jbVZzY0hoWEwxVkRaMEU5QUFOaGR6RUFBQUY4dTkwVVZnQVNkUUFBQUEiLCJleHAiOjE2MzUyNDY2MDAsImlhdCI6MTYzNTIzOTQwMCwiYWlkIjoiekZVdEpUYkZRb3V0WXNNWVhNeEFnUSIsImNpZCI6IiJ9.eDK60DHi29oNK77_KyGBLh_M8gD0ajhyWSoOKhcYXF8">
                  </div>
                </div>
                <div class="w-full md:w-2/12 flex items-center flex-wrap px-1">
                  <button
                  class="bg-gray-900 mx-1 text-white py-1 px-2 w-full rounded h-full text-sm"
                  >
                  Copy (For teacher)
                  </button>
                </div>
              </div>
              <div class="w-full px-3 py-3 md:flex">
                <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="one_choice">Join URL
                </label>
                <div class="w-full md:w-9/12 flex items-center flex-wrap">
                  <div class="w-full px-1 flex items-center">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="joinUrl" type="text" value="https://zoom.us/j/95354191093">
                  </div>
                </div>
                <div class="w-full md:w-2/12 flex items-center flex-wrap px-1">
                  <button
                  class="bg-gray-900 mx-1 text-white py-1 px-2 w-full rounded h-full text-sm"
                  >
                  Copy (For student)
                  </button>
                </div>
              </div>
              <div class="w-full px-3 py-3 md:flex">
                <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="one_choice">HostID
                </label>
                <div class="w-full md:w-10/12 flex items-center flex-wrap">
                  <div class="w-full px-1 flex items-center">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="startUrl" type="text" value="KyGBLh_M8gD0ajhyWSoOKhcYXF8">
                  </div>
                </div>
                <div class="w-full md:w-1/12 flex items-center flex-wrap px-1">
                  <button
                  class="bg-gray-900 mx-1 text-white py-1 px-2 w-full rounded h-full text-sm"
                  >
                  Copy
                  </button>
                </div>
              </div>
              <div class="w-full px-3 py-3 md:flex">
                <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="one_choice">Password
                </label>
                <div class="w-full md:w-10/12 flex items-center flex-wrap">
                  <div class="w-full px-1 flex items-center">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="joinUrl" type="text" value="">
                  </div>
                </div>
                <div class="w-full md:w-1/12 flex items-center flex-wrap px-1">
                  <button
                  class="bg-gray-900 mx-1 text-white py-1 px-2 w-full rounded h-full text-sm"
                  >
                  Copy
                  </button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </template>
      </tbody>
    </table>
  </div>
</template>

<script>
  // import TeacherInfoModal from '@/components/popup/TeacherInfoModal'
  export default {
    name: 'Table_accordion',
    components: {
      // TeacherInfoModal
    },
    props: {
      // columns: {
      //   name: String,
      //   required: Boolean,
      //   label: String,
      //   sortable: Boolean,
      //   actions: Object
      // },
      data: Array,
      isaccordion: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        showfirstModal: false,

        selectedIdx: null,
        testing: [
          {
            id: 'ROOM 1',
            name: "VeZzfU9wR1K7dRccNYpMbg",
            contentVisible: false
          },
          {
            id: 'ROOM 2',
            name: "VeZzfU9wR1K7dRccNYpMbg",
            contentVisible: false
          },
          {
            id: 'ROOM 3',
            name: "VeZzfU9wR1K7dRccNYpMbg",
            contentVisible: false
          },
        ],
      columns: ['教室編號', '代碼', '狀態', '執行動作']
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
      },
      toggle (idx) {
        if (this.selectedIdx !== idx) {
          this.selectedIdx = idx
        } else {
          this.selectedIdx = null
        }
      }
    }
  }
</script>

<style scoped>
.cursorPointer {
  cursor: pointer;
}
.c-table table {
  border-spacing: 0 1rem;
}
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