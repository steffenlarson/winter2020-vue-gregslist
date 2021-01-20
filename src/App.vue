<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="nav navbar-nav">
      <!-- NOTE router links are like tags on a page. One for each page to travel to. -->
      <!-- REVIEW why the :to? is that the path we want the link to take? The name is what the path is called in the index. -->
      <router-link :to="{ name: 'Cars' }" class="nav-item nav-link active">
        Cars
      </router-link>
      <router-link :to="{ name: 'Homes' }" class="nav-item nav-link active">
        Homes
      </router-link>
    </div>
  </nav>
  <!-- NOTE Router-View allows the Router to determine which component gets loaded -->
  <router-view />
  <footer class="container-fluid bg-dark text-light">
    <div class="row">
      <div class="col p-5 text-center">
        <p>Made with ♥ by CodeWorks</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
// NOTE import bootstrap here so that it can be used for the whole application.
@import 'bootstrap';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
