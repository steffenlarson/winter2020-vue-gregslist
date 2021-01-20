<template>
  <div class="home col-4">
    <router-link :to="{ name: 'HomeDetails', params: { id: home.id } }">
      <div class="card">
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
  name: 'Home',
  props: {
    home: {
      type: Object,
      required: true
    }
  },
  setup(props) {

  }
}
</script>

<style lang="scss">
  .home {
    cursor: pointer;
  }
</style>
