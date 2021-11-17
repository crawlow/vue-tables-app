<template>
  <div class="table-container-small">
    <div class="search-small">
      <input type="text" class="search-input-small" placeholder="Поиск..">
      <button class="search-btn-small">
        <img src="~@assets/icons/search.svg" alt="search" class="search-btn-small-icon">
      </button>
    </div>
    <div class="table-small"
         v-for="(employee, index) in $store.state.employees" :key="employee.id"
    >
      <small-table-item
          :employee="employee"
          v-model:delete-employee="deleteEmployee"
          v-model:active-page="activePage"
          v-model:change-employee-for-edit="changeEmployeeForEdit"
          v-model:change-is-edit="changeIsEdit"
          v-model:change-is-modal-showed="changeIsModalShowed"
          :index="index"
          :employee-page="employeePage"
      ></small-table-item>
    </div>
    <div style="display:flex;justify-content:center;">
      <pagination
          page-name="employees"
          v-model:active-page="activePage"
          v-model:changePage="changeActivePage"
      ></pagination>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Options, Prop, Emit} from 'vue-property-decorator'
import {EmployeeType} from '@/store'
import SmallTableItem from '@views/components/table/small-table/small-table-item.vue'
import Pagination from '@views/components/pagination.vue'

@Options({
  name: 'small-table',
  components: {SmallTableItem, Pagination}
})
export default class SmallTable extends Vue {
  @Prop() employeePage!: number
  @Prop() activePage!: number
  @Emit('update:activePage') changeActivePage(page: number) {
    return page
  }
  @Prop() deleteEmployee!: (index: number) => void
  @Prop() employeeForEdit: EmployeeType | undefined
  @Emit('update:employeeForEdit') changeEmployeeForEdit(employee: EmployeeType) {
    return employee
  }
  @Prop() isEdit: boolean
  @Emit('update:isEdit') changeIsEdit(value: boolean) {
    return value
  }
  @Prop() isModalShowed: boolean
  @Emit('update:isModalShowed') changeIsModalShowed(value: boolean) {
    return value
  }
}
</script>

<style scoped lang="less">
.table-container-small {
  display: none;
  padding: 35px 35px 51px 29px;
  flex-direction: column;

  @media (max-width: 800px) {
    display: flex;
  }

  .search-small {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;

    .search-input-small {
      border: 1px solid #CED4DE;
      padding: 9px 0 8px 20px;
      height: 35px;
      width: 90%;

      &::placeholder {
        color: #BEBFC3;
      }
    }

    .search-btn-small {
      width: 35px;
      height: 35px;
      background: #FF0000;
      border: none;
      margin-left: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      .search-btn-small-icon {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>