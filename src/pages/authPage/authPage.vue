<template>
  <div class="с-auth">
    <div class="с-auth__top">
      <logo :color="logo_black"></logo>
      <div class="с-auth__content mt-12">More than just one repository.
        This is our digital world.</div>
      <button
        class="с-auth__btn mt-38"
        @click="redirectToGhAuth"
      >
        <span class="text">Authorize with github</span>
        <div class="icon icon_github ml-12">
          <icon name="github"></icon>
        </div>
      </button>
    </div>
    <div class="с-auth__bottom mb-32">
      <img src="../../assets/comp.png" alt="macbook" class="auth__img">
      <div class="copyright">© Gitogram from Loftschool</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { logo } from '../../components/logo'
import { icon } from '../../icons'
import axios from 'axios'

export default {
  name: 'AuthPage',
  components: {
    logo,
    icon
  },
  methods: {
    ...mapActions({
      redirectToGhAuth: 'auth/getAuthCode',
      authUserByCode: 'auth/authUserByCode'
    })
  },
  async mounted () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      const token = await this.authUserByCode(code)
      localStorage.setItem('token', token)
      axios.defaults.headers.Authorization = `token ${token}`
      this.$router.replace({ name: 'feeds', query: { search: '' } })
    }
  }
}
</script>

<style lang="scss" src="./authPage.scss" scoped></style>
