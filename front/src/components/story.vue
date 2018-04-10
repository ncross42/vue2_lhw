<template id="template-story-raw">
  <tr>
    <td> {{story.id}} </td>
    <td>
      <input v-if="story.editing" v-model="story.plot" class="form-control">
      <span v-else> {{story.plot}} </span>
    </td>
    <td>
      <input v-if="story.editing" v-model="story.writer" class="form-control">
      <span v-else> {{story.writer}} </span>
    </td>
    <td> {{story.upvotes}} </td>
    <td class="actions">
      <div v-if="story.editing === undefined" class="btn-group">
        <button @click="voteStory(story)" class="btn btn-primary"> Vote </button>
        <button @click="deleteStory(story)" class="btn btn-danger"> Delete </button>
      </div>
      <div v-else-if="story.editing" class="btn-group">
        <button @click="updateStory(story)" class="btn btn-primary"> Update Story </button>
        <button @click="story.editing = false" class="btn btn-default"> Cancel </button>
      </div>
      <div v-else class="btn-group">
        <button @click="voteStory(story)" class="btn btn-primary"> Upvote </button>
        <button @click="story.editing = true" class="btn btn-default"> Edit </button>
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
    createStory (story) {

    },
    voteStory (story) {
      story.upvotes++
      this.$http.patch('http://localhost:3000/api/stories/' + story.id, story)
    },
    updateStory (story) {
      this.$http.patch('http://localhost:3000/api/stories/' + story.id, story)
      story.editing = false
    },
    deleteStory (story, event) {
      // 부모 story 찾아서 삭제
      var index = this.$parent.stories.indexOf(story)
      this.$parent.stories.splice(index, 1)
      this.$http.delete('http://localhost:3000/api/stories/' + story.id)
    }
  }
}
</script>

<style lang="scss" scoped>
td {
  padding: 0;
  &.actions {
    padding: 0;
    vertical-align: middle;
    min-width: 14em;
    .btn-group {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      .btn {
        margin-right: 0.2em;
      }
    }
  }
}
</style>
