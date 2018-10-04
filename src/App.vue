<template>
  <div id="app">
    <app-header />
    <!-- <app-content v-on:addAnimeToWatchlist="addAnimeToWatchlist"
                  v-bind:watchlist="watchlist"/> -->
    <router-view  v-on:addAnimeToWatchlist="addAnimeToWatchlist"
                    v-bind:watchlist="watchlist"/>
    <app-footer />
  </div>
</template>

<script>

import AppHeader from './components/Header'
// import AppContent from './components/Content'
import AppFooter from './components/Footer'

export default {
  name: 'App',
  components: {
    AppHeader,
    // AppContent,
    AppFooter
  },
  data () {
    return {
      watchlist: []
    }
  },
  methods: {
    addAnimeToWatchlist(anime) {
      this.watchlist.push(anime);
      console.log(this.watchlist);
    }
  }
}

</script>

<style>
html,body {
  height: 100%;
  width: 100%;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: inherit;
  width: inherit;
}
</style>
