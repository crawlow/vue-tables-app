<template>
  <div class="container">
    <div class="info">
      <span class="title">Сотрудники</span>
      <button class="btn" @click="$router.push({name: 'edit-or-create-employee'})">Добавить сотрудника</button>
    </div>
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
            v-for="(employee, index) in $store.getters.employees"
            :key="employee.id"
        >
          <div class="row"
               v-if="index > (activePage - 1)*12 - 1 && index < activePage*12 || activePage === 1 && index < 12">
            <span class="col-ceil col-name-id">{{ employee.id }}</span>
            <span class="col-ceil col-name-initials">{{ employee.name }}</span>
            <span
                class="col-ceil col-name-position">{{
                employee.position === 'admin' ? 'Администратор' : 'Гость'
              }}</span>
            <span class="col-ceil col-name-age">{{ employee.age }}</span>
            <button class="col-ceil-square" style="margin-right: 1px;">
              <img src="~@assets/icons/edit.svg" alt="edit" @click="()=>{this.$store.commit('toggleIsEdit'); this.$store.commit('updateEditProduct', employee);$router.push({name: 'edit-or-create-employee'})}">
            </button>
            <button class="col-ceil-square"
                    @click="deleteEmployee(index)"
            >
              <img src="~@assets/icons/trash.svg" alt="trash">
            </button>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button class="btn arrow" :disabled="!hasPrev" @click="prevPage">
          <img src="~@assets/icons/arrow-left.svg" alt="arrow-left">
        </button>
        <button
            class="btn"
            :class="{'active-btn' : showingPagesButtons[0] === activePage}"
            @click="selectPage(showingPagesButtons[0])"
        >
          {{ showingPagesButtons[0] }}
        </button>
        <button
            class="btn"
            :class="{'active-btn' : showingPagesButtons[1] === activePage}"
            v-if="showingPagesButtons[1]"
            @click="selectPage(showingPagesButtons[1])"
        >
          {{ showingPagesButtons[1] }}
        </button>
        <button
            class="btn"
            :class="{'active-btn' : showingPagesButtons[2] === activePage}"
            v-if="showingPagesButtons[2]"
            @click="selectPage(showingPagesButtons[2])"
        >
          {{ showingPagesButtons[2] }}
        </button>
        <button class="btn arrow" :disabled="!hasNext" @click="nextPage">
          <img src="~@assets/icons/arrow-right.svg" alt="arrow-right">
        </button>
      </div>
    </div>
    <div class="table-container-small">
      <div class="search-small">
        <input type="text" class="search-input-small" placeholder="Поиск..">
        <button class="search-btn-small">
          <img src="~@assets/icons/search.svg" alt="search" class="search-btn-small-icon">
        </button>
      </div>
      <div class="table-small"
           v-for="(employee, index) in $store.getters.employees"
      >
        <div class="table-small-cols" :key="employee.id"
             v-if="index > (activePage - 1)*12 - 1 && index < activePage*12 || activePage === 1 && index < 12">
          <div class="table-small-row">
            <span class="small-col-name">id</span>
            <span class="small-ceil">{{ employee.id }}</span>
          </div>
          <div class="table-small-row">
            <span class="small-col-name">ФИО</span>
            <span class="small-ceil">{{ employee.name }}</span>
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
            <button class="small-table-edit-btn">
              <img src="~@assets/icons/edit.svg" alt="edit" @click="()=>{this.$store.commit('toggleIsEdit'); this.$store.commit('updateEditProduct', employee); $router.push({name: 'edit-or-create-employee'})}">
            </button>
            <button class="small-table-delete-btn" @click="deleteEmployee(index)">
              <img src="~@assets/icons/trash.svg" alt="trash">
            </button>
          </div>
        </div>
      </div>
      <div class="pagination" style="display:flex;justify-content:center;">
        <button class="btn arrow" :disabled="!hasPrev" @click="prevPage">
          <img src="~@assets/icons/arrow-left.svg" alt="arrow-left">
        </button>
        <button
            class="btn"
            :class="{'active-btn' : showingPagesButtons[0] === activePage}"
            @click="selectPage(showingPagesButtons[0])"
        >
          {{ showingPagesButtons[0] }}
        </button>
        <button
            class="btn"
            :class="{'active-btn' : showingPagesButtons[1] === activePage}"
            v-if="showingPagesButtons[1]"
            @click="selectPage(showingPagesButtons[1])"
        >
          {{ showingPagesButtons[1] }}
        </button>
        <button
            class="btn"
            :class="{'active-btn' : showingPagesButtons[2] === activePage}"
            v-if="showingPagesButtons[2]"
            @click="selectPage(showingPagesButtons[2])"
        >
          {{ showingPagesButtons[2] }}
        </button>
        <button class="btn arrow" :disabled="!hasNext" @click="nextPage">
          <img src="~@assets/icons/arrow-right.svg" alt="arrow-right">
        </button>
      </div>
    </div>
  </div>
  <el-dialog
      v-model="deleteDialog"
      title="Удаление сотрдника"
      width="30%"
  >
    <span>Вы действительно хотите удалить сотрудника ?</span>
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
import {Options, Vue, Watch} from 'vue-property-decorator'
import {ElSelectV2} from 'element-plus'


@Options({
  name: 'employees2',
  components: {
    ElSelectV2
  }
})
export default class Employees2 extends Vue {
  totalPages: number = 1
  showingPagesButtons: number[] = []
  hasNext: boolean = false
  hasPrev: boolean = false
  activePage: number = 1
  deleteDialog: boolean = false
  deleteIndex: number

