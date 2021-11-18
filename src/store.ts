import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export interface EmployeeType {
  id: number
  name: string
  position: 'admin' | 'guest'
  age: number
}

export class Events<T> {
  private _handlers = new Array<((res: T) => any)>();
  private _onceHandlers = new Array<((res: T) => any)>();
  get handlers() {
    return this._handlers.concat(this._onceHandlers);
  }
  once(callback: ((res: T) => any)) {
    if (this._onceHandlers.indexOf(callback) === -1) {
      this._onceHandlers.push(callback)
    }
  }
  on(callback: ((res: T) => any)) {
    if (this.handlers.indexOf(callback) === -1) {
      this._handlers.push(callback)
    }
  }
  removeListener(callback: ((res: T) => any)) {
    let idx = this._handlers.indexOf(callback);
    if (idx !== -1) {
      this._handlers.splice(idx, 1);
    } else {
      idx = this._onceHandlers.indexOf(callback);
      this._onceHandlers.splice(idx, 1);
    }
  }
  trigger(args: T) {
    // копируем, чтобы не очищать все onceHandlers, т.к. возможно что в обработчике кто-то подпишется на них
    const onceHandlersCopy = this._onceHandlers.slice();
    this.handlers.forEach(x => x(args));
    this._onceHandlers = this._onceHandlers.filter(x => onceHandlersCopy.indexOf(x) === -1);
  }
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
  cards: ServiceCardType[],
  globalEvent: Events<EmployeeType>
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
    editProduct: undefined,
    globalEvent: new Events<EmployeeType>()
  },
  mutations: {
    /**
     * 
     * @param state состояние
     * @param card карта сотрудника
     */
    addCard(state, card: ServiceCardType) {
      state.cards.push(card)
    },
    updateCard(state, card: ServiceCardType) {
      const index = state.cards.findIndex(e => e.id === card.id)
      state.cards[index] = { ...card }
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

