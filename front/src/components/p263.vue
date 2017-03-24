<template>
  <div class="container">
    <h1>동적 컴포넌트</h1>
    <component :is="this.isA ? 'p263a' : 'p263b'"></component>
    <p>
      This is very useful...
    </p>
    <button @click="isA = !isA">Toggle Component</button>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
import p263a from './p263a'
import p263b from './p263b'

export default {
  components: {
    p263a,
    p263b
  },
  data () {
    return {
      isA: true
    }
  },
  computed: {
    currentComponent () {
      return this.isA ? 'p263a' : 'p263b'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
