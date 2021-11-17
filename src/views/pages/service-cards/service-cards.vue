<template>
  <div class="container">
    <div class="info">
      <span class="title">Сотрудники</span>
      <button class="btn" @click="isModalShowed = true">Добавить служебную карту</button>
    </div>
    <div class="table-container">
      <div class="search">
        <input type="text" class="input" placeholder="Поиск.."/>
        <button class="btn">Поиск</button>
      </div>
      <div class="table">
        <div class="row">
          <span class="col-name">Фото</span>
          <span class="col-name">id</span>
          <span class="col-name">ФИО</span>
          <span class="col-name">Должность</span>
          <span class="col-name">Телефон</span>
          <span class="col-name">День рождения</span>
          <span class="col-name">Образование</span>
          <span class="col-name">Опыт работы</span>
          <span class="col-name">ВУЗ</span>
          <span class="col-name-square" style="margin-right: 1px;"></span>
          <span class="col-name-square"></span>
        </div>
        <div
            v-for="(card, index) in $store.state.cards"
            :key="card.id"
        >
          <div class="row"
               v-if="index > (activePage - 1)*12 - 1 && index < activePage*12 || activePage === 1 && index < 12">
            <div class="col-ceil" style="display: flex; justify-content:center; align-items:center;">
              <img :src="getSrc(card.photo)" :alt="card.name" height="35">
            </div>
            <span class="col-ceil">{{ card.id }}</span>
            <span class="col-ceil">{{ card.name }}</span>
            <span class="col-ceil">{{ card.position }}</span>
            <span class="col-ceil">{{ card.phone }}</span>
            <span class="col-ceil">{{ getFormattedDate(card.birthday) }}</span>
            <span class="col-ceil">{{ card.education }}</span>
            <span class="col-ceil">{{ card.experience }}</span>
            <span class="col-ceil">{{ card.university }}</span>
            <button class="col-ceil-square" style="margin-right: 1px;" @click="isModalShowed = true; isEdit = true;cardForEdit = {...card}">
              <img src="~@assets/icons/edit.svg" alt="edit">
            </button>
            <button class="col-ceil-square" @click="deleteDialog = true;deleteIndex = index;deleteName = card.name">
              <img src="~@assets/icons/trash.svg" alt="trash">
            </button>
          </div>
        </div>
      </div>
      <pagination
          page-name="cards"
          v-model:changePage="changeActivePage"
          v-model:active-page="activePage"
      ></pagination>
    </div>
  </div>
  <div class="modal" v-if="isModalShowed">
    <div class="modal-container">
      <div class="modal-info">
        <span class="title" v-if="!isEdit">Добавлеие служебной карты</span>
        <span class="title" v-if="isEdit">Редактировние служебной карты</span>
        <button class="close" @click="isModalShowed = false">
          <img src="~@assets/icons/close.svg" alt="close">
        </button>
      </div>
      <div class="modal-content">
        <div class="modal-input-container">
          <span class="modal-label">ФИО</span>
          <input type="text" class="modal-input" v-if="!isEdit" v-model="cardForCreate.name"/>
          <input type="text" class="modal-input" v-if="isEdit" v-model="cardForEdit.name"/>
        </div>
        <div class="modal-input-container">
          <span class="modal-label">Должность</span>
          <el-select v-model="cardForCreate.position" placeholder="Select" filterable v-if="!isEdit">
            <el-option v-for="option in selectOptions"
                       :key="option.value"
                       :label="option.label"
                       :value="option.value"
            ></el-option>
          </el-select>
          <el-select v-model="cardForEdit.position" placeholder="Select" filterable v-if="isEdit">
            <el-option v-for="option in selectOptions"
                       :key="option.value"
                       :label="option.label"
                       :value="option.value"
            ></el-option>
          </el-select>
        </div>
        <div class="modal-input-container">
          <span class="modal-label">Образование</span>
          <input type="text" class="modal-input" v-model="cardForCreate.education" v-if="!isEdit"/>
          <input type="text" class="modal-input" v-model="cardForEdit.education" v-if="isEdit"/>
        </div>
        <div class="modal-input-container">
          <span class="modal-label">Опты работы</span>
          <input type="text" class="modal-input" v-model="cardForCreate.experience" v-if="!isEdit"/>
          <input type="text" class="modal-input" v-model="cardForEdit.experience" v-if="isEdit"/>
        </div>
        <div class="modal-input-container">
          <span class="modal-label">ВУЗ</span>
          <input type="text" class="modal-input" v-model="cardForCreate.university" v-if="!isEdit"/>
          <input type="text" class="modal-input" v-model="cardForEdit.university" v-if="isEdit"/>
        </div>
        <div class="modal-input-container">
          <span class="modal-label">Телефон</span>
          <input type="number" class="modal-input" v-model="cardForCreate.phone" v-if="!isEdit"/>
          <input type="number" class="modal-input" v-model="cardForEdit.phone" v-if="isEdit"/>
        </div>
        <div class="modal-input-container">
          <span class="modal-label">Дата рождения</span>
          <el-date-picker
              v-if="!isEdit"
              v-model="cardForCreate.birthday"
              type="date"
              placeholder="Выбирите дату рождения"
              :disabled-date="disabledDate"
          >
          </el-date-picker>
          <el-date-picker
              v-if="isEdit"
              v-model="cardForEdit.birthday"
              type="date"
              placeholder="Выбирите дату рождения"
              :disabled-date="disabledDate"
          >
          </el-date-picker>
        </div>
        <div class="modal-input-container">
          <span class="modal-label">Фото</span>
          <input v-if="!(photo && !isEdit || isEdit && getSrc(cardForEdit.photo))" class="modal-input" type="file" placeholder="Загрузите фото" :value="photoInput"
                 v-on:change="(e) => {photoInput = e.target.value; saveImage(e.target.files[0])}">
          <div v-if="photo && !isEdit || isEdit && getSrc(cardForEdit.photo)" class="photo-container">
            <img v-if="isEdit" :src="getSrc(cardForEdit.photo)" alt="" height="50" width="50" @click="dialogVisible = true; dialogImageUrl = cardForEdit.photo">
            <img v-if="!isEdit" :src="photo" alt="" height="50" width="50" @click="dialogVisible = true; dialogImageUrl = photo">
            <el-icon @click="removeImage" class="btn" :size="25" color="#162147">
              <delete-filled/>
            </el-icon>
          </div>
          <el-dialog v-model="dialogVisible">
            <img style="width: 100%" :src="dialogImageUrl" alt=""/>
          </el-dialog>
        </div>
        <div class="modal-actions">
          <button class="modal-btn modal-cancel" @click="isModalShowed = false">Отмена</button>
          <button class="modal-btn modal-add" v-if="!isEdit" @click="createCard">Добавить</button>
          <button class="modal-btn modal-add" v-if="isEdit" @click="editEmployee">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
  <el-dialog
      v-model="deleteDialog"
      title="Удаление служебной карты"
      width="75%"
  >
    <span>Вы действительно хотите удалить служебную карту сотрудника : "{{ deleteName }}" ?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="success" @click="deleteDialog = false">Отмена</el-button>
        <el-button type="danger" @click="()=>{deleteDialog = false; this.$store.commit('deleteCard', deleteIndex)}"
        >Подвердить</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-property-decorator'
