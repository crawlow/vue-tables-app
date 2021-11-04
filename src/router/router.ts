//#region import
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import LoginPage from '@/views/pages/login/login.vue'
import ErrorPageComponent from '@views/pages/error404/error404.vue'
//#region Admin
const Layout = () => import('@/views/layouts/layout.vue')

import ReferenceShopBooks from '@views/pages/reference-shop-books/reference-shop-books.vue'
import Employees from '@views/pages/employees/employees.vue'
import Points from '@views/pages/points/points.vue'
import {LOGIN, DEFAULT, EMPLOYEES, REFERENCESHOPBOOKS, POINTS, EMPLOYEES2, CREATEEMPLOYEE} from './routerNames'
import Employees2 from '@views/pages/employees/employees2.vue'
import CreateEmployee from '@views/pages/employees/create-employee.vue'

const routes: Array<RouteRecordRaw> = [
  {
    name: LOGIN,
    path: '/login',
    component: LoginPage,
    meta: {
      title: 'Авторизация',
      allowAnonymous: true,
      middleware: [
      ]
    }
  },
  {
    name: DEFAULT,
    path: '/',
    redirect: 'login'
  },
  {
    path: '/',
    component: Layout,
    meta: {
      title: '',
      middleware: [
      ]
    },
    children: [
      {
        path: 'employees',
        name: EMPLOYEES,
        component: Employees,
        meta: {title: 'Сотрудники'}
      },
      {
        name: REFERENCESHOPBOOKS,
        path: 'reference-shop-books',
        component: ReferenceShopBooks,
        meta: {title: 'Справочник магазинов'}
      },
      {
        name: POINTS,
        path: 'points',
        component: Points,
        meta: {title: 'Точки'}
      },
      {
        path: 'employees2',
        name: EMPLOYEES2,
        component: Employees2,
        meta: {title: 'Сотрудники2'}
      },
      {
        path: 'create-employee',
        name: CREATEEMPLOYEE,
        component: CreateEmployee,
      }
    ],
  },


  {path: '/:pathMatch(.*)*', component: ErrorPageComponent},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router