  beforeMount() {
    this.totalPages = Math.ceil(this.$store.getters.employees.length / 12)
    for (let i = 1; i <= this.totalPages; i++) {
      this.showingPagesButtons.push(i)
      if (i === 3)
        break
    }
    if (this.totalPages > 3)
      this.hasNext = true
  }
  @Watch('$store.getters.employees', {deep: true})
  onEmployeesChange() {
    if(this.activePage * 12 - 1 > this.$store.getters.employees.length)
      this.activePage--
    this.totalPages = Math.ceil(this.$store.getters.employees.length / 12)
    if(this.totalPages < this.showingPagesButtons[2]) {
      if(this.showingPagesButtons[2] === 3)
        this.showingPagesButtons[2] = undefined
      if(this.showingPagesButtons[2] > 3) {
        this.showingPagesButtons[2] = this.totalPages
        this.showingPagesButtons[1] = this.showingPagesButtons[2] - 1
        this.showingPagesButtons[0] = this.showingPagesButtons[1] - 1
      }
    }
    if(this.totalPages < this.showingPagesButtons[1])
      if(this.showingPagesButtons[1] === 2 && !this.showingPagesButtons[2])
        this.showingPagesButtons[1] = undefined
    if (this.totalPages > 3 && this.showingPagesButtons[2] + 1 <= this.totalPages)
      this.hasNext = true
    if(this.showingPagesButtons[0] - 1 > 0)
      this.hasPrev = true

  }
  deleteEmployee(index: number) {
    this.deleteDialog = true
    this.deleteIndex = index
  }
  selectPage(page: number) {
    this.activePage = page
    if(page === this.showingPagesButtons[2])
      this.nextPage()
    if(page === this.showingPagesButtons[0])
      this.prevPage()
  }
  nextPage() {
    if (this.showingPagesButtons[2] + 1 <= this.totalPages) {
      this.showingPagesButtons[0] = this.showingPagesButtons[1]
      this.showingPagesButtons[1] = this.showingPagesButtons[2]
      this.showingPagesButtons[2] = this.showingPagesButtons[2] + 1
      this.hasPrev = true
      this.hasNext = this.showingPagesButtons[2] + 1 <= this.totalPages
    }
  }
  prevPage() {
    if (this.showingPagesButtons[0] - 1 > 0) {
      this.showingPagesButtons[0] = this.showingPagesButtons[0] - 1
      this.showingPagesButtons[1] = this.showingPagesButtons[1] - 1
      this.showingPagesButtons[2] = this.showingPagesButtons[2] - 1
      this.hasNext = true
      this.hasPrev = this.showingPagesButtons[0] - 1 > 0
    }
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

  @media(max-width: 320px) {
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
      @media(max-width: 320px) {
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
      @media(max-width: 320px) {
        margin-right: 10px;
        width: 100px;
      }
    }
  }

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

        .col-name-square {
          width: 37px;
          height: 100%;
          background: #C8D1DE;
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
    }

  }

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
        width: 386px;

        @media(max-width: 320px) {
          width: 170px;
        }

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

          @media(max-width: 320px) {
            padding-left: 10px;
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
          @media(max-width: 320px) {
            padding-left: 10px;
          }
        }
      }
    }
  }

  .pagination {
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .btn {
      background: #F0F4F7;
      border: none;
      margin-left: 2px;
      width: 26px;
      height: 100%;
      color: #1B283F;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      outline: none;

      &:disabled img {
        filter: invert(49%) sepia(0%) saturate(25%) hue-rotate(161deg) brightness(90%) contrast(99%);
      }

      .arrow {
        width: 23px;
      }
    }

    .active-btn {
      color: #4F5C9C;
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.64);
  width: 100%;
  height: 100vh;
  z-index: 98;

  .container {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 263px;
    left: 447px;
    width: 627px;
    height: 350px;
    background: white;
    transition: all 0.3s linear;

    .info {
      width: 100%;
      height: 48px;
      background: #D6D6FA;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-size: 17px;
        color: #162147;
        font-weight: 600;
        margin-left: 26px;
      }

      .close {
        margin-right: 24px;
        display: flex;
        flex-direction: column;
        border: none;
        outline: none;
        background: transparent;
      }
    }

    .content {
      padding: 23px 24px 24px 26px;

      .input-container {
        display: flex;
        flex-direction: column;
        width: 577px;
        height: 56px;
        justify-content: space-between;

        .initials {
          margin-bottom: 14px;
        }

        .position {
          margin-bottom: 13px;
        }

        .age {
          margin-bottom: 24px;
        }

        .input {
          border: 1px solid #CED4DE;
          padding: 9px 0 9px 15px;
          color: #162147;
          background: white;
          height: 35px;
          width: 577px;
          outline: none;
          font-size: 14px;

          &:focus {
            border: 1px solid #4F5C9C;
            color: #070054;
          }
        }

        .label {
          color: #586174;
          font-size: 13px;
        }
      }

      .actions {
        display: flex;
        justify-content: flex-end;

        .btn {
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          outline: none;
          height: 36px;

          .cancel {
            margin-right: 6px;
            color: #FF0000;
            background: #FFD3D3;
            width: 104px;
          }

          .add {
            background: #FF0000;
            color: white;
            width: 117px;
          }
        }
      }
    }
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
