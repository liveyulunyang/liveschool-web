<template>
  <button class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm mx-1 rounded whitespace-no-wrap" @click="exportAction">
    <i class="fas fa-arrow-down mr-1"></i>{{ title }}
  </button>
</template>
<script>
export default {
  name: 'ExportBtn',

  data () {
    return {
    }
  },

  props: {
    title: {
      type: String,
      default: '匯出資料'
    },
    exportTitle: {
      type: String,
      default: '預約紀錄'
    },
    exportData: {
      type: Object
    }
  },

  components: {
  },
  computed: {
  },
  methods: {
    exportAction () {
      //要匯出的json資料
      var jsonData = [
        {
          name:'路人甲',
          phone:'123456789',
          email:'[email protected]'
        },
        {
          name:'炮灰乙',
          phone:'123456789',
          email:'[email protected]'
        },
        {
          name:'土匪丙',
          phone:'123456789',
          email:'[email protected]'
        },
        {
          name:'流氓丁',
          phone:'123456789',
          email:'[email protected]'
        },
      ]
      //列標題，逗號隔開，每一個逗號就是隔開一個單元格
      let str = `姓名,電話,郵箱\n`
      //增加\t為了不讓表格顯示科學計數法或者其他格式
      for (let i = 0; i < jsonData.length; i++) {
        for (let item in jsonData[i]) {
          str+=`${jsonData[i][item] + '\t'},`
        }
        str+='\n'
      }
      //encodeURIComponent解決中文亂碼
      let uri = 'data:text/csvcharset=utf-8,\ufeff' + encodeURIComponent(str)
      //通過建立a標籤實現
      var link = document.createElement('a')
      link.href = uri
      //對下載的檔案命名
      link.download =  this.exportTitle + '.csv'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
</script>

<style>
</style>
