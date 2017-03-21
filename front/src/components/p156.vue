<template>
  <div class="container">
    <h1>Let's hear some stories!</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Plot</th>
          <th>Writer</th>
          <th>Upvotes</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <story v-for="story in stories" :story="story" :key="story.id" >
        </story>
      </tbody>
    </table>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
import story from './story'

export default {
  components: {
    'story': story
  },
  data () {
    return {
      stories: [
        { writer: 'asdf', plot: 'qwer', upvotes: 10 }
      ]
    }
  },
  mounted () {
    this.$http.get('http://192.168.56.101:3000/api/stories')
    .then(response => {
      this.stories = response.data
    })
  },
  methods: {
    // deleteStory (story) {
    //   // story 찾기
    //   var index = this.stories.indexOf(story)
    //   // 삭제
    //   this.stories.splice(index, 1)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
th {
  text-align: center;
}
</style>
