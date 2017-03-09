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
      cmd: '',
      candidates: [
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
      ]
    }
  }
  // },
  // methods () {
  //   return {
  //     command: function () {
  //       switch (this.cmd) {
  //         case 'reset' :
  //           this.candidates = []
  //           break
  //         default:
  //       }
  //     }
  //   }
  // }
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
