<template>
  <ul class="pagination" :class="className" v-show="isShow">
    <li v-if="isShowEdge" :class="{disabled: currentPage === 1}">
      <a href="#" @click.prevent="onChange(1)" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="page in pages" :class="{active: page === currentPage}">
      <a href="#" @click.prevent="onChange(page)">{{page}}</a>
    </li>
    <li v-if="isShowEdge" :class="{disabled: currentPage === totalPages}">
      <a href="#" @click.prevent="onChange(totalPages)" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
  <!--<div class="ui pagination menu" :class="className" v-show="isShow">
    <a class="item" v-if="isShowEdge" :class="{disabled: currentPage === 1}" @click.prevent="onChange(1)">
      {{previousText}}
    </a>
    <a class="item" v-for="page in pages" :class="{active: page === currentPage}" @click.prevent="onChange(page)">
      {{page}}
    </a>
    <a class="item" v-if="isShowEdge" :class="{disabled: currentPage === totalPages}" @click.prevent="onChange(totalPages)">
      {{nextText}}
    </a>
  </div>-->
</template>

<script>
export default {
  name: 'pagination',
  props: {
    total: { type: Number, require: true },
    currentPage: { type: Number, require: true },
    floated: Boolean,
    alwaysShowEdge: Boolean,
    pageSize: { type: Number, default: 10 },
    perPage: { type: Number, default: 10 },
    previousText: { type: String, default: '«' },
    nextText: { type: String, default: '»' }
  },
  computed: {
    className () {
      let cx = []
      if (this.floated) {
        cx.push('pull-right', 'floated')
      }
      return cx
    },
    totalPages () {
      // calculate total pages
      return Math.ceil(this.total / this.perPage)
    },
    pages () {
      const totalPages = this.totalPages
      const currentPage = this.currentPage
      const pageSize = this.pageSize
      const pageCeil = Math.ceil(pageSize / 2)
      const isOddPageSize = pageSize % 2 === 0

      let startPage, endPage
      if (totalPages <= pageSize) {
        startPage = 1
        endPage = totalPages
      } else {
        if (currentPage <= pageCeil) {
          startPage = 1
          endPage = pageSize
        } else if (currentPage + pageCeil - 1 >= totalPages) {
          startPage = totalPages - pageSize + 1
          endPage = totalPages
        } else {
          startPage = currentPage - pageCeil + (isOddPageSize ? 0 : 1)
          endPage = currentPage + pageCeil - 1
        }
      }

      const length = endPage - startPage + 1
      return Array.from({length}, (v, i) => i + startPage)
    },
    isShow () {
      return this.totalPages > 1
    },
    isShowEdge () {
      return this.alwaysShowEdge || this.totalPages > this.pageSize
    }
  },
  data () {
    return {
      startPage: 0,
      endPage: 0
    }
  },
  methods: {
    onChange (page) {
      if (page === this.currentPage) {
        return
      }
      this.$emit('change', page)
    }
  }
}
</script>
