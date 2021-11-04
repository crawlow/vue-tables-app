<template>
  <div class="container">
    <div class="info-container">
      <span class="title">Сотрудники</span>
      <button class="create-btn" @click="this.isModalSowed = true">Добавить сотрудника</button>
    </div>
    <div class="employee-content">
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Поиск.."/>
        <button class="search-btn">Поиск</button>
      </div>
      <div class="table-container">
        <div class="table-row">
          <span class="col-name col-name-id">id</span>
          <span class="col-name col-name-initials">ФИО</span>
          <span class="col-name col-name-position">Должность</span>
          <span class="col-name col-name-age">Возраст</span>
          <span class="col-name-square" style="margin-right: 1px;"></span>
          <span class="col-name-square"></span>
        </div>
        <div
            style="margin-top: 1px;"
            v-for="(employee, index) in employees"
            :key="employee.id"
        >
          <div class="table-row"
               v-if="index > (activePage - 1)*12 - 1 && index < activePage*12 || activePage === 1 && index < 12">
            <span class="col-ceil col-name-id">{{ employee.id }}</span>
            <span class="col-ceil col-name-initials">{{ employee.name }}</span>
            <span class="col-ceil col-name-position">{{ employee.position === 'admin' ? 'Администратор' : 'Гость'}}</span>
            <span class="col-ceil col-name-age">{{ employee.age }}</span>
            <button class="col-ceil-square" style="margin-right: 1px;">
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
      <div class="pagination-container">
        <button class="pagination-btn btn-arrow" :disabled="!hasPrev" @click="prevPage">
          <img src="~@assets/icons/arrow-left.svg" alt="arrow-left">
        </button>
        <button
            class="pagination-btn"
            :class="{'active-pagination-btn' : showingPagesButtons[0] === activePage}"
            @click="selectPage(showingPagesButtons[0])"
        >
          {{ showingPagesButtons[0] }}
        </button>
        <button
            class="pagination-btn"
            :class="{'active-pagination-btn' : showingPagesButtons[1] === activePage}"
            v-if="showingPagesButtons[1]"
            @click="selectPage(showingPagesButtons[1])"
        >
          {{ showingPagesButtons[1] }}
        </button>
        <button
            class="pagination-btn"
            :class="{'active-pagination-btn' : showingPagesButtons[2] === activePage}"
            v-if="showingPagesButtons[2]"
            @click="selectPage(showingPagesButtons[2])"
        >
          {{ showingPagesButtons[2] }}
        </button>
        <button class="pagination-btn btn-arrow" :disabled="!hasNext" @click="nextPage">
          <img src="~@assets/icons/arrow-right.svg" alt="arrow-right">
        </button>
      </div>
    </div>
  </div>
  <div class="my-modal" :style="{display: isModalSowed ? 'block' : 'none'}">
    <div class="modal-container">
      <div class="modal-info">
        <span class="modal-title">Добавление пользователя</span>
        <button class="modal-close" @click="this.isModalSowed = false">
          <img src="~@assets/icons/close.svg" alt="close">
        </button>
      </div>
      <div class="my-modal-content">
        <div class="modal-input-container modal-initials">
          <span class="modal-input-label">ФИО</span>
          <input type="text" class="modal-input" v-model="name"/>
        </div>
        <div class="modal-input-container modal-position">
          <span class="modal-input-label">Должность</span>
          <el-select v-model="selectValue" placeholder="Select" filterable>
            <el-option v-for="option in selectOptions"
                       :key="option.value"
                       :label="option.label"
                       :value="option.value"
            ></el-option>
          </el-select>
        </div>
        <div class="modal-input-container modal-age">
          <span class="modal-input-label">Возраст</span>
          <input type="number" class="modal-input" v-model="age"/>
        </div>
        <div class="modal-actions">
          <button class="modal-btn modal-cancel" @click="this.isModalSowed = false">Отмена</button>
          <button class="modal-btn modal-my-add" @click="createEmployee">Добавить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue, Watch} from 'vue-property-decorator'
import {ElSelectV2} from 'element-plus'

interface Employee {
  id: number
  name: string
  position: 'admin' | 'guest'
  age: number
}

