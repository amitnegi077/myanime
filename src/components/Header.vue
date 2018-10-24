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

<!--latest
<template>
  <div>
    <vs-navbar class="nabarx navbar">

      <vs-navbar-title>
        <vs-navbar-brand>
          <img src="../assets/naruto1.png" alt="">
        </vs-navbar-brand>
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

-->

<template>
  <div>
    <nav>
      <div id="navbar" class="navbar">
        <div id="left">
          <!-- <a class="navbar-brand" href="#"> -->
            <img src="../assets/naruto1.png" alt="logo" class="rounded-circle" style="background: white;">
            My Anime
          <!-- </a> -->
        </div>

        <div id="center">
          <ul class="nav justify-content-end">
            <li class="nav-item"><router-link :to="{name: 'home'}">Home</router-link></li>
            <li class="nav-item"><a href="#">Categories</a></li>
            <li class="nav-item"><a href="#"><router-link :to="{name: 'watchlist'}">Watchlist</router-link></a></li>
          </ul>
        </div>

        <div id="right">
          <button>Signup</button>
        </div>
      </div>
    </nav>
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
// $navcolor:  #747d8c;
// .navbar{
//   background-color: $navcolor !important;
//   position: fixed;
//   top: 0;
//   z-index: 100;
// }
// a{
//   color: #ffffff;
//   margin-right: 20px;
// }
// ul{
//   margin-left: 50px;
// }


//new

.navbar{
  // border: 2px solid black;
  justify-content: center;
  padding-top: 2%;
  a{
    color: #ffffff;
    // margin: 50%;
    font-weight: 700;
  }

  #left{
    // border: 2px solid black;
    margin: auto;
    font-weight: 900;
  }
  #center{
    width: 50%;
    // border: 2px solid black;
    margin: 0 auto;
    .nav-item{
      margin-right: auto;
      margin-left: auto;
      float: center;
      
    }
  }
  #right{
    // border: 2px solid black;
    margin: auto;
  }
}



</style>
