<template>
  <div class="container">
    <h1>Let's hear some stories!</h1>

    <pagination :current-page="currentPage"
                :total="total"
                :page-size="10"
                @change="changePage" >
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
        <story v-for="story in stories" :story="story" :key="story.id" >
        </story>
      </tbody>
    </table>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
import story from './story'
import pagination from './page2.vue'

export default {
  components: {
    story,
    pagination
  },
  data () {
    return {
      pageNow: 1,
      newPlot: '',
      newWriter: '',
      stories: [
        { writer: 'asdf', plot: 'qwer', upvotes: 10 }
      ],
      currentPage: 1,
      total: 0
    }
  },
  mounted () {
    this.fetchStories()
  },
  methods: {
    changePage (page) {
      this.currentPage = page
    },
    fetchStories (pageUrl) {
      this.$http.get(pageUrl || 'http://192.168.56.101:3001/api/stories')
      .then(response => {
        // console.log(response.data)
        // {
        //   current_page: 1
        //   data: Array[15]
        //   from: 1
        //   last_page: 14
        //   next_page_url: "http://192.168.56.101:3001/api/stories?page=2"
        //   per_page: 15
        //   prev_page_url: null
        //   to: 15
        //   total: 203
        // }
        var storiesReady = response.data.data.map(story => {
          story.editing = false
          return story
        })
        this.stories = storiesReady

        this.total = response.data.total
        this.currentPage = response.data.current_page
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
