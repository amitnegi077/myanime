<template>
  <div>
    <div id="carousel">
      <carousel-3d :autoplay="true" :autoplay-timeout="2500" :display="5" :controls-visible="true"
                  :clickable="true" :count="animes.length" :height="450" >
        <slide v-for="(anime, i) in animes" :index="i" :key="i">
          <figure>
            <img :src="anime.attributes.posterImage.medium">
            <figcaption>
              The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!

            </figcaption>
          </figure>
        </slide>
      </carousel-3d>
    </div>

    <div v-for="(animesAndGenre, index) in animesByGenres" :key="index"
            id="row1" class="container">
      <h5>
        {{animesAndGenre.genre.toUpperCase()}}
        <router-link v-bind:to="'/' +animesAndGenre.genre"><button class="viewMore"><a href="#">view more</a></button></router-link>
      </h5>
      <vs-row vs-justify="center" class="row">
        <vs-col v-for="(anime, i) in animesAndGenre.animes" :key="i"
                  vs-type="flex" vs-justify="center"
                    vs-align="center" vs-w="2" class="animeCard">
          <vs-card actionable class="cardx">
            <div slot="header" class="cardTitle">
              <strong>
                {{anime.attributes.canonicalTitle}}
              </strong>
            </div>
            <div slot="media">
              <img :src="anime.attributes.posterImage.medium">
            </div>
            <div>
              <span>Rating: {{anime.attributes.averageRating}}</span>
            </div>
            <div slot="footer">
              <vs-row vs-justify="center">
                <vs-button @click="addAnimeToWatchlist(anime)"
                            color="primary" vs-type="gradient" >
                    Add to Watchlist
                </vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>

      </vs-row>
    </div>

    <!--  <div id="row5" class="container">
      <h5>
        HORROR
        <button class="viewMore"><a href="#">view more</a></button>
      </h5>
      <vs-row vs-justify="center" class="row">
        <vs-col v-for="horror in horrors" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="animeCard">
          <vs-card actionable class="cardx">
            <div slot="header" class="cardTitle">
              <strong>
                {{horror.attributes.canonicalTitle}}
              </strong>
            </div>
            <div slot="media">
              <img :src="horror.attributes.posterImage.medium">
            </div>
            <div>
              <span>Rating: {{horror.attributes.averageRating}}</span>
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button color="primary" vs-type="gradient" >View</vs-button>
                <vs-button color="danger" vs-type="gradient">Delete</vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>

      </vs-row> -->
    </div>

  </div>
</template>

<script>
import ViewMore from './ViewMore.vue';
import axios from 'axios'

export default {
  name: 'Content',
  components: {
    'ViewMore': ViewMore,
  },
  data () {
    return {
      nextButton: false,
      prevButton: false,
      viewMoreButton: false,
      results: '',
      animes: '',
      genres: ['adventure', 'action', 'thriller', 'mystery', 'horror'],
      animesByGenres: [],
      
    }
  },
  created() {
    this.getAnimes();
    // this.getRowAnime();
    this.genres.forEach( (genre) => {
      this.getAnimeByGenres(genre);
    });
  },
  methods: {
    getAnimes(){
      this.showLoading();
      axios.get('https://kitsu.io/api/edge/trending/anime').then( response => {
        this.results = response.data
        // console.log(this.results);
        this.animes = this.results.data
        // this.nextButton = true
        this.hideLoading();
        // console.log(this.animes);
      });
    },
    getAnimeByGenres(genre){
        let link = 'https://kitsu.io/api/edge/anime?filter[categories]='
                      + genre + '&page[limit]=5&page[offset]=0';
        axios.get(link).then( response => {
          var obj = {
            genre: genre,
            animes: response.data.data
          }
          this.animesByGenres.push(obj);
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

  .carousel-3d-container figure {
    margin:0;
  }

  .carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    font-size: 12px;
    min-width: 100%;
    box-sizing: border-box;
  }

  #carousel{
    margin: 4% 5% 8% 5%;
  }

  .container{
    padding: 0%;
    margin: 5% auto;
    // border: 2px solid black;

      .viewMore{
        float: right;
        margin-right: 0%;

        //to make button blend in with the page
        padding: 0;
        border: none;
        background: none;
        font-size: 15px;
      }
      .row{
        margin: 0%;
        padding: 0%;
      }
      .animeCard{
        margin: 2%;
        padding: 0%;

      }
      .cardTitle{
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }



  }

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
