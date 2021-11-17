<template>
  <div class="small-table-container">
    <div class="search">
      <input type="text" class="input" placeholder="Поиск.."/>
      <button class="btn"><el-icon :size="20"><search/></el-icon></button>
    </div>
    <div class="table" v-for="(card, index) in $store.state.cards"
         :key="card.id">
      <div v-if="index > (activePage - 1)*12 - 1 && index < activePage*12 || activePage === 1 && index < 12">
        <cards-small-table-item
            :get-src="getSrc"
            :change-card-for-edit="changeCardForEdit"
            :card="card"
            :change-delete-dialog="changeDeleteDialog"
            :change-delete-index="changeDeleteIndex"
            :change-is-edit="changeIsEdit"
            :change-is-modal-showed="changeIsModalShowed"
            :change-delete-name="changeDeleteName"
            :get-formatted-date="getFormattedDate"
            :index="index"
        ></cards-small-table-item>
      </div>
    </div>
    <pagination
        page-name="cards"
        v-model:changePage="changeActivePage"
        v-model:active-page="activePage"
    ></pagination>
  </div>
</template>

<script lang="ts">
import {Vue, Options, Prop, Emit} from 'vue-property-decorator'
import {ServiceCardType} from '@/store'
import {Search} from '@element-plus/icons'
import CardsSmallTableItem from '@views/components/table/cards/small-table/cards-small-table-item.vue'

@Options({
  name: 'cards-small-table',
  components: {
    Search,
    CardsSmallTableItem
  }
})
export default class CardsSmallTable extends Vue {
  @Prop() activePage!: number
  @Emit('update:activePage') changeActivePage(page: number) {
    return page
  }
  @Prop() getSrc!: (key: string) => string
  @Prop() isModalShowed!: boolean
  @Emit('update:isModalShowed') changeIsModalShowed(value: boolean) {
    return value
  }
  @Prop() isEdit!: boolean
  @Emit('update:isEdit') changeIsEdit(value: boolean) {
    return value
  }
  @Prop() cardForEdit!: ServiceCardType
  @Emit('update:cardForEdit') changeCardForEdit(card: ServiceCardType) {
    return card
  }
  @Prop() deleteDialog!: boolean
  @Emit('update:deleteDialog') changeDeleteDialog(value: boolean) {
    return value
  }
  @Prop() deleteIndex: number
  @Emit('update:deleteIndex') changeDeleteIndex(index: number) {
    return index
  }
  @Prop() deleteName: string
  @Emit('update:deleteName') changeDeleteName(name: string) {
    return name
  }
  @Prop() getFormattedDate!: (date: Date) => string
}
</script>

<style scoped lang="less">
.small-table-container {
  padding: 10px 20px 30px 20px;
  width: 670px;
  display: none;

  @media(max-width: 800px) {
    display: block;
    width: 640px;
  }

  @media(max-width: 750px) {
    width: 600px;
  }

  @media(max-width: 700px) {
    width: 490px;
  }

  @media(max-width: 600px) {
    width: 430px;
  }

  @media(max-width: 550px) {
    width: 390px;
  }

  @media(max-width: 500px) {
    width: 395px;
  }

  @media(max-width: 450px) {
    width: 350px;
  }

  @media(max-width: 400px) {
    width: 270px;
  }

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
}
</style>