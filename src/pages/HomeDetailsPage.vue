<template>
  <div class="home-details">
    <h1>Welcome to home details</h1>
    <!-- NOTE v-if used here to say that if the page is loaded, display image. Else display loading... -->
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
// IMPORTANT REVIEW need help here. I am not sure what is getting pulled with the two consts. What does setup do? Like a constructor?
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      loaded: false
    })
    // onBeforeRouteLeave(() => {
    //   AppState.activeCar = {}
    // })
    // NOTE to have things appear on load mount and then async the specific instance.
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
    // NOTE setup must return something. here because we have the state above we return the state. Why do we return the home computed.
    // REVIEW what do we need to return typically?? what kind of things?
    return {
      state,
      home: computed(() => AppState.activeHome)
    }
  }
}
</script>

<style>
</style>
