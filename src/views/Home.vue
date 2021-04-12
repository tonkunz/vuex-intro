<template>
  <div class="home">
    <h1>Home Page</h1>
    <CountContainer />
    <ListTodo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CountContainer from '@/components/CountContainer.vue'
import ListTodo from '@/components/TodosList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    CountContainer,
    ListTodo
  }
})
</script>
