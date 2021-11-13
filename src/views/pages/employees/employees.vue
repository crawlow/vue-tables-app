<template>
  <div class="container">
    <div class="info">
      <span class="title">Сотрудники</span>
      <button class="btn" @click="this.isModalShowed = true">Добавить сотрудника</button>
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
            <button class="col-ceil-square" style="margin-right: 1px;" @click="() => {isModalShowed = true; editProduct = {...employee}; isEdit = true}">
              <img src="~@assets/icons/edit.svg" alt="edit">
            </button>
            <button class="col-ceil-square"
                    @click="deleteEmployee(index)"
            >
              <img src="~@assets/icons/trash.svg" alt="trash">
            </button>
          </div>
        </div>
      </div>
      <pagination
          v-model:active-page="activePage"
      ></pagination>
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
            <button class="small-table-edit-btn" @click="() => {isModalShowed = true; editProduct = {...employee}; isEdit = true}">
              <img src="~@assets/icons/edit.svg" alt="edit">
            </button>
            <button class="small-table-delete-btn" @click="deleteEmployee(index)">
              <img src="~@assets/icons/trash.svg" alt="trash">
            </button>
          </div>
        </div>
      </div>
      <div  style="display:flex;justify-content:center;">
        <pagination
            v-model:active-page="activePage"
        ></pagination>
      </div>
    </div>
  </div>
  <div class="modal" :class="{'hide' : !isModalShowed, 'show': isModalShowed}">
    <div class="modal-container">
      <div class="modal-info">
        <span class="title" v-if="!isEdit">Добавление сотрудника</span>
        <span class="title" v-if="isEdit">Редактировние сотрудника</span>
        <button class="close" @click="this.isModalShowed = false">
          <img src="~@assets/icons/close.svg" alt="close">
        </button>
      </div>
      <div class="modal-content">
        <div class="modal-input-container modal-initials">
          <span class="modal-label">ФИО</span>
          <input type="text" class="modal-input" v-if="!isEdit" v-model="name"/>
          <input type="text" class="modal-input" v-if="isEdit" v-model="editProduct.name"/>
        </div>
        <div class="modal-input-container modal-position">
          <span class="modal-label">Должность</span>
          <el-select v-model="selectValue" placeholder="Select" filterable v-if="!isEdit">
            <el-option v-for="option in selectOptions"
                       :key="option.value"
                       :label="option.label"
                       :value="option.value"
            ></el-option>
          </el-select>
          <el-select v-model="editProduct.position" placeholder="Select" filterable v-if="isEdit">
            <el-option v-for="option in selectOptions"
                       :key="option.value"
                       :label="option.label"
                       :value="option.value"
            ></el-option>
          </el-select>
        </div>
        <div class="modal-input-container modal-age">
          <span class="modal-label">Возраст</span>
          <input type="number" class="modal-input" v-model="age" v-if="!isEdit"/>
          <input type="number" class="modal-input" v-model="editProduct.age" v-if="isEdit"/>
        </div>
        <div class="modal-actions">
          <button class="modal-btn modal-cancel" @click="this.isModalShowed = false">Отмена</button>
          <button class="modal-btn modal-add" v-if="!isEdit" @click="createEmployee">Добавить</button>
          <button class="modal-btn modal-add" v-if="isEdit" @click="editEmployee">Сохранить</button>
        </div>
      </div>
    </div>
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
import {EmployeeType} from '@/store'
import Pagination from '@views/components/pagination.vue'

@Options({
  name: 'employees',
  components: {
    Pagination,
    ElSelectV2
  }
})
export default class Employees extends Vue {
  activePage: number = 1
  isModalShowed: boolean = false
  selectValue: 'admin' | 'guest' = 'admin'
  name: string = ''
  age: number = 0
  selectOptions = [
    {value: 'admin', label: 'Администратор'},
    {value: 'guest', label: 'Гость'}
  ]
  isEdit: boolean = false
  editProduct: EmployeeType
  deleteDialog: boolean = false
  deleteIndex: number
  deleteName: string

  editEmployee() {
    this.$store.commit('updateEmployee', this.editProduct)
    this.isEdit = false
    this.isModalShowed = false
  }

  deleteEmployee(index: number) {
    this.deleteDialog = true
    this.deleteIndex = index
    this.deleteName = this.$store.getters.employees[index].name
  }

  createEmployee() {
    this.$store.commit('addEmployee', {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: this.name,
      position: this.selectValue,
      age: this.age
    })
    this.selectValue = 'admin'
    this.name = ''
    this.age = 0
    this.isModalShowed = false
  }
}
</script>

<style scoped lang="less">
.show {
  display: block;
}
.hide {
  display: none;
}
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

  @media(max-width: 600px) {
    width: 450px;
  }

  @media(max-width: 550px) {
    width: 400px;
  }

  @media(max-width: 500px) {
    width: 350px;
  }

  @media(max-width: 400px) {
    width: 280px;
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

      @media(max-width: 400px) {
        margin-left: 12px;
      }
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
      @media(max-width: 500px) {
        width: 120px;
      }
      @media(max-width: 400px) {
        margin-right: 12px;
        width: 110px;
      }
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
          @media(max-width: 400px) {
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
          @media(max-width: 320px) {
            padding-left: 10px;
          }
          @media(max-width: 400px) {
            padding-left: 11px;
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

  .modal-container {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 263px;
    left: 447px;
    width: 627px;
    height: 350px;
    background: white;
    transition: all 0.3s linear;

    @media(max-width: 1400px) and (min-width: 1000px) {
      top: 200px;
      left: 250px;
    }

    @media(max-width: 1000px) {
      top: 120px;
      left: 120px;
    }

    @media(max-width: 800px) {
      top: 100px;
      left: 100px;
      width: 550px;
    }

    @media(max-width: 700px) {
      left: 70px;
      width: 500px;
    }

    @media(max-width: 600px) {
      width: 430px;
      left: 50px;
    }

    @media(max-width: 550px) {
      left: 50px;
      width: 400px;
    }


    @media(max-width: 500px) {
      left: 7%;
      width: 350px;
    }

    @media(max-width: 400px) {
      left: 5%;
      width: 285px;
    }

    @media (max-width: 320px) {
      left: 20px;
      width: 280px;
    }


    .modal-info {
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

    .modal-content {
      padding: 23px 24px 24px 26px;

      .modal-input-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 56px;
        justify-content: space-between;

        .modal-input {
          border: 1px solid #CED4DE;
          padding: 9px 0 9px 15px;
          color: #162147;
          background: white;
          height: 35px;
          width: 100%;
          outline: none;
          font-size: 14px;

          &:focus {
            border: 1px solid #4F5C9C;
            color: #070054;
          }
        }

        .modal-label {
          color: #586174;
          font-size: 13px;
        }
      }

      .modal-initials {
        margin-bottom: 14px;
      }

      .modal-position {
        margin-bottom: 13px;
      }

      .modal-age {
        margin-bottom: 24px;
      }

      .modal-actions {
        display: flex;
        justify-content: flex-end;

        .modal-btn {
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          outline: none;
          height: 36px;
        }

        .modal-cancel {
          margin-right: 6px;
          color: #FF0000;
          background: #FFD3D3;
          width: 104px;
        }

        .modal-add {
          background: #FF0000;
          color: white;
          width: 117px;
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