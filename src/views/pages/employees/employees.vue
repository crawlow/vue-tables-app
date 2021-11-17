<template>
  <div class="container">
    <div class="info">
      <span class="title">Сотрудники</span>
      <button class="btn" @click="this.isModalShowed = true;">Добавить сотрудника</button>
    </div>
    <employees-big-table
        v-model:active-page="activePage"
        v-model:delete-employee="deleteEmployee"
        v-model:employee-for-edit="employeeForEdit"
        v-model:is-edit="isEdit"
        v-model:is-modal-showed="isModalShowed"
        :employee-page="1"
    ></employees-big-table>
    <employees-small-table
        v-model:active-page="activePage"
        v-model:delete-employee="deleteEmployee"
        v-model:employee-for-edit="employeeForEdit"
        v-model:is-edit="isEdit"
        v-model:is-modal-showed="isModalShowed"
        :employee-page="1"
    ></employees-small-table>
  </div>
  <employees-modal  v-if="isModalShowed"
      v-model:is-modal-showed="isModalShowed"
      v-model:is-edit="isEdit"
      v-model:employee="employeeForEdit"
  ></employees-modal>
  <el-dialog
      v-model="deleteDialog"
      title="Удаление сотрудника"
      width="75%"
  >
    <span>Вы действительно хотите удалить сотрудника "{{ deleteName }}" ?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="success" @click="deleteDialog = false">Отмена</el-button>
        <el-button type="danger" @click="()=>{deleteDialog = false; this.$store.commit('deleteEmployee', deleteIndex)}"
        >Подвердить</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-property-decorator'
import {ElSelectV2} from 'element-plus'
import {EmployeeType} from '@/store'
import EmployeesSmallTable from '@views/components/table/employees/small-table/employees-small-table.vue'
import EmployeesBigTable from '@views/components/table/employees/big-table/employees-big-table.vue'
import EmployeesModal from '@views/components/table/employees/employees-modal.vue'

@Options({
  name: 'employees',
  components: {
    EmployeesModal,
    EmployeesSmallTable,
    EmployeesBigTable,
    ElSelectV2
  }
})
export default class Employees extends Vue {
  activePage: number = 1
  isModalShowed: boolean = false
  isEdit: boolean = false
  employeeForEdit: EmployeeType = {id: 0, name: '', position: 'admin', age: 0}
  deleteDialog: boolean = false
  deleteIndex: number
  deleteName: string

  deleteEmployee(index: number) {
    this.deleteDialog = true
    this.deleteIndex = index
    this.deleteName = this.$store.state.employees[index].name
  }
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background: white;

  @media (max-width: 1400px) and (min-width: 1000px) {
    width: 750px;
  }

  @media (max-width: 1000px) {
    width: 690px;
  }

  @media (max-width: 800px) {
    width: 490px;
  }

  @media (max-width: 600px) {
    width: 450px;
  }

  @media (max-width: 550px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 280px;
  }

  @media (max-width: 320px) {
    width: 270px;
  }

  .info {
    height: 52px;
    width: 100%;
    border-bottom: 1px solid #FF0000;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 18px;
      color: #262838;
      margin-left: 25px;

      @media (max-width: 400px) {
        margin-left: 12px;
      }
      @media (max-width: 320px) {
        margin-left: 10px;
      }
    }

    .btn {
      margin-right: 35px;
      width: 196px;
      height: 36px;
      background: red;
      color: white;
      font-size: 14px;
      border: none;
      outline: none;
      @media (max-width: 500px) {
        width: 120px;
      }
      @media (max-width: 400px) {
        margin-right: 12px;
        width: 110px;
      }
      @media (max-width: 320px) {
        margin-right: 10px;
        width: 100px;
      }
    }
  }
}
</style>