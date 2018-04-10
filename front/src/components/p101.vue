<template>
  <div id="hw080" class="form-group">
    <h1>Votes of Vue</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(val, key) in candidates" :key="key">
        {{val.name}} : {{val.score}}
        <button @click="upvote(key)">Upvote!</button>
        <span v-show="val.score >= 5" class="glyphicon glyphicon-star popular pull-right"></span>
      </li>
    </ul>
    <h1>popular list</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(val, key) in listPopular" :key="key">
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
  name: 'p101',
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
    },
    setFavorite () {
      this.favorite = this.story
    }
  },
  computed: {
    listPopular () {
      return this.candidates.filter(one => {
        return one.score > 3
      })
    },
    mayor () {
      let topName = 'nobody'
      let topScore = 0
      this.candidates.forEach(one => {
        if (topScore < one.score) {
          topName = one.name
          topScore = one.score
        }
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
.mayor { font-size: 1.5em;
  font-weight: bold;
}
.popular {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
