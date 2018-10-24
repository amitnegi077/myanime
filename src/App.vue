<template>
  <div id="app">
    <app-header />
    <router-view  v-on:addAnimeToWatchlist="addAnimeToWatchlist"
                    v-bind:watchlist="watchlist" />
    
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
    AppFooter,
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
  
  /* for colorgradient */

  background: #134E5E;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #71B280, #134E5E);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #71B280, #134E5E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