@Options({
  name: 'employees',
  components: {
    ElSelectV2
  }
})
export default class Employees extends Vue {
  employees: Employee[] = [
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },{
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },{
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
    {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: 'Andrew',
      position: 'admin',
      age: 50
    },
  ]
  totalPages: number = 1
  showingPagesButtons: number[] = []
  hasNext: boolean = false
  hasPrev: boolean = false
  activePage: number = 1
  isModalSowed: boolean = false
  selectValue: 'admin' | 'guest' = 'admin'
  name: string = ''
  age: number = 0
  selectOptions = [
    {value: 'admin', label: 'Администратор'},
    {value: 'guest', label: 'Гость'}
  ]
  @Watch('employees', {deep: true})
  onEmployeesChange() {
    this.totalPages = Math.ceil(this.employees.length / 12)
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
    this.employees.splice(index, 1)
  }
  beforeMount() {
    this.totalPages = Math.ceil(this.employees.length / 12)
    for (let i = 1; i <= this.totalPages; i++) {
      this.showingPagesButtons.push(i)
      if (i === 3)
        break
    }
    if (this.totalPages > 3)
      this.hasNext = true
  }
  selectPage(page: number) {
    this.activePage = page
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
  createEmployee() {
    this.employees.push({
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      name: this.name,
      position: this.selectValue,
      age: this.age
    })
    this.selectValue = 'admin'
    this.name = ''
    this.age = 0
    this.isModalSowed = false
  }
}
</script>

<style>
.el-select .el-input__inner {
  border: 1px solid #CED4DE !important;
  padding: 9px 0 9px 15px !important;
  color: #162147 !important;
  background: white !important;
  height: 35px !important;
  width: 577px !important;
  outline: none !important;
  font-size: 14px !important;
  border-radius: 0;
}
.el-select .el-input__inner:focus {
  border: 1px solid #4F5C9C !important;
  color: #070054 !important;
}
.el-select-dropdown__item.selected {
  color: #070054 !important;
}
</style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background: white;
}
.info-container {
  height: 52px;
  width: 100%;
  border-bottom: 1px solid #FF0000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.employee-content {
  height: 685px;
  padding: 35px 35px 51px 29px;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 18px;
  color: #262838;
  margin-left: 25px;
}
.create-btn {
  margin-right: 35px;
  width: 196px;
  height: 36px;
  background: red;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.search-container {
  margin-bottom: 25px;
  display: flex;
  align-items: center;
}
.search-input {
  width: 878px;
  height: 35px;
  margin-right: 6px;
  border: 1px solid #CED4DE;
}
.search-input::placeholder {
  color: #BEBFC3;
  padding-left: 30px;
  font-size: 15px;
}
.search-btn {
  width: 85px;
  height: 36px;
  background: red;
  color: white;
  font-size: 14px;
  border: none;
}
.table-container {
  margin-bottom: 19px;
}
.table-row {
  width: 969px;
  height: 37px;
  display: flex;
}
.col-name {
  background: #C8D1DE;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  height: 37px;
  margin-right: 1px;
}
.col-ceil {
  background: #E6EAF6;
  margin-right: 1px;
  font-size: 14px;
  line-height: 17px;
  color: #3B4272;
}
.col-name-id {
  width: 205px;
  padding: 12px 0 8px 22px;
}
.col-name-square {
  width: 37px;
  background: #C8D1DE;
  outline: none;
  text-decoration: none;
}
.col-ceil-square {
  background: #E6EAF6;
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
.col-name-initials {
  width: 237px;
  padding: 12px 0 8px 22px;
}
.col-name-position {
  width: 219px;
  padding: 12px 0 8px 28px;
}
.col-name-age {
  width: 229px;
  padding: 12px 0 8px 22px;
}
.pagination-container {
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.pagination-btn {
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
}
.active-pagination-btn {
  color: #4F5C9C;
}
.btn-arrow {
  width: 23px;
}
.pagination-btn:disabled img {
  filter: invert(49%) sepia(0%) saturate(25%) hue-rotate(161deg) brightness(90%) contrast(99%);
}
.my-modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.64);
  width: 100%;
  height: 100vh;
  z-index: 98;
}
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
}
.modal-info {
  width: 100%;
  height: 48px;
  background: #D6D6FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-title {
  font-size: 17px;
  color: #162147;
  font-weight: 600;
  margin-left: 26px;
}
.modal-close {
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  border: none;
  outline: none;
  background: transparent;
}
.my-modal-content {
  padding: 23px 24px 24px 26px;
}
.modal-input-container {
  display: flex;
  flex-direction: column;
  width: 577px;
  height: 56px;
  justify-content: space-between;
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
}
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
.modal-my-add {
  background: #FF0000;
  color: white;
  width: 117px;
}
.modal-input {
  border: 1px solid #CED4DE;
  padding: 9px 0 9px 15px;
  color: #162147;
  background: white;
  height: 35px;
  width: 577px;
  outline: none;
  font-size: 14px;
}
.modal-input:focus {
  border: 1px solid #4F5C9C;
  color: #070054;
}
.modal-input-label {
  color: #586174;
  font-size: 13px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>