<template id="template-story-raw">
  <tr>
    <td> {{story.id}} </td>
    <td> <span> {{story.plot}} </span> </td>
    <td> <span> {{story.writer}} </span> </td>
    <td> {{story.upvotes}} </td>
    <td>
      <div class="btn-group">
        <button @click="upvoteStory(story)" class="btn btn-primary">
          Upvote
        </button>
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
      $.ajax({
        url: 'http://192.168.56.101:3000/api/stories/' + story.id,
        type: 'PATCH',
        data: story
      })
    }
  }
}
</script>

<style scoped>
.list-group-item {

}
</style>
