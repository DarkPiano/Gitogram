<template>
  <div class="c-feed mt-32">
    <div class="feed__user">
      <user :avatarUrl="avatarUrl" :username="username"></user>
    </div>
    <div class="feed__card mt-16">
      <slot name="card"></slot>
    </div>
    <div class="toggler__wrap mt-18">
      <toggler @onToggle="toggle"></toggler>
    </div>
    <div class="content-loader" v-if="loading">
      <content-loader></content-loader>
    </div>
    <div class="comments mt-12" v-if="shown">
      <ul v-if="issues.length" class="comments__list">
        <li
          class="comments__item"
          v-for="issue in issues" :key="issue.id"
        >
          <comment
            :text="issue.title"
            :username="issue.user.login"
          ></comment>
        </li>
      </ul>
      <div v-else class="no-comments">No comments</div>
    </div>
    <div class="date mt-10">
      <div class="day">{{ normalDate }}</div>
    </div>
  </div>
</template>

<script>
import { user } from '../user'
import { toggler } from '../toggler'
import { comment } from '../comment'
import { contentLoader } from '../contentLoader'

export default {
  name: 'Feed-item',
  data () {
    return {
      shown: false
    }
  },
  components: {
    user,
    toggler,
    comment,
    contentLoader
  },
  emits: [
    'loadContent'
  ],
  props: {
    avatarUrl: {
      type: String,
      default: 'https://picsum.photos/300/300'
    },
    username: {
      type: String,
      default: 'User Loft',
      required: true
    },
    loading: {
      type: Boolean
    },
    issues: {
      type: Array,
      default: () => []
    },
    date: {
      type: Date,
      required: true
    }
  },
  computed: {
    normalDate () {
      const date = new Date(this.date)
      return date.toLocaleString('en-EN', { month: 'short', day: 'numeric' })
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
      if (isOpened && this.issues.length === 0) {
        this.$emit('loadContent')
      }
    }
  }
}
</script>

<style lang="scss" src="./feed.scss" scoped></style>
