<template>
  <div>
    <h1>상세 내용</h1>
    <h2> {{movie.name}} </h2>
    <h3> {{movie.year}} </h3>
    <h4> {{movie.director}} </h4>
    <h5><img :src="movie.poster" alt=""></h5>
  </div>
</template>

<script>
export default {
  props: [ 'movie' ]
}
</script>
