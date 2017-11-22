<template>
  <div id="p113" class="container">
    <h1>
      Emit and Listen
      <button class="btn btn-danger pull-right" @click="reset">Reset votes</button>
    </h1>
    <p style="font-size: 140px;">
      {{ votes }}
    </p>
    <hr>
    <!--button class="btn btn-primary" @click="vote">Vote</button-->
    <div class="row">
      <food @voted="countVote" name="Cheeseburger"></food>
      <food @voted="countVote" name="Double Burger"></food>
      <food @voted="countVote" name="Rodeo Burger"></food>
    </div>
    <h1>Logs:</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(log,key) in logs" :key="key"> {{ log }} </li>
    </ul>
  </div>
</template>

<script>
import food from './food'
// Import the EventBus we just created.
import { EventBus } from '../event-bus.js'

export default {
  name: 'p113',
  components: {
    'food': food
  },
  data: () => ({
    votes: 0,
    logs: []
  }),
  // created () {
  //   this.$on('voted', function (button) {
  //     this.votes++
  //   })
  // },
  methods: {
    // vote: function (writer) {
    //   this.$emit('voted')
    // }
    countVote (food) {
      this.votes++
      this.logs.push(`"${food}" received a vote.`)
    },
    reset () {
      this.votes = 0
      this.logs = []
      EventBus.$emit('reset')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
</style>
