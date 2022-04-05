<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="heading">
          <div class="logo">
            <icon name="logo" />
          </div>
          <div class="icon">
            <icon name="home" />
            <icon name="photo" />
            <icon name="exit" />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="feed">
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="cooments-lists">
        <li class="comments-item" v-for="n in 3" :key="n">
          <comment text="Some text" username="John Doe" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import { icon } from '../../components/icons'
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
import stories from './data.json'
import * as api from '../../components/api/reset'

export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    icon,
    toggler,
    comment
  },
  data () {
    return {
      stories,
      shown: false,
      items: []
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()

      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" src="./icons.scss" scoped></style>
<style lang="scss" src="./feeds.scss" scoped></style>
