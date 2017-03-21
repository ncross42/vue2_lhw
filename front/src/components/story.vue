<template id="template-story-raw">
  <tr>
    <td> {{story.id}} </td>
    <td> <span> {{story.plot}} </span> </td>
    <td> <span> {{story.writer}} </span> </td>
    <td> {{story.upvotes}} </td>
    <td>
      <div class="btn-group">
        <button @click="upvoteStory(story)" class="btn btn-primary"> Upvote </button>
        <button @click="deleteStory(story)" class="btn btn-danger"> Delete </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  template: '#template-story-raw',
  props: ['story'],
  methods: {
    upvoteStory (story) {
      story.upvotes++
      // $.ajax({
      //   url: 'http://192.168.56.101:3000/api/stories/' + story.id,
      //   type: 'PATCH',
      //   data: story
      // })
      this.$http.patch('http://192.168.56.101:3000/api/stories/' + story.id, story)
    },
    deleteStory (story, event) {
      this.$emit('deleteStory', story)
      // $.ajax({
      //   url: 'http://192.168.56.101:3000/api/stories/' + story.id,
      //   type: 'DELETE'
      // })
      this.$http.delete('http://192.168.56.101:3000/api/stories/' + story.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-group {
  min-width: 10em;
  .btn-primary {
    margin-right: 0.2em;
  }
}
</style>
