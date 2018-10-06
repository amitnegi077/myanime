<template>
  <div id="app">
    <app-header />
    <router-view  v-on:addAnimeToWatchlist="addAnimeToWatchlist"
                    v-bind:watchlist="watchlist"/>
    <app-footer />
  </div>
</template>

<script>

import AppHeader from './components/Header'
import AppFooter from './components/Footer'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      watchlist: []
    }
  },
  created() {
    this.setWatchlist();
  },
  watch: {
    watchlist() {
      this.setLocal()
    }
  },
  methods: {
    addAnimeToWatchlist(anime) {
      this.watchlist.push(anime);
      this.setLocal();
    },
    setWatchlist() {
      this.watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    },
    setLocal() {
      localStorage.setItem('watchlist', JSON.stringify(this.watchlist))
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
