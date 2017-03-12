<template id="food">
  <div class="col-sm-4">
    <p>{{ votes }}</p>
    <button class="btn btn-default" @click="vote">{{ name }}</button>
  </div>
</template>

<script>
export default {
  template: '#food',
  props: ['name'],
  data () {
    return {
      votes: 0
    }
  },
  methods: {
    vote: function (event) {
      // console.log(event)
      this.votes++
      this.$emit('voted', event.srcElement.textContent)
    }
  }
}
</script>

<style scoped>
div p {
  font-size: 4em;
}
</style>
