<template>
  <div class="c-table">
    <table class="rwd-table w-full mb-2 border-separate text-sm">
      <tbody>
        <tr>
          <th v-for="column in columns" :key="column.name" class="whitespace-no-wrap text-center">{{ column.label }}</th>
          <slot name="record"></slot>
          <slot name="supplementaryMaterials"></slot>
          <slot name="actionsLabel"></slot>
          <slot name="startClassLabel"></slot>
          <slot name="othersLabel"></slot>
          <slot name="classDetailLabel"></slot>
        </tr>
        <tr v-for="(item, index) in data" :key="index">
          <td :data-th="column.label" v-for="(column, indexColumn) in columns" :key="indexColumn" @click="openModal" :class="{ cursorPointer: $route.name === 'Learn_record_supervise' }">
            {{ item[column.name] }}
          </td>
          <slot name="recordBtn"></slot>
          <slot name="supplementaryMaterialsBtn"></slot>
          <slot name="actionsBtn" :item="item"></slot>
          <slot name="startClass"></slot>
          <slot name="others"></slot>
          <slot name="classDetail"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'Table',
    components: {
    },
    props: {
      columns: {
        name: String,
        required: Boolean,
        label: String,
        sortable: Boolean,
        actions: Object
      },
      data: Array,
      filterKey: String
    },
    data () {
      let sortOrders = {}
      this.columns.forEach((column) => {
        sortOrders[column.name] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders,
        avatarSize: 8,
        nbVehiclesToShow: 8,
        vehiclesShown: 8
      }
    },
    computed: {
    },
    methods: {
      openModal () {
        if (this.$route.name === 'Learn_record_supervise') {
          this.$emit('openModal', true)
        }
      }
    }
  }
</script>

<style scoped>
.cursorPointer {
  cursor: pointer;
}
</style>