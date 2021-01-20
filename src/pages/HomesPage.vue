<template>
  <div class="homes-page container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1><img alt="Vue logo" src="../assets/logo.png" class="logo" />Homes</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form @submit.prevent="createHome">
          <div class="form-group-inline">
            <label for="bedrooms">Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              id="bedrooms"
              v-model="state.newHome.bedrooms"
              class="form-control"
              placeholder="Bedrooms..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="bathrooms">Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              id="bathrooms"
              v-model="state.newHome.bathrooms"
              class="form-control"
              placeholder="Bathrooms..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="levels">levels</label>
            <input
              type="number"
              name="levels"
              id="levels"
              v-model="state.newHome.levels"
              class="form-control"
              placeholder="levels..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="price">price</label>
            <input
              type="number"
              name="price"
              id="price"
              v-model="state.newHome.price"
              class="form-control"
              placeholder="price..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="year">year</label>
            <input
              type="number"
              name="year"
              id="year"
              v-model="state.newHome.year"
              class="form-control"
              placeholder="year..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="description">description</label>
            <input
              type="text"
              name="description"
              id="description"
              v-model="state.newHome.description"
              class="form-control"
              placeholder="description..."
              aria-describedby="helpId"
            />
          </div>
          <div class="form-group-inline">
            <label for="imgUrl">imgUrl</label>
            <input
              type="text"
              name="imgUrl"
              id="imgUrl"
              v-model="state.newHome.imgUrl"
              class="form-control"
              placeholder="imgUrl..."
              aria-describedby="helpId"
            />
          </div>
          <button type="submit" class="btn btn-success">
            Add Home
          </button>
        </form>
      </div>
    </div>
    <div class="row">
      <Home v-for="home in homes" :key="home.id" :home="home" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { homesService } from '../services/HomesService'
import { AppState } from '../AppState'
import Home from '../components/Home.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'HomesPage',
  setup() {
    const router = useRouter()
    const state = reactive({
      newHome: {}
    })

    // NOTE on mounted gets called when the page is first mounted to the dom (similar to constructors)
    onMounted(() => {
      try {
        homesService.getHomes()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    })
    return {
      state,
      // if data changes dynimcally in the appstate use a computed
      homes: computed(() => AppState.homes),

      async createHome() {
        try {
          const id = await homesService.create(state.newHome)
          state.newHome = {}
          // change route in javascript using router.push()
          router.push({ name: 'HomeDetails', params: { id } })
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error)
        }
      }

    }
  },
  components: {
    Home
  }
}
</script>

<style lang="scss">
  .logo {
   transform: rotateZ(90deg);
   height: 1em
  }
</style>
