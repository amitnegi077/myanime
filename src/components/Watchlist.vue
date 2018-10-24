<!--
<template>
	<div class="container-fluid content-wrapper">
		<b-row class="content">
			<div v-for="anime in watchlist"
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
	</div>
</template>
-->

<template>
	<div class="container">
		<vs-row vs-justify="center" class="row">
        <vs-col v-for="anime in watchlist"
                  vs-type="flex" vs-justify="left"
                    vs-align="left" vs-w="2" class="animeCard">
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
                            color="primary" vs-type="gradient" v-show="false" >
                    Add to Watchlist
                </vs-button>
								<vs-button color="danger" vs-type="gradient"> 
									Remove
								</vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
		</vs-row>
	</div>
</template>


<script>

  export default {
    name: 'Footer',
    props: ['watchlist'],
    data() {
      return {}
    }
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
}	
</style>
