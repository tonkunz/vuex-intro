<template>
  <div class="container">
    <div>
      <strong>Count:</strong>
      <p>{{ count }}</p>
    </div>
    <button class="btn" @click="increment">Incrementar</button>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed, ComputedRef, defineComponent } from 'vue'
import { key } from '@/store'
import { INCREMENT } from '@/store/mutations-types'

export default defineComponent({
  name: 'CountContainer',
  setup () {
    const store = useStore(key)

    /** Computed Property on Composition API:
     * ReadonlyRef or WritableComputedRef
     */
    const count: ComputedRef<number> = computed((): number => store.state.count)

    return {
      count,
      increment: () => store.commit(INCREMENT)
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: .5rem;
}
</style>
