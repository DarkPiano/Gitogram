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
import { xHeader } from '../../components/header'
import { topline } from '../../components/topline'
import { about } from '../../components/about'

import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'UserPage',
  components: {
    xHeader,
    topline,
    about
  },
  setup () {
    const { dispatch, state } = useStore()
    dispatch('starred/fetchStarred')
    return {
      user: computed(() => state.user.data),
      followingQty: computed(() => state.starred.data.length)
    }
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
  }
}
</script>

<style lang="scss" src="./userPage.scss" scoped></style>
