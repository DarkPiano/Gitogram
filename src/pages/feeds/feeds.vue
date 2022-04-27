<template>
  <div class="topline">
    <topline>
      <template #headline>
        <x-header></x-header>
      </template>
      <template #content>
        <div class="stories">
          <ul class="stories__list fl">
            <li
              class="stories__item mr-15 ml-15"
              v-for="{ id, owner } in trendings"
              :key="id"
            >
              <story-user-item
                :avatarUrl="owner.avatar_url"
                :username="owner.login"
                :size="avatar_l"
                @onPress="$router.push({name: 'storiesPage', params: { initialSlide: id } })"
              ></story-user-item>
            </li>
          </ul>
        </div>
      </template>
    </topline>
  </div>
  <div class="feeds">
    <ul class="feeds__list">
      <li
        class="feeds__item mt-24"
        v-for="{ id, owner, name, description, stargazers_count, forks_count, issues, created_at } in starred"
        :key="id"
      >
        <feed-item
          :avatarUrl="owner.avatar_url"
          :username="owner.login"
          :issues="issues?.data"
          :date="new Date(created_at)"
          :loading="issues?.loading"
          @loadContent="loadIssues({ id, owner: owner.login, repo: name })"
        >
          <template #card>
            <card
              :title="name"
              :description="description"
              :stars="stargazers_count"
              :forks="forks_count"
            ></card>
          </template>
        </feed-item>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import * as api from '../../api'
import { xHeader } from '../../components/header'
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './dataUsers.json'
import { feedItem } from '../../components/feed'
import { card } from '../../components/card'

export default {
  name: 'Feeds',
  components: {
    xHeader,
    topline,
    storyUserItem,
    feedItem,
    card
  },
  data () {
    return {
      items: [],
      stories,
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l',
      logo_white: 'logo_white',
      logo_black: 'logo_black'
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      starred: (state) => state.starred.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchStarred: 'starred/fetchStarred',
      fetchIssuesForRepo: 'starred/fetchIssuesForRepo'
    }),
    loadIssues ({ id, owner, repo }) {
      this.fetchIssuesForRepo({ id, owner, repo })
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  },
  mounted () {
    this.fetchTrendings()
    this.fetchStarred({ limit: 10 })
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
