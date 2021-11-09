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
  isSidebarShowed: boolean,
  isEdit: boolean,
  editProduct: EmployeeType | undefined
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
    isSidebarShowed: false,
    isEdit: false,
    editProduct: undefined
  },
  mutations: {
    addEmployee(state, employee: EmployeeType) {
      state.employees.push(employee)
    },
    deleteEmployee(state, index: number) {
      state.employees.splice(index, 1)
    },
    updateEmployee(state, employee: EmployeeType) {
      const index = state.employees.findIndex(e => e.id === employee.id)
      state.employees[index].age = employee.age
      state.employees[index].name = employee.name
      state.employees[index].position = employee.position
    },
    toggleIsSidebarShowed(state) {
      state.isSidebarShowed = !state.isSidebarShowed
    },
    toggleIsEdit(state) {
      state.isEdit = !state.isEdit
    },
    updateEditProduct(state, employee: EmployeeType) {
      state.editProduct = employee
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
    },
    isEdit(state): boolean {
      return state.isEdit
    },
    editProduct(state): EmployeeType {
      return state.editProduct
    }
  }
})

