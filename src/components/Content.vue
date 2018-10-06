<template>
  <div class="container-fluid content-wrapper">
    <b-row class="content">
      <div v-for="anime in animes"
             class="col-4 col-md-2 card anime-card">
        <img v-bind:src="anime.attributes.posterImage.medium"
                class="card-img-top anime-card-img">
        <div class="card-body anime-card-body">
          <h5 class="card-title anime-card-title">
            {{anime.attributes.canonicalTitle}}
          </h5>
          <div class="card-text">
            Rating: {{anime.attributes.averageRating}}
          </div>
          <vs-button vs-color="success" vs-type="filled"
                    v-on:click="addAnimeToWatchlist(anime)" >
            Add to Watchlist
          </vs-button>
        </div>
      </div>
    </b-row>
    <button v-on:click="prev10Anime" v-show="prevButton">Previous</button>
    <button v-on:click="next10Anime" v-show="nextButton">Next</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Content',
  data () {
    return {
      nextButton: false,
      prevButton: false,
      results: '',
      animes: '',
    }
  },
  created() {
    this.getAnimes();
  },
  methods: {
    getAnimes(){
      this.showLoading();
      axios.get('https://kitsu.io/api/edge/anime').then( response => {
        this.results = response.data
        this.animes = this.results.data
        this.nextButton = true
        this.hideLoading();
        // console.log(this.results);
      });
    },
    next10Anime: function(){
      this.showLoading();
      var next = this.results.links.next
      axios.get(next).then( response => {
        this.results = response.data
        this.animes = this.results.data
        this.prevButton = true
        this.hideLoading();
        console.log(this.results)
      });
    },
    prev10Anime: function(){
      this.showLoading();
      var prev = this.results.links.prev
      axios.get(prev).then(response => {
        this.results = response.data
        this.animes = this.results.data
        var exist = this.results.links.prev
        if (exist == undefined) {
          this.prevButton = false
        }
        this.hideLoading();
        console.log(exist)
      });
    },
    addAnimeToWatchlist(anime) {
      this.$emit("addAnimeToWatchlist", anime);
    },
    showLoading: function() {
      this.$vs.loading();
    },
    hideLoading() {
      this.$vs.loading.close();
    }
  }
}
</script>

<style scoped lang="scss">

  .content-wrapper {
    margin-top: 60px;
  }
  .content {
    padding: 0 50px;
  }
  .anime-card {
    margin: 1% 1%;
    padding: 1%;
  }
  .anime-card-img {

  }
  .anime-card-body {
    font-size: 14px;
    padding: 5% 1%;
  }
  .anime-card-title {
    /* font-size: 14px; */
  }

  .card{
    /* margin-bottom: 20px; margin-top: 20px; */
  }

  /* h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  } */
</style>
