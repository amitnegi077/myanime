<!-- <template>
  <div>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a href="#" class="navbar-brand">
            <img src="../assets/naruto1.png" width="30" height="30" class="d-inline-block align-top">
            EADB
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item"><a href="#" class="navlink">Home</a></li>
              <li class="nav-item"><a href="#" class="navlink">Categories</a></li>
              <li class="nav-item"><a href="#" class="navlink">Characters</a></li>
            </ul>
          </div>
        </nav>
    </div>
  </div>
</template> -->
<template>
  <div>
    <vs-navbar class="nabarx navbar">

      <vs-navbar-title>
        My Anime
      </vs-navbar-title>

      <vs-spacer></vs-spacer>

      <vs-navbar-item index="0">
        <router-link :to="{name: 'home'}">
          Home
        </router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">Categories</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link :to="{name: 'watchlist'}">
          Watchlist
        </router-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$navcolor:  #747d8c;
.navbar{
  background-color: $navcolor !important;
  position: fixed;
  top: 0;
  z-index: 100;
}
a{
  color: #ffffff;
  margin-right: 20px;
}
ul{
  margin-left: 50px;
}



</style>