import Pagination from '@views/components/pagination.vue'
import {ServiceCardType} from '@/store'
import {DeleteFilled, Plus} from '@element-plus/icons'

@Options({
  name: 'service-cards',
  components: {
    Pagination,
    Plus,
    DeleteFilled
  }
})
export default class ServiceCards extends Vue {
  activePage: number = 1
  deleteDialog: boolean = false
  deleteIndex: number
  deleteName: string
  isModalShowed: boolean = false
  isEdit: boolean = false
  cardForEdit: ServiceCardType = {
    id: Math.floor(Math.random() * (10000 - 1) + 1),
    university: '',
    position: 'guest',
    photo: (Math.random() + 1).toString(36).substring(7),
    phone: 0,
    experience: '',
    education: '',
    birthday: new Date(),
    name: ''
  }
  cardForCreate: ServiceCardType = {
    id: Math.floor(Math.random() * (10000 - 1) + 1),
    university: '',
    position: 'guest',
    photo: (Math.random() + 1).toString(36).substring(7),
    phone: 0,
    experience: '',
    education: '',
    birthday: new Date(),
    name: ''
  }
  photo = ''
  photoInput = ''
  selectOptions = [
    {value: 'admin', label: 'Администратор'},
    {value: 'guest', label: 'Гость'}
  ]
  dialogImageUrl: string = ''
  dialogVisible: boolean = false

