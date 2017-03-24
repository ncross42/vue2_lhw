<template>
  <div class="container">
    <h1>Hello world~!</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      child_data: 0
    }
  },
  props: ['parent_data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
