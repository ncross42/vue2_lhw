<template>
  <div class="movies">
    <h1>영화 목록</h1>
    <div v-for="movie in movies" class="movie" :key="movie.id">
      <img :src="movie.poster" class="poster">
      <div>
        <strong>{{movie.name}}</strong>, <i>{{movie.director}}</i> [{{movie.year}}]
        <router-link :to="{ name: 'amovie', params: { id: movie.id }}">더보기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('/api/movie')
    .then((response) => {
      this.movies = response.data
    })
  },
  data () {
    return {
      movies: []
    }
  }
}
</script>
