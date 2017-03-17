<template>
  <div class="container text-center">
    <div class="box" :class="[ color ? 'red' : 'blue' ]"></div>
    <div class="box" :class="[ color ? 'purple' :'green' ]"></div>
    <div class="box" :class="[ color ? 'red' : 'blue' ]"></div>
    <div class="box" :class="[ color ? 'purple' : 'green' ]"></div>
    <button @click="flipColor" class="btn btn-block btn-success">
      Flip color!
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    color: true
  }),
  methods: {
    flipColor () {
      this.color = !this.color
    }
  }
}
</script>

<style scoped>
.red {
  background: #ff0000;
}
.blue {
  background: #0000ff;
}
.purple {
  background: #7B1FA2;
}
.green {
  background: #4CAF50;
}
.box {
  float: left;
  width: 200px;
  height: 200px;
  margin: 40px;
  border: 1px solid rgba(0, 0, 0, .2);
}
</style>
