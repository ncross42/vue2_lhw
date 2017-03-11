<template>
  <div id="hw022" class="heading form-group">
    <h1>Votes of Vue</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(v, k, i) in candidates">
        {{v.name}} : {{v.score}}
      </li>
    </ul>
    <input v-model="cmd" @keyup.enter="command">
    <br>
    Our mayor is {{mayor}}!
  </div>
</template>

<script>
export default {
  name: 'hw038',
  data () {
    return {
      mayor: '',
      cmd: '',
      defaults: [
        {
          name: 'aaa',
          score: 0
        },
        {
          name: 'bbb',
          score: 0
        },
        {
          name: 'ccc',
          score: 0
        }
      ],
      candidates: []
    }
  },
  created () {
    this.candidates = this.defaults.slice()
  },
  methods: {
    command () {
      if (this.cmd === 'reset') {
        this.candidates = this.defaults.slice()
      } else {
        this.candidates.push({
          name: this.cmd,
          score: 0
        })
      }
      this.cmd = ''
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
</style>
