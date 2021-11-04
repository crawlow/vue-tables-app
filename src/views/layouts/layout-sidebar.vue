<template>
  <div class="sidebar" :class="{ minimized: minimized }">
    <nav>
      <router-link class="menu-item" :to="{ name: ReferenceShopBooks }">
        <img src="~@assets/icons/shop.svg" alt="shop" class="icon">Спрвочник магазинов</router-link
      >
      <router-link class="menu-item" :to="{ name: Points }">
        <img src="~@assets/icons/earth.svg" alt="earth" class="icon">Точки</router-link
      >
      <router-link class="menu-item" :to="{ name: Employees }">
        <img src="~@assets/icons/people.svg" alt="people" class="icon">Сотрудники</router-link
      >
      <router-link class="menu-item" :to="{ name: Employees2 }">
        <img src="~@assets/icons/people.svg" alt="people" class="icon">Сотрудники2</router-link
      >
    </nav>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import {
  EMPLOYEES, EMPLOYEES2,
  POINTS, REFERENCESHOPBOOKS
} from '@/router/routerNames'

@Options({
  name: 'layout-sidebar'
})
export default class LayoutSidebar extends Vue {
  Points = POINTS
  Employees = EMPLOYEES;
  Employees2 = EMPLOYEES2
  ReferenceShopBooks = REFERENCESHOPBOOKS;
  minimized: boolean = false;
}
</script>
<style scoped>
.sidebar {
  background: #0B0B10;
  width: 315px;
  transition: all 0.8s;
}
.sidebar .minimized {
  width: 56px;
  min-width: 56px;
  overflow: hidden;
}
.sidebar .minimized .sub-menu {
  transition: all 0.5s;
  margin-left: 0;
}
.sub-menu {
  transition: all 0.5s;
  margin-left: 2rem;
}
nav {
  margin-top: 28px;
}
.menu-item {
  cursor: pointer;
  width: 100%;
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
}
.menu-item .icon {
  margin-right: 20px;
}
.menu-item .icon:focus {
  outline: unset;
}
.menu-item:hover {
  text-decoration: none;
  background-color: #232235;
  border-right: 2px solid #FF0000;
  color: #B8C3E0;
  transition: color 0.15s ease, background-color 0.15s ease,
    border-color 0.15s ease, box-shadow 0.15s ease,
    -webkit-box-shadow 0.15s ease;
}
.router-link-active {
  color: #B8C3E0;
  background-color: #232235;
  border-right: 2px solid #FF0000;
}
.sub {
  height: auto;
  display: block;
}
.sub .menu-item {
  margin-left: -22px;
}
</style>
