<template>
	<div class="container-fluid content-wrapper">
		<b-row class="content">
			<div v-for="anime in watchlist"
						 class="col-2 card anime-card">
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

<script>

  export default {
    name: 'Footer',
    props: ['watchlist'],
    data() {
      return {}
    },
		mounted() {
			console.log(this.watchlist);
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
</style>
