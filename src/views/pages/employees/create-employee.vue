<template>
  <div class="modal-container">
    <div class="modal-info">
      <button class="modal-back" @click="goBack">
        <img src="~@assets/icons/arrow-left.svg" alt="back-arrow" class="back-arrow">
      </button>
      <span class="modal-title">Добавление пользователя</span>
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
        <button class="modal-btn modal-cancel" @click="goBack">Отмена</button>
        <button class="modal-btn modal-my-add" @click="createEmployee">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-property-decorator'

@Options({
  name: 'create-employee'
})
export default class CreateEmployee extends Vue {
  selectValue: 'admin' | 'guest' = 'admin'
  name: string = ''
  age: number = 0
  selectOptions = [
    {value: 'admin', label: 'Администратор'},
    {value: 'guest', label: 'Гость'}
  ]
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
    this.goBack()
  }
  goBack() {
    this.$router.push({name: 'employees2'})
  }
}
</script>

<style scoped>
.modal-container {
  display: flex;
  flex-direction: column;
  width: 671px;
  height: 398px;
  background: white;
  transition: all 0.3s linear;
}

.modal-info {
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #FF0000;
}

.modal-title {
  font-size: 17px;
  color: #162147;
  font-weight: 600;
  margin-left: 15px;
}
.back-arrow {
  height: 14px;
  width: 14px;
  filter: invert(20%) sepia(90%) saturate(6691%) hue-rotate(357deg) brightness(97%) contrast(114%);
}
.modal-back {
  display: flex;
  flex-direction: column;
  border: none;
  outline: none;
  background: transparent;
  margin-left: 22px;
}

.my-modal-content {
  padding: 35px 44px 56px 50px;
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