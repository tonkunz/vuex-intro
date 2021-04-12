import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { INCREMENT } from './mutations-types'

// Models
import { Todo } from '@/models/Todo'

/** Definição do tipo da estado na Store
 * https://next.vuex.vuejs.org/guide/typescript-support.html#typing-store-property-in-vue-component
*/
export interface State {
  count: number;
  todos: Array<Todo>;
}

// Definição da Injection Key, usada no use store
export const key: InjectionKey<Store<State>> = Symbol('Store Injection Key')

export const store = createStore<State>({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'My first Todo', done: true },
      { id: 2, text: 'My second Todo', done: false }
    ]
  },
  /** Mutations
   * A única maneira de realmente mudar de estado em um store
   * Vuex é por confirmar (ou fazer commit de) uma mutação.
   */
  mutations: {
    /** podemos usar o recurso de nome do dado computado do ES2015
     * para usar uma constante como o nome da função
     */
    [INCREMENT] (state) {
      state.count++
    },
    toggleTodo (state, todo: Todo) {
      const todoIndex = state.todos.indexOf(todo)

      state.todos[todoIndex].done = !state.todos[todoIndex].done
    }
  },
  actions: {},
  /** GETTERS
   * Você pode pensar neles como dados computados para os stores.
   * Como os dados computados, o resultado de um getter é armazenado
   * em cache com base em suas dependências e só será reavaliado
   * quando algumas de suas dependências forem alteradas.
   *
   * Você pode futuramente mapear os Getters ou expalha-los nos
   * componentes que o usam usando o método mapGetters:
   * https://next.vuex.vuejs.org/ptbr/guide/getters.html#o-auxiliar-mapgetters
   */
  getters: {
    // Property-Style Access
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    },
    // Os getters também recebem outros getters como o 2º argumento:
    doneTodosCount (state, getters) {
      return getters.doneTodos.length
    },
    /** Method-Style Access
     * Você também pode passar argumentos para os getters retornando uma função.
     * Isso é particularmente útil quando você deseja consultar um Array no store:
     */
    getTodoById: state => (id: number) => {
      return state.todos.find((todo: Todo) => todo.id === id)
    }
  },
  modules: {
  }
})
