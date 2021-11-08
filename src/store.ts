import {createStore, Store, useStore as baseUseStore} from 'vuex'
import {InjectionKey} from 'vue'

export interface EmployeeType {
  id: number
  name: string
  position: 'admin' | 'guest'
  age: number
}

export interface State {
  employees: EmployeeType[],
  isSidebarShowed: boolean
}

export default createStore<State>({
  state: {
    employees: [
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
      }, {
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
      }, {
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
    ],
    isSidebarShowed: false
  },
  mutations: {
    addEmployee(state, employee: EmployeeType) {
      state.employees.push(employee)
    },
    deleteEmployee(state, index: number) {
      state.employees.splice(index, 1)
    },
    toggleIsSidebarShowed(state) {
      state.isSidebarShowed = !state.isSidebarShowed
    }
  },
  actions: {

  },
  getters: {
    employees(state): EmployeeType[] {
      return state.employees
    },
    isSidebarShowed(state): boolean {
      return state.isSidebarShowed
    }
  }
})

