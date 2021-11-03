<template>
    <Modal :based-on="showfirstModal" :title="''" :modalClass="'modal-outer pb-4 leading-loose font-bold bg-gray-300'" @close="$emit('closeModal', false)">
      <div>
        <Table
          :columns="tableList.columns"
          :actions="tableList.actions"
          :data="tableList.datas">
          <template slot="actionsLabel">
            <th class="whitespace-no-wrap text-center">其他</th>
          </template>
          <template slot="actionsBtn">
            <td data-th="老師評語">
                <button
                  class="text-sm text-primary-normal hover:text-black-1  mx-1 text-white bg-gray-900 px-2 py-2 rounded"
                  >
                  <i class="far fa-star mr-1"></i>老師評語
                </button>
            </td>
          </template>
        </Table>
      </div>
      <div class="bg-white p-2">
        <h3>日期: 2021-03-08<span class="mx-2"></span>
          課名: Test01</h3>
        <h5 class="bg-gray-400 py-1">一、老師教學 Teacher's Teaching</h5>
        <div class="flex flex-wrap leading-loose py-2" v-for="n in 3" :key="n">
          <div class="w-full md:w-2/3 flex">
            <span class="mr-1">{{ n }}.</span>
            <div>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, ullam.</div>
              <div>發音正確度</div>
            </div>
          </div>
          <div class="w-full md:w-1/3">
            <span class="mr-1 opacity-0 md:hidden">{{ n }}.</span><i class="fas fa-star text-gray-800 mr-1" v-for="n in 4" :key="n"></i><i class="fas fa-star text-gray-200 mr-1" v-for="n in 1" :key="n"></i>
          </div>
        </div>

        <h5 class="bg-gray-400 py-1">二、學生學習 Student's Learning</h5>
        <div class="flex flex-wrap leading-loose py-2" v-for="n in 3" :key="n">
          <div class="w-full md:w-2/3 flex">
            <span class="mr-1">{{ n }}.</span>
            <div>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, ullam.</div>
              <div>發音正確度</div>
            </div>
          </div>
          <div class="w-full md:w-1/3">
            <span class="mr-1 opacity-0 md:hidden">{{ n }}.</span><i class="fas fa-star text-gray-800 mr-1" v-for="n in 4" :key="n"></i><i class="fas fa-star text-gray-200 mr-1" v-for="n in 1" :key="n"></i>
          </div>
        </div>

        <div class="w-full px-3 mt-2">
          <label class="w-full font-bold text-sm mb-2 px-2" for="problem">
            其他意見(comment)
          </label>
          <div class="w-full md:w-11/12 flex items-center">
            <textarea id="problem" placeholder=""
              class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
            </textarea>
          </div>
        </div>
        <div class="w-full px-3 mb-2 md:mb-4 flex justify-center">
          <a class="px-4 py-2 bg-gray-900 m-1 cursor-pointer text-white">儲存</a>
        </div>
      </div>
  </Modal>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import Table from '@/components/table'
export default {
  name: 'StudentsModal',

  data () {
    return {
      tableList: {
        columns: [
          { name: 'email', label: '帳號信箱', required: true },
          { name: 'name', label: '學生姓名', required: true },
          { name: 'isAttend', label: '有無出席', required: true },
          { name: 'score', label: '課後練習分數', required: true }
        ],
        datas: [
          {
            email: 'abc@gmail.com',
            name: 'Peggy',
            isAttend: '是',
            score: '99'
          }
        ]
      }
    }
  },

  props: {
    showfirstModal: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
  },

  components: {
    Modal,
    Table
  },
  computed: {
  },
  methods: {
    close () {
      let self = this
      self.$emit('closeModal', false)
    }
  }
}
</script>

<style lang="scss">
  .modal-footer {
    padding: 15px 0px 0px 0px;
    border-top: 1px solid #e5e5e5;
    margin-left: -14px;
    margin-right: -14px;
  }
  .vm-btn-close {
    outline: none !important;
  }
  .h-table {
    height: calc(100vh - 300px);
    overflow-y: scroll;
  }
</style>
