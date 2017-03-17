<template>
  <div class="container" :style="[ bgColor ]" >
    <div class="centered">
      <h1>Paint this background!</h1>
      <input type="color" v-model="bgColor.backgroundColor">
      <input type="text" maxlength="7" v-model="bgColor.backgroundColor">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bgColor: {
      backgroundColor: '#ffff00'
    }
  }),
  computed: {
    bgColorUP () {
      this.bgColor = this.bgColor.toUpperCase()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
div.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
  /*border: 1px solid black;*/
  h1 {
    margin: 0;
  }
  input[type="text"] {
    width: 5em;
  }
}
</style>
