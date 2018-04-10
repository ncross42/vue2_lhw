<template>
  <div class="heading form-group">
    <h1>Hello {{ name }}</h1>
    <label for="idName">Enter your name:</label>
    <input id="idName" class="form-control" v-model="name">
    <button type="button" class="btn btn-primary" autocomplate="off" data-loading-text="jquery with bootstrap" @click="clickBtn">asdfasdf button</button>
  </div>
</template>

<script>
export default {
  name: 'p010',
  data () {
    return {
      name: '이희원'
    }
  },
  methods: {
    clickBtn (event) {
      $(event.target).button('loading')
      setTimeout(function () {
        $(event.target).button('reset')
      }, 1000)
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
}
</style>
