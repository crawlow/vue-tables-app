<template>
  <div class="table-small-cols"
       v-if="index > (activePage - 1)*12 - 1 && index < activePage*12 || activePage === 1 && index < 12">
    <div class="table-small-row">
      <span class="small-col-name">id</span>
      <span class="small-ceil">{{ employee.id }}</span>
    </div>
    <div class="table-small-row">
      <span class="small-col-name">ФИО</span>
      <p class="small-ceil">{{ employee.name }}</p>
    </div>
    <div class="table-small-row">
      <span class="small-col-name">Должность</span>
      <span class="small-ceil">{{ employee.position === 'admin' ? 'Администратор' : 'Гость' }}</span>
    </div>
    <div class="table-small-row">
      <span class="small-col-name">Возраст</span>
      <span class="small-ceil">{{ employee.age }}</span>
    </div>
    <div class="table-small-row">
      <button class="small-table-edit-btn" v-if="employeePage === 1"
              @click="() => {changeEmployeeForEdit({...employee}); changeIsModalShowed(true); changeIsEdit(true)}">
        <img src="~@assets/icons/edit.svg" alt="edit">
      </button>
      <button class="small-table-edit-btn" v-if="employeePage === 2"
              @click="()=>{this.$store.commit('toggleIsEdit'); this.$store.commit('updateEditProduct', employee); $router.push({name: 'edit-or-create-employee'})}">
        <img src="~@assets/icons/edit.svg" alt="edit">
      </button>
      <button class="small-table-delete-btn" @click="deleteEmployee(index)">
        <img src="~@assets/icons/trash.svg" alt="trash">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Options, Prop} from 'vue-property-decorator'
import {EmployeeType} from '@/store'

@Options({
  name: 'employees-small-table-item'
})
export default class EmployeesSmallTableItem extends Vue {
  @Prop() employeePage!: number
  @Prop() index!: number
  @Prop() employee!: EmployeeType
  @Prop() activePage!: number
  @Prop() changeEmployeeForEdit!: (employee: EmployeeType) => EmployeeType
  @Prop() changeIsModalShowed!: (value: boolean) => boolean
  @Prop() changeIsEdit!: (value: boolean) => boolean
  @Prop() deleteEmployee!: (index: number) => void
}
</script>

<style scoped lang="less">
.table-small-cols {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  .table-small-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1px;
    height: 35px;

    .small-table-edit-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3B4272;
      background: #E6EAF6;
      width: 212.5px;
      border: none;
      height: 100%;
      margin-right: 1px;
    }

    .small-table-delete-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3B4272;
      background: #E6EAF6;
      width: 212px;
      border: none;
      height: 100%;
    }

    .small-ceil {
      height: 100%;
      color: #3B4272;
      background: #E6EAF6;
      width: 50%;
      padding-left: 20px;
      display: flex;
      align-items: center;
      padding-right: 10px;
      overflow-x: auto;
      white-space: nowrap;

      @media (max-width: 320px) {
        padding-left: 10px;
      }
      @media (max-width: 400px) {
        padding-left: 11px;
      }
    }

    .small-col-name {
      height: 100%;
      background: #C8D1DE;
      color: #25274F;
      width: 50%;
      margin-right: 1px;
      padding-left: 20px;
      display: flex;
      align-items: center;
      @media (max-width: 320px) {
        padding-left: 10px;
      }
      @media (max-width: 400px) {
        padding-left: 11px;
      }
    }
  }
}
</style>