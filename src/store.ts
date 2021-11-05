import {createStore, Store, useStore as baseUseStore} from 'vuex'
import {InjectionKey} from 'vue'

export interface EmployeeType {
  id: number
  name: string
  position: 'admin' | 'guest'
  age: number
}

export interface State {
  employees: EmployeeType[]
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
    ]
  },
  mutations: {
    addEmployee(state, employee: EmployeeType) {
      state.employees.push(employee)
    },
    deleteEmployee(state, index: number) {
      state.employees.splice(index, 1)
    }
  },
  actions: {

  },
  getters: {
    employees(state) {
      return state.employees
    }
  }
})

