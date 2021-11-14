<template>
  <div class="container">
    <div class="info">
      <span class="title">Сотрудники</span>
      <button class="btn" @click="$router.push({name: 'edit-or-create-employee'})">Добавить сотрудника</button>
    </div>
    <big-table
        v-model:active-page="activePage"
        v-model:delete-employee="deleteEmployee"
        :employee-page="2"
    ></big-table>
    <small-table
        v-model:active-page="activePage"
        v-model:delete-employee="deleteEmployee"
        :employee-page="2"
    ></small-table>
  </div>
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
import Pagination from '@views/components/pagination.vue'
import SmallTable from '@views/components/table/small-table/small-table.vue'
import BigTable from '@views/components/table/big-table/big-table.vue'


@Options({
  name: 'employees2',
  components: {
    ElSelectV2,
    Pagination,
    SmallTable,
    BigTable
  }
})
export default class Employees2 extends Vue {
  activePage: number = 1
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
