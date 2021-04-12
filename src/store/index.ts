import { createStore } from 'vuex'

export default createStore({
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
    increment (state) {
      state.count++
    },
    toggleTodo (state, todo) {
      const todoIndex = state.todos.indexOf(todo)

      state.todos[todoIndex].done = !state.todos[todoIndex].done
    }
  },
  actions: {
  },
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
      return state.todos.find(todo => todo.id === id)
    }
  },
  modules: {
  }
})
