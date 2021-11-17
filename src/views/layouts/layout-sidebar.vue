<template>
  <div class="sidebar" :class="{ 'show': $store.getters.isSidebarShowed }">
    <nav>
      <router-link class="menu-item" :to="{ name: ReferenceShopBooks }">
        <img src="~@assets/icons/shop.svg" alt="shop" class="icon"><span class="name">Спрвочник магазинов</span>
      </router-link>
      <router-link class="menu-item" :to="{ name: Points }">
        <img src="~@assets/icons/earth.svg" alt="earth" class="icon"><span class="name">Точки</span>
      </router-link>
      <router-link class="menu-item" :to="{ name: Employees }">
        <img src="~@assets/icons/people.svg" alt="people" class="icon"><span class="name">Сотрудники</span>
      </router-link>
      <router-link class="menu-item" :to="{ name: Employees2 }">
        <img src="~@assets/icons/people.svg" alt="people" class="icon"><span class="name">Сотрудники2</span>
      </router-link>
      <router-link class="menu-item" :to="{ name: ServiceCards }">
        <el-icon class="icon"><postcard /></el-icon><span class="name">Служебные карточки</span>
      </router-link>
    </nav>
  </div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-property-decorator'
import {
  EMPLOYEES, EMPLOYEES2,
  POINTS, REFERENCE_SHOP_BOOKS, SERVICE_CARDS
} from '@/router/routerNames'
import {Postcard} from '@element-plus/icons'

@Options({
  name: 'layout-sidebar',
  components: {
    Postcard
  }
})
export default class LayoutSidebar extends Vue {
  Points = POINTS
  Employees = EMPLOYEES
  Employees2 = EMPLOYEES2
  ReferenceShopBooks = REFERENCE_SHOP_BOOKS
  ServiceCards = SERVICE_CARDS
}
</script>

<style scoped lang="less">
.show {
  display: block !important;
}

.sidebar {
  background: #0B0B10;
  width: 300px;
  transition: all 0.8s;
  overflow: visible;
  margin-left: 0;

  @media (max-width: 1400px) and (min-width: 1001px) {
    width: 200px;
    min-width: 200px;
  }

  @media (max-width: 1000px) {
    width: 58px;
  }

  @media (max-width: 500px) {
    display: none;
  }

  & nav {
    margin-top: 28px;

    @media (max-width: 600px) {
      margin-top: 15px;
    }
    @media (max-width: 320px) {
      margin-top: 10px;
    }
  }

  .menu-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 30px;
    height: 40px;
    color: #B8C3E0;
    transition: color 0.15s ease, background-color 0.15s ease,
    border-color 0.15s ease, box-shadow 0.15s ease,
    -webkit-box-shadow 0.15s ease;
    text-decoration: none;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 400;

    @media (max-width: 1000px) {
      padding-left: 20px;
    }

    &:hover {
      text-decoration: none;
      background-color: #232235;
      border-right: 2px solid #FF0000;
      color: #B8C3E0;
      transition: color 0.15s ease, background-color 0.15s ease,
      border-color 0.15s ease, box-shadow 0.15s ease,
      -webkit-box-shadow 0.15s ease;
    }

    .name {
      @media (max-width: 1000px) {
        display: none;
      }
    }

    .icon {
      margin-right: 20px;

      &:focus {
        outline: unset;
      }
    }
  }

  .router-link-active {
    color: #B8C3E0;
    background-color: #232235;
    border-right: 2px solid #FF0000;
  }
}
</style>
