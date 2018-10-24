<template>
    <div class="container">
        
        <vs-row vs-justify="center" class="row">
            <vs-col v-for="anime in animes" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="animeCard">
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

        <div class="buttons">
            <vs-button @click="prev10Anime()" v-show="prevButton" color="success" vs-type="gradient">Previous</vs-button>
            <vs-button @click="next10Anime()" v-show="nextButton" color="success" vs-type="gradient">Next</vs-button>
        </div>
        

    </div>
</template>


<script>
import axios from 'axios'
export default {      
    data() {
        return {
            nextButton: false,
            prevButton: false,
            genre: this.$route.params.genre,
            allAnimes: '',
            animes: '',
            
        }
    },
    created() {
        this.getAllAnimes();
        
    },
    methods: {
        getAllAnimes(){
            this.showLoading();
            let link = 'https://kitsu.io/api/edge/anime?filter[categories]=' + this.genre
            axios.get(link).then( response => {
                this.allAnimes = response.data
                this.animes = this.allAnimes.data
                this.nextButton = true
                // console.log(this.allAnimes);
                this.hideLoading();
            });
        },
        addAnimeToWatchlist(anime) {
            this.$emit("addAnimeToWatchlist", anime);
        },
        next10Anime: function(){
          this.showLoading();
          var next = this.allAnimes.links.next
          axios.get(next).then( response => {
            this.allAnimes = response.data
            this.animes = this.allAnimes.data
            this.prevButton = true
            this.hideLoading();
            // console.log(this.results)
          });
        },
        prev10Anime: function(){
          this.showLoading();
          var prev = this.allAnimes.links.prev
          axios.get(prev).then(response => {
            this.allAnimes = response.data
            this.animes = this.allAnimes.data
            var exist = this.allAnimes.links.prev
            if (exist == undefined) {
              this.prevButton = false
            }
            this.hideLoading();
            // console.log(exist)
          });
        },
        showLoading: function() {
            this.$vs.loading();
        },
        hideLoading() {
            this.$vs.loading.close();
        },
    },
}
</script>

<style scoped lang="scss">
	
	.container{
      padding: 0%;
      margin: 0% auto;

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
      .buttons{ 
        //   border: 2px solid black;         
          width: 50%;
          margin: auto;
          text-align: center; //to center button
          
          button{
            width: 20%;
            margin: 10% 2% 5% 2%;
            font-weight: 500;
          }
      }
    }
	
	
</style>