  createCard() {
    this.$store.commit('addCard', {
      ...this.cardForCreate
    })
    this.cardForCreate = {
      id: Math.floor(Math.random() * (10000 - 1) + 1),
      university: '',
      position: 'guest',
      photo: (Math.random() + 1).toString(36).substring(7),
      phone: 0,
      experience: '',
      education: '',
      birthday: new Date(),
      name: ''
    }
    this.isModalShowed = false
    this.photoInput = ''
    this.photo = ''
    this.dialogImageUrl = ''
  }

  editEmployee() {
    this.$store.commit('updateCard', this.cardForEdit)
    this.isModalShowed = false
    this.isEdit = false
    this.photoInput = ''
    this.photo = ''
    this.dialogImageUrl = ''
  }

  saveImage(file) {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64String = reader.result
      if (localStorage) {
        if(this.isEdit)
          localStorage.setItem(this.cardForEdit.photo, base64String as string)
        else
          localStorage.setItem(this.cardForCreate.photo, base64String as string)
      }
      this.photo = base64String as string
    }
    reader.readAsDataURL(file)
  }

  removeImage() {
    if (localStorage) {
      if(this.isEdit)
        localStorage.removeItem(this.cardForEdit.photo)
      else
        localStorage.removeItem(this.cardForCreate.photo)
    }

    this.dialogImageUrl = ''
    this.photo = ''
    this.photoInput = ''
  }

  disabledDate(time) {
    return time.getTime() > Date.now()
  }

  getFormattedDate(date: Date) {
    const year = date.getFullYear()
    let month = (1 + date.getMonth()).toString()
    month = month.length > 1 ? month : '0' + month
    let day = date.getDate().toString()
    day = day.length > 1 ? day : '0' + day
    return day + '.' + month + '.' + year
  }

  changeActivePage(page: number) {
    this.activePage = page
  }

  getSrc(id: string) {
    if (localStorage)
      return localStorage.getItem(id)
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
  width: 770px;

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
    }
  }

  .table-container {
    height: 100%;
    padding: 35px 35px 51px 29px;
    display: flex;
    flex-direction: column;
    width: 100%;

    .search {
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      height: 35px;

      .input {
        width: 90%;
        height: 100%;
        margin-right: 6px;
        border: 1px solid #CED4DE;

        &::placeholder {
          color: #BEBFC3;
          padding-left: 30px;
          font-size: 15px;
        }
      }

      .btn {
        width: 10%;
        height: 100%;
        background: red;
        color: white;
        font-size: 14px;
        border: none;
      }
    }

    .table {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 19px;

      .row {
        display: flex;
        height: 35px;
        margin-top: 1px;

        .col-name {
          background: #C8D1DE;
          font-size: 14px;
          font-weight: 600;
          margin-right: 1px;
          color: #25274F;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 5px;
          width: calc((100% - 70px) / 9);
          overflow-x: auto;
          white-space: nowrap;
        }

        .col-name-square {
          width: 35px;
          height: 100%;
          background: #C8D1DE;
        }

        .col-ceil-square {
          background: #E6EAF6;
          width: 35px;
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

        .col-ceil {
          background: #E6EAF6;
          margin-right: 1px;
          font-size: 14px;
          color: #3B4272;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 5px;
          width: calc((100% - 70px) / 9);
          overflow-x: auto;
          white-space: nowrap;
        }
      }
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.64);
  width: 100%;
  height: 100vh;
  z-index: 98;

  .modal-container {
    display: flex;
    flex-direction: column;
    width: 627px;
    background: white;
    transition: all 0.3s linear;


    @media (max-width: 800px) {
      width: 550px;
    }

    @media (max-width: 700px) {
      width: 500px;
    }

    @media (max-width: 600px) {
      width: 430px;
    }

    @media (max-width: 550px) {
      width: 400px;
    }

    @media (max-width: 500px) {
      width: 350px;
    }

    @media (max-width: 400px) {
      width: 285px;
    }

    @media (max-width: 320px) {
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
      padding: 10px 24px 20px 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;

      .modal-input-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 56px;
        justify-content: space-between;
        margin-bottom: 10px;

        .photo-container {
          display: flex;
          align-items: center;

          .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            border: 1px solid #CED4DE;
            margin-left: 20px;
            cursor: pointer;
          }
        }

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