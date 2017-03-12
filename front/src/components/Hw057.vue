<template>
  <div id="hw057" class="heading form-group">
    <h1>Votes of Vue</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(val, key) in candidates">
        {{val.name}} : {{val.score}}
        <button @click="upvote(key)">Upvote!</button>
      </li>
    </ul>
    <input v-model="cmd" @keyup.enter="command">
    <br>
    Our mayor : <span class="mayor">{{mayor}}!</span>
  </div>
</template>

<script>
export default {
  name: 'hw057',
  data () {
    return {
      cmd: '',
      defaults: [
        { name: 'aaa', score: 0 },
        { name: 'bbb', score: 0 },
        { name: 'ccc', score: 0 }
      ],
      candidates: []
    }
  },
  created () {
    this.candidates = _.cloneDeep(this.defaults)
  },
  methods: {
    command () {
      if (this.cmd === 'reset') {
        this.candidates = _.cloneDeep(this.defaults)
      } else {
        this.candidates.push({
          name: this.cmd,
          score: 0
        })
      }
      this.cmd = ''
    },
    upvote (key) {
      this.candidates[key].score++
    }
  },
  computed: {
    mayor () {
      console.log(this.candidates.length)
      let topName = 'nobody'
      let topScore = 0
      this.candidates.forEach(one => {
        if (topScore < one.score) {
          topName = one.name
          topScore = one.score
        }
        console.log([topName, topScore, one.name, one.score])
      })
      return topName
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
.mayor {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
