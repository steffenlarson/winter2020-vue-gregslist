<template>
  <!-- NOTE the template here in the component gets injected into the page. The page gets injected into the app.vue. -->
  <div class="home col-4">
    <!-- REVIEW this router link acts as an a tag and is clickable. It takes you to a different route. -->
    <router-link :to="{ name: 'HomeDetails', params: { id: home.id } }">
      <div class="card">
        <!-- NOTE bound the src so that the javascript inside could be read as a variable instead of a string. -->
        <img class="card-img-top" :src="home.imgUrl" alt="" />
        <div class="card-body">
          <h4 class="card-title">
            Bedrooms: {{ home.bedrooms }} |  Bathrooms: {{ home.bathrooms }} | Floors: {{ home.levels }} | Price: {{ home.price }}
          </h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  // REVIEW what is this name for? Is this putting the information needed for the component to be reconized elsewhere? Or is this exporting how to import the component?
  name: 'Home',
  // NOTE props pass information only.
  // REVIEW I am confused here. Why are we listing props and their info here? I thought that they could only be passed down.
  props: {
    home: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // REVIEW doesnt the setup need to return something?

  }
}
</script>

<style lang="scss">
  .home {
    cursor: pointer;
  }
</style>
