<template>
  <div class="table-container-big">
    <div class="search">
      <input type="text" class="input" placeholder="Поиск.."/>
      <button class="btn">Поиск</button>
    </div>
    <div class="table">
      <div class="row">
        <span class="col-name col-name-id">id</span>
        <span class="col-name col-name-initials">ФИО</span>
        <span class="col-name col-name-position">Должность</span>
        <span class="col-name col-name-age">Возраст</span>
        <span class="col-name-square" style="margin-right: 1px;"></span>
        <span class="col-name-square"></span>
      </div>
      <div
          style="margin-top: 1px;"
          v-for="(employee, index) in $store.state.employees"
          :key="employee.id"
      >
        <employees-big-table-item
            :employee="employee"
            v-model:delete-employee="deleteEmployee"
            v-model:active-page="activePage"
            v-model:change-employee-for-edit="changeEmployeeForEdit"
            v-model:change-is-edit="changeIsEdit"
            v-model:change-is-modal-showed="changeIsModalShowed"
            :index="index"
            :employee-page="employeePage"
        ></employees-big-table-item>
      </div>
    </div>
    <pagination
        page-name="employees"
        v-model:changePage="changeActivePage"
        v-model:active-page="activePage"
    ></pagination>
  </div>
</template>

<script lang="ts">
import {Vue, Options, Prop, Emit} from 'vue-property-decorator'
import {EmployeeType} from '@/store'
import Pagination from '@views/components/pagination.vue'
import EmployeesBigTableItem from '@views/components/table/employees/big-table/employees-big-table-item.vue'

@Options({
  name: 'employees-big-table',
  components: {EmployeesBigTableItem, Pagination}
})
export default class EmployeesBigTable extends Vue {
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
.table-container-big {
  height: 100%;
  padding: 35px 35px 51px 29px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    display: none;
  }

  .search {
    margin-bottom: 25px;
    display: flex;
    align-items: center;

    .input {
      width: 878px;
      height: 35px;
      margin-right: 6px;
      border: 1px solid #CED4DE;

      &::placeholder {
        color: #BEBFC3;
        padding-left: 30px;
        font-size: 15px;
      }
    }

    .btn {
      width: 85px;
      height: 36px;
      background: red;
      color: white;
      font-size: 14px;
      border: none;
    }
  }

  .table {
    margin-bottom: 19px;

    .row {
      width: 100%;
      height: 37px;
      display: flex;

      @media (max-width: 1400px) and (min-width: 1000px) {
        height: 30px;
      }

      @media (max-width: 1000px) {
        height: 25px;
      }

      .col-name {
        background: #C8D1DE;
        font-size: 14px;
        font-weight: 600;
        margin-right: 1px;
        color: #25274F;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 12px;

        @media (max-width: 1000px) {
          font-size: 13px;
        }
      }

      .col-name-id {
        width: 205px;
      }

      .col-name-initials {
        width: 237px;
      }

      .col-name-position {
        width: 219px;
      }

      .col-name-age {
        width: 229px;
      }

      .col-name-square {
        width: 37px;
        height: 100%;
        background: #C8D1DE;
      }

    }
  }

}
</style>