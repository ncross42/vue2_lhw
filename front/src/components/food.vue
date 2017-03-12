<template id="food">
  <div class="col-sm-4">
    <p>{{ votes }}</p>
    <button class="btn btn-default" @click="vote">{{ name }}</button>
  </div>
</template>

<script>
// Import the EventBus we just created.
import { EventBus } from '../event-bus.js'

export default {
  template: '#food',
  props: ['name'],
  data: () => ({
    votes: 0
  }),
  created () {
    EventBus.$on('reset', function () {
      this.reset()
    }.bind(this))
  },
  methods: {
    vote (event) {
      // console.log(event)
      this.votes++
      this.$emit('voted', event.srcElement.textContent)
      // EventBus.$emit('voted', event.srcElement.textContent)
    },
    reset () {
      this.votes = 0
    }
  }
}
</script>

<style scoped>
div p {
  font-size: 4em;
}
</style>
