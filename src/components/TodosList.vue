<template>
    <h1>List Todos</h1>
    <ul class="list">
      <li v-for="todo in todos" :key="todo.id" class="list-item">
        <p>{{ todo.text }}</p>
        <span>{{ todo.done }}</span>
        <button
          class="btn"
          type="button"
          @click="toggleTodo(todo)"
        >Toggle</button>
      </li>
    </ul>
    <div>Total done: {{ doneTodosCount }}</div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, computed, ComputedRef } from 'vue'

export default defineComponent({
  name: 'TodoList',
  setup () {
    // Conecta a store
    const store = useStore()

    const todos: ComputedRef<Array<any>> =
      computed((): Array<any> => store.state.todos)
    const doneTodosCount: ComputedRef<number> =
      computed((): number => store.getters.doneTodosCount)

    const toggleTodo = (todo: any): void => store.commit('toggleTodo', todo)

    return {
      todos,
      doneTodosCount,
      toggleTodo
    }
  }
})
</script>

<style scoped>
.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.list-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.list-item p {
  margin: 0;
  flex: 2;
}

.list-item span {
  flex: 1;
}
</style>
