<template>
  <div id="p113" class="container">
    <h1>Emit and Listen</h1>
    <p style="font-size: 140px;">
      {{ votes }}
    </p>
    <!--button class="btn btn-primary" @click="vote">Vote</button-->
    <div class="row">
      <food @voted="countVote" name="Cheeseburger"></food>
      <food @voted="countVote" name="Double Burger"></food>
      <food @voted="countVote" name="Rodeo Burger"></food>
    </div>
    <h1>Logs:</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="log in logs"> {{ log }} </li>
    </ul>
  </div>
</template>

<script>
import food from './food'

export default {
  name: 'p113',
  components: {
    'food': food
  },
  data () {
    return {
      votes: 0,
      logs: []
    }
  },
  // created () {
  //   this.$on('voted', function (button) {
  //     this.votes++
  //   })
  // },
  methods: {
    // vote: function (writer) {
    //   this.$emit('voted')
    // }
    countVote: function (food) {
      this.votes++
      this.logs.push(`"${food}" received a vote.`)
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
