<template>
  <div class="topline">
    <topline>
      <template #headline>
        <x-header></x-header>
      </template>
    </topline>
  </div>
  <div class="x-container container">
    <div class="wrapper">
      <div class="user">
        <div class="title">My profile</div>
<!--        <pre>{{user}}</pre>-->
        <about
          v-if="user.login"
          :userNickname="user.login"
          :username="user.name"
          :avatarUrl="user.avatar_url"
          :repos="user.public_repos"
          :following="followingQty"
          :size="avatar_l"
        />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { xHeader } from '../../components/xHeader'
import { topline } from '../../components/topline'
import { about } from '../../components/about'

export default {
  name: 'UserPage',
  components: {
    xHeader,
    topline,
    about
  },
  data () {
    return {
      items: [],
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l',
      logo_white: 'logo_white',
      logo_black: 'logo_black'
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user.data
    }),
    ...mapGetters({
      followingQty: 'starred/getFollowingQty'
    })
  },
  methods: {
    ...mapActions({
      fetchStarred: 'starred/fetchStarred'
    })
  },
  created () {
    this.fetchStarred()
  }
  // mounted () {
  //   this.fetchTrendings()
  //   this.fetchStarred({ limit: 10 })
  // }
}
</script>

<style src="./userPage.scss" scoped lang="scss"></style>
