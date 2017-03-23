<template>
  <div class="container">
    <h1>Let's hear some stories!</h1>
    <div class="pagination">
      <button @click="fetchStories(pagination.prev_page_url)" :disabled="!pagination.prev_page_url" class="btn">
        Previous
      </button>
      <span>Page {{pagination.current_page}} of {{pagination.last_page}}</span>
      <button @click="fetchStories(pagination.next_page_url)" :disabled="!pagination.next_page_url" class="btn">
        Next
      </button>
    </div>
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
        <!--<form>-->
        <tr>
          <td>New</td>
          <td><input v-model="newPlot" placeholder="A new story"></td>
          <td><input v-model="newWriter" placeholder="new writer"></td>
          <td>0</td>
          <td class="actions">
            <div class="btn-group">
              <button @click="createStory()" class="btn btn-primary"> Create Story </button>
              <input @click="resetStory()" type="reset" class="btn btn-default">
            </div>
          </td>
        </tr>
        <!--</form>-->
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
      newPlot: '',
      newWriter: '',
      stories: [
        { writer: 'asdf', plot: 'qwer', upvotes: 10 }
      ],
      pagination: {}
    }
  },
  mounted () {
    this.fetchStories()
  },
  methods: {
    fetchStories (pageUrl) {
      this.$http.get(pageUrl || 'http://192.168.56.101:3001/api/stories')
      .then(response => {
        var storiesReady = response.data.data.map(story => {
          story.editing = false
          return story
        })
        this.stories = storiesReady
        var pagination = {
          current_page: response.data.current_page,
          last_page: response.data.last_page,
          next_page_url: response.data.next_page_url,
          prev_page_url: response.data.prev_page_url
        }
        this.pagination = pagination
      })
    },
    createStory () {
      let newStory = { writer: this.newWriter, plot: this.newPlot, upvotes: 0 }
      this.$http.post('http://192.168.56.101:3001/api/stories', newStory)
      .then(response => {
        newStory.id = response.data.id
        newStory.editing = false
        this.stories.unshift(newStory)
        this.resetStory()
      }, () => {
        alert('Failed to create new story')
      })
    },
    resetStory () {
      this.newPlot = ''
      this.newWriter = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
th {
  text-align: center;
}
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
