<template>
  <div id="hw022" class="heading form-group">
    <h1 v-if="gender=='male'">안녕하세요 {{ name }}씨, 당신은 남자이군요.</h1>
    <h1 v-else>안녕하세요 {{ name }}씨, 당신은 여자이군요.</h1>
    <label for="idGender">Enter your gender:</label>
    <input id="idGender" class="form-control" v-model="gender">
	<label for="idName">Enter your name:</label>
    <input id="idName" class="form-control" v-model="name">
  </div>
</template>

<script>
export default {
  name: 'hw022',
  data () {
    return {
      name: '이희원',
      gender: 'male'
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
