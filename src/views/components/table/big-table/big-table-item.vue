<template>
  <div class="row"
       v-if="index > (activePage - 1)*12 - 1 && index < activePage*12 || activePage === 1 && index < 12">
    <span class="col-ceil col-name-id">{{ employee.id }}</span>
    <span class="col-ceil col-name-initials">{{ employee.name }}</span>
    <span
        class="col-ceil col-name-position">{{
        employee.position === 'admin' ? 'Администратор' : 'Гость'
      }}</span>
    <span class="col-ceil col-name-age">{{ employee.age }}</span>
    <button v-if="employeePage === 1" class="col-ceil-square" style="margin-right: 1px;" @click="() => {changeEmployeeForEdit({...employee}); changeIsModalShowed(true); changeIsEdit(true);}">
      <img src="~@assets/icons/edit.svg" alt="edit">
    </button>
    <button v-if="employeePage === 2" class="col-ceil-square" style="margin-right: 1px;" @click="()=>{this.$store.commit('toggleIsEdit'); this.$store.commit('updateEditProduct', employee);$router.push({name: 'edit-or-create-employee'})}">
      <img src="~@assets/icons/edit.svg" alt="edit">
    </button>
    <button class="col-ceil-square"
            @click="deleteEmployee(index)"
    >
      <img src="~@assets/icons/trash.svg" alt="trash">
    </button>
  </div>
</template>

<script lang="ts">
import {Vue, Options, Prop} from 'vue-property-decorator'
import {EmployeeType} from '@/store'

@Options({
  name: 'big-table-item'
})
export default class BigTableItem extends Vue {
  @Prop() employeePage!: number
  @Prop() index!: number
  @Prop() employee!: EmployeeType
  @Prop() activePage!: number
  @Prop() changeEmployeeForEdit: (employee: EmployeeType) => EmployeeType
  @Prop() changeIsModalShowed: (value: boolean) => boolean
  @Prop() changeIsEdit: (value: boolean) => boolean
  @Prop() deleteEmployee!: (index: number) => void
}
</script>

<style scoped lang="less">
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

  .col-ceil {
    background: #E6EAF6;
    margin-right: 1px;
    font-size: 14px;
    color: #3B4272;
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

  .col-ceil-square {
    background: #E6EAF6;
    width: 37px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;

    & img {
      @media (max-width: 1400px) {
        height: 11px;
      }
      @media (max-width: 1000px) {
        height: 10px;
      }
    }
  }
}
</style>