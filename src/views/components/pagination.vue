<template>
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
</template>

<script lang="ts">
import {Emit, Options, Prop, Vue, Watch} from 'vue-property-decorator'

@Options({
  name: 'pagination',
})
export default class Pagination extends Vue {
  @Prop({type: Number}) activePage!: number
  @Prop() changePage!: (page:number) => number
  totalPages: number = 1
  showingPagesButtons: number[] = []
  hasNext: boolean = false
  hasPrev: boolean = false

  @Watch('$store.state.employees.length')
  onEmployeesChange() {
    if((this.activePage - 1) * 12 + 1 > this.$store.state.employees.length && this.changePage)
      this.changePage(this.activePage - 1)
    this.totalPages = Math.ceil(this.$store.state.employees.length / 12)
    if (this.totalPages < this.showingPagesButtons[2]) {
      if (this.showingPagesButtons[2] === 3)
        this.showingPagesButtons[2] = undefined
      if (this.showingPagesButtons[2] > 3) {
        this.showingPagesButtons[2] = this.totalPages
        this.showingPagesButtons[1] = this.showingPagesButtons[2] - 1
        this.showingPagesButtons[0] = this.showingPagesButtons[1] - 1
      }
    }
    if (this.totalPages < this.showingPagesButtons[1])
      if (this.showingPagesButtons[1] === 2 && !this.showingPagesButtons[2])
        this.showingPagesButtons[1] = undefined
    if (this.totalPages > 3 && this.showingPagesButtons[2] + 1 <= this.totalPages)
      this.hasNext = true
    if (this.showingPagesButtons[0] - 1 > 0)
      this.hasPrev = true
  }

  created() {
    this.totalPages = Math.ceil(this.$store.state.employees.length / 12)
    for (let i = 1; i <= this.totalPages; i++) {
      this.showingPagesButtons.push(i)
      if (i === 3)
        break
    }
    if (this.totalPages > 3)
      this.hasNext = true
  }
  selectPage(page: number) {
    this.changePage(page)
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
</style>