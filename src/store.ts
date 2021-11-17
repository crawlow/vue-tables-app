import {createStore, Store, useStore as baseUseStore} from 'vuex'
import {InjectionKey} from 'vue'

export interface EmployeeType {
  id: number
  name: string
  position: 'admin' | 'guest'
  age: number
}

export interface ServiceCardType {
  id: number
  name: string
  birthday: Date
  photo: string
  phone: number
  position: 'admin' | 'guest'
  education: string
  experience: string,
  university: string
}

export interface State {
  employees: EmployeeType[]
  isSidebarShowed: boolean
  isEdit: boolean
  editProduct: EmployeeType | undefined
  cards: ServiceCardType[]
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
    cards: [
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: 'first',
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: 'second',
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      },
      {
        id: Math.floor(Math.random() * (10000 - 1) + 1),
        name: 'andrew',
        birthday: new Date(),
        education: 'gymnasium №3',
        experience: 'little startup',
        phone: 77902942,
        photo: (Math.random() + 1).toString(36).substring(7),
        position: 'admin',
        university: 'technical college of informatics and low'
      }
    ],
    isSidebarShowed: false,
    isEdit: false,
    editProduct: undefined
  },
  mutations: {
    addCard(state, card: ServiceCardType) {
      state.cards.push(card)
    },
    updateCard(state, card: ServiceCardType) {
      const index = state.cards.findIndex(e => e.id === card.id)
      state.cards[index] = {...card}
    },
    deleteCard(state, index: number) {
      state.cards.splice(index, 1)
    },
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
  actions: {},
  getters: {
    employees(state): EmployeeType[] {
      return state.employees
    },
    isSidebarShowed(state): boolean {
      return state.isSidebarShowed
    },
    isEdit(state) {
      return state.isEdit
    },
    editProduct(state): EmployeeType {
      return state.editProduct
    },
    cards(state): ServiceCardType[] {
      return state.cards
    }
  }
})

