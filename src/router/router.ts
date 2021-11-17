//#region import
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import LoginPage from '@/views/pages/login/login.vue'
import ErrorPageComponent from '@views/pages/error404/error404.vue'
import ReferenceShopBooks from '@views/pages/reference-shop-books/reference-shop-books.vue'
import Employees from '@views/pages/employees/employees.vue'
import Points from '@views/pages/points/points.vue'
import {
  DEFAULT,
  EDITOR_CREATE_EMPLOYEE,
  EMPLOYEES,
  EMPLOYEES2,
  LOGIN,
  POINTS,
  REFERENCE_SHOP_BOOKS, SERVICE_CARDS
} from './routerNames'
import Employees2 from '@views/pages/employees/employees2.vue'
import EditOrCreateEmployee from '@views/pages/employees/edit-or-create-employee.vue'
import ServiceCards from '@views/pages/service-cards/service-cards.vue'
//#region Admin
const Layout = () => import('@/views/layouts/layout.vue')

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
        name: REFERENCE_SHOP_BOOKS,
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
        path: 'edit-or-create-employee',
        name: EDITOR_CREATE_EMPLOYEE,
        component: EditOrCreateEmployee,
      },
      {
        path: 'service-cards',
        name: SERVICE_CARDS,
        component: ServiceCards,
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
