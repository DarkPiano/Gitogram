<template>
  <header class="c-header">
    <logo :color="logo_black"
          @click="$router.push({ name: 'feeds' })"
    ></logo>
    <div class="buttons">
      <button class="btn-item icon icon_home mr-12"
              @click="$router.push({ name: 'feeds' })">
        <icon name="home"></icon>
      </button>
      <button class="avatar"
              @click="$router.push({ name: 'repos' })">
        <avatar
          :avatarUrl="user.avatar_url"
          :username="user.login"
          :size="avatar_s"
          class="ml-16 mr-16"></avatar>
      </button>
      <button class="btn-item icon icon_logout ml-8"
              @click="logout">
        <icon name="logout"></icon>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { icon } from '../../icons'
import { logo } from '../logo'
import { avatar } from '../avatar'
export default {
  name: 'xHeader',
  components: {
    icon,
    logo,
    avatar
  },
  data () {
    return {
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
      hasUser: 'user/hasUser'
    })
  },
  methods: {
    ...mapActions({
      logoutAction: 'auth/logout',
      getUser: 'user/getUser'
    }),
    logout () {
      localStorage.removeItem('token')
      this.$router.replace({ name: 'authPage' })
      window.location.reload()
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style lang="scss" src="./header.scss" scoped></style>
