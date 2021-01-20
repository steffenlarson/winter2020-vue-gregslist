<template>
  <div class="home-details">
    <h1>Welcome to home details</h1>
    <!-- NOTE v-if used here  -->
    <img v-if="state.loaded" :src="home.imgUrl" alt="" />
    <h1 v-else>
      Loading...
    </h1>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { homesService } from '../services/HomesService'
// IMPORTANT REVIEW
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      loaded: false
    })
    // onBeforeRouteLeave(() => {
    //   AppState.activeCar = {}
    // })
    onMounted(async() => {
      try {
        await homesService.getOne(route.params.id)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      } finally {
        state.loaded = true
      }
    })
    return {
      state,
      home: computed(() => AppState.activeHome)
    }
  }
}
</script>

<style>
</style>
