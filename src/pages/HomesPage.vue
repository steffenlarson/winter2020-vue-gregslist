<template>
  <div class="homes-page container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1><img alt="Vue logo" src="../assets/logo.png" class="logo" />Homes</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <!-- NOTE @submit.prevent means that there is a form that will be submitted and that the default action of page reload is going to be prevented. -->
        <form @submit.prevent="createHome">
          <div class="form-group-inline">
            <!-- NOTE for each required property on an object, need an input field. Check with the api to see what things are called and what is required. -->
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
            <!-- NOTE see above. The v-model is used to two way data bind on forms. That is pretty much the only place that v-model is used for. -->
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
          <!-- NOTE make sure to make a submit button for the form. -->
          <button type="submit" class="btn btn-success">
            Add Home
          </button>
        </form>
      </div>
    </div>
    <div class="row">
      <!-- REVIEW I still do not one hundred percent understand what and why this line is written the way that it is written. What is it doing? -->
      <Home v-for="home in homes" :key="home.id" :home="home" />
    </div>
  </div>
</template>

<script>
// NOTE make sure to import everything that is needed for computeds, reactives, and onMounteds to work. Import anything else that is getting used here too.
import { computed, onMounted, reactive } from 'vue'
import { homesService } from '../services/HomesService'
import { AppState } from '../AppState'
import Home from '../components/Home.vue'
import { useRouter } from 'vue-router'

export default {
  // REVIEW why are we naming it? to use it to inject?
  name: 'HomesPage',
  setup() {
    const router = useRouter()
    // REVIEW we made a state here locally. Why? because we only need the information here?
    const state = reactive({
      newHome: {}
    })

    // NOTE on mounted gets called when the page is first mounted to the dom (similar to constructors) this allows us to build something on page reload.
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
          // REVIEW how does changing the route work in this line. use router.push the name of the url that we want them to travel to and the id to be added onto it to get to the specific one.
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
