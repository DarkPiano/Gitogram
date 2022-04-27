<template>
  <h1>Actions</h1>
  <button @click="trigger">Click btn on test Page</button>
  <h1>Mutations</h1>
  <p>{{$store.state.nextFoo}}</p>
  <button @click="trigger_2">Click btn 2 on test Page</button>
  <h1>Getters</h1>
  <button @click="trigger_3">Click btn 3 on test Page</button>
  <button @click="trigger_4">Click btn 4 on test Page</button>
  <h1>Применение на практике</h1>
  <div>{{$store.getters.getIfUserIsFemale}}</div>
  <h3>Preloader</h3>
  <div v-if="$store.state.user.loading">loading...</div>
  <h3>Data from api</h3>
  <div v-if="$store.state.user.error">
    {{ $store.state.user.error }}
  </div>
  <pre v-else-if="Object.keys($store.state.user.data).length">{{$store.state.user.data}}</pre>
  <button @click="trigger_5">Click btn 5 on test Page</button>
</template>

<script>
export default {
  name: 'TestPage',
  methods: {
    trigger () {
      this.$store.dispatch('fetchMethod', 'Hello World')
    },
    trigger_2 () {
      this.$store.commit('UPDATE_FOO', 'nextFoo')
    },
    trigger_3 () {
      console.log(
        this.$store.getters.getSeniors
      )
    },
    trigger_4 () {
      console.log(
        this.$store.getters.getTestUserById(3)
      )
    },
    trigger_5 () {
      this.$store.dispatch('fetchUser', 'Hello World')
    }
  },
  created () {
  }
}
</script>

<style lang="scss" src="./testPage.scss" scoped></style>
