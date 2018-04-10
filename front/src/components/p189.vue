<template>
  <div class="container">
    <h1>Let's hear some stories!</h1>

    <div id="app" class="well"> This is page {{pageOne.currentPage}} </div>
    <pagination :current-page="pageOne.currentPage"
                :total-pages="pageOne.totalPages"
                @page-changed="pageOneChanged">
    </pagination>

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
import Pagination from './Pagination.vue'

export default {
  components: {
    story,
    Pagination
  },
  data () {
    return {
      pageNow: 1,
      newPlot: '',
      newWriter: '',
      stories: [
        { writer: 'asdf', plot: 'qwer', upvotes: 10 }
      ],
      // pagination: {},
      pageOne: {
        currentPage: 1,
        totalPages: 10
      }
    }
  },
  mounted () {
    this.fetchStories()
  },
  methods: {
    pageOneChanged (pageNum) {
      this.pageOne.currentPage = pageNum
    },
    fetchStories (pageUrl) {
      this.$http.get(pageUrl || 'http://localhost:3001/api/stories')
      .then(response => {
        var storiesReady = response.data.data.map(story => {
          story.editing = false
          return story
        })
        this.stories = storiesReady
        // var pagination = {
        //   current_page: response.data.current_page,
        //   last_page: response.data.last_page,
        //   next_page_url: response.data.next_page_url,
        //   prev_page_url: response.data.prev_page_url
        // }
        // this.pagination = pagination
      })
    },
    createStory () {
      let newStory = { writer: this.newWriter, plot: this.newPlot, upvotes: 0 }
      this.$http.post('http://localhost:3001/api/stories', newStory)
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
  },
  ready () {
    this.$on('vue-pagination::some-entity', function (page) {
      this.pageNow = page
    })
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
