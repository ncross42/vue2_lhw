<template>
  <div id="hw022" class="form-group">
    <h1>Let's hear some stories</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(v,k,i) in story">
        {{i}} : {{k}} : {{v}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'p038',
  data () {
    return {
      story: {
        name: 'asd',
        height: '165cm',
        weight: '65kg',
        hair: 'black'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: left;
}
h1, h2 {
  font-weight: normal;
}
</style>
