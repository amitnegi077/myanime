<!--
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
-->

<template>
  <div>
    <div id="carousel">
      <carousel-3d :autoplay="true" :autoplay-timeout="2500" :display="5" :controls-visible="true" 
                  :clickable="true" :count="animes.length" :height="450" >
        <slide v-for="(anime, i) in animes" :index="i">
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

    <div id="row1" class="container">
      <h5>
        ADVENTURE
        <button class="viewMore"><a href="#">view more</a></button>
      </h5>
      <vs-row vs-justify="center" class="row">
        <vs-col v-for="adventure in adventures" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="animeCard">
          <vs-card actionable class="cardx">
            <div slot="header" class="cardTitle">
              <strong>
                {{adventure.attributes.canonicalTitle}}
              </strong>
            </div>
            <div slot="media">
              <img :src="adventure.attributes.posterImage.medium">
            </div>
            <div>
              <span>Rating: {{adventure.attributes.averageRating}}</span>
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button color="primary" vs-type="gradient" >View</vs-button>
                <vs-button color="danger" vs-type="gradient">Delete</vs-button>
              </vs-row> 
            </div>
          </vs-card>
        </vs-col>
                
      </vs-row>
    </div>

    <div id="row2" class="container">
      <h5>
        ACTION
        <button class="viewMore"><a href="#">view more</a></button>
      </h5>
      <vs-row vs-justify="center" class="row">
        <vs-col v-for="action in actions" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="animeCard">
          <vs-card actionable class="cardx">
            <div slot="header" class="cardTitle">
              <strong>
                {{action.attributes.canonicalTitle}}
              </strong>
            </div>
            <div slot="media">
              <img :src="action.attributes.posterImage.medium">
            </div>
            <div>
              <span>Rating: {{action.attributes.averageRating}}</span>
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button color="primary" vs-type="gradient" >View</vs-button>
                <vs-button color="danger" vs-type="gradient">Delete</vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
                
      </vs-row>
    </div>

    <div id="row3" class="container">
      <h5>
        THRILLER
        <button class="viewMore"><a href="#">view more</a></button>
      </h5>
      <vs-row vs-justify="center" class="row">
        <vs-col v-for="thriller in thrillers" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="animeCard">
          <vs-card actionable class="cardx">
            <div slot="header" class="cardTitle">
              <strong>
                {{thriller.attributes.canonicalTitle}}
              </strong>
            </div>
            <div slot="media">
              <img :src="thriller.attributes.posterImage.medium">
            </div>
            <div>
              <span>Rating: {{thriller.attributes.averageRating}}</span>
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button color="primary" vs-type="gradient" >View</vs-button>
                <vs-button color="danger" vs-type="gradient">Delete</vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
                
      </vs-row>
    </div>

    <div id="row4" class="container">
      <h5>
        MYSTERY
        <button class="viewMore"><a href="#">view more</a></button>
      </h5>
      <vs-row vs-justify="center" class="row">
        <vs-col v-for="mystery in mysterys" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="animeCard">
          <vs-card actionable class="cardx">
            <div slot="header" class="cardTitle">
              <strong>
                {{mystery.attributes.canonicalTitle}}
              </strong>
            </div>
            <div slot="media">
              <img :src="mystery.attributes.posterImage.medium">
            </div>
            <div>
              <span>Rating: {{mystery.attributes.averageRating}}</span>
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button color="primary" vs-type="gradient" >View</vs-button>
                <vs-button color="danger" vs-type="gradient">Delete</vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
                
      </vs-row>
    </div>

    <div id="row5" class="container">
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
                
      </vs-row>
    </div>

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
      viewMoreButton: false,  
      results: '',
      animes: '',
      genres: ['adventure', 'action', 'thriller', 'mystery', 'horror'],
      adventures: '',
      actions: '',
      thrillers: '',
      mysterys: '',
      horrors: '', 

    }
  },
  created() {
    this.getAnimes();
    this.getRowAnime();
    
  },
  methods: {
    getAnimes(){
      this.showLoading();
      axios.get('https://kitsu.io/api/edge/trending/anime').then( response => {
        this.results = response.data
        // console.log(this.results);
        this.animes = this.results.data
        this.nextButton = true
        this.hideLoading();
        // console.log(this.animes);
      });        
    },
    getRowAnime(){

      for (var i=0; i<5; i++) {
        let genre = this.genres[i]
        let link = 'https://kitsu.io/api/edge/anime?filter[categories]=' + genre + '&page[limit]=5&page[offset]=0'

        axios.get(link).then( response => {
          
          if (genre == 'adventure') {
            this.adventures = response.data.data
            console.log("ADVENTURE");
            console.log(this.adventures);
          } else if (genre == 'action') {
              this.actions = response.data.data
              console.log("ACTION");
              console.log(this.actions);
          } else if (genre == 'thriller') {
              this.thrillers = response.data.data
              console.log("THRILLER");
              console.log(this.thrillers);
          } else if (genre == 'mystery') {
              this.mysterys = response.data.data
              console.log("MYSTERY");
              console.log(this.mysterys);
          } else if (genre == 'horror') {
              this.horrors = response.data.data
              console.log("HORROR");
              console.log(this.horrors);
          }
          
        });
        
      }
    },


    // next10Anime: function(){
    //   this.showLoading();
    //   var next = this.results.links.next
    //   axios.get(next).then( response => {
    //     this.results = response.data
    //     this.animes = this.results.data
    //     this.prevButton = true
    //     this.hideLoading();
    //     console.log(this.results)
    //   });
    // },
    // prev10Anime: function(){
    //   this.showLoading();
    //   var prev = this.results.links.prev
    //   axios.get(prev).then(response => {
    //     this.results = response.data
    //     this.animes = this.results.data
    //     var exist = this.results.links.prev
    //     if (exist == undefined) {
    //       this.prevButton = false
    //     }
    //     this.hideLoading();
    //     console.log(exist)
    //   });
    // },


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
