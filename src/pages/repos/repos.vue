<template>
  <div class="c-repos">
    <div class="loader" v-if="loading">
      <spiner></spiner>
    </div>
    <div class="error" v-else-if="error">{{error}}</div>
    <template v-else>
      <div class="c-repos__header">
        <div class="title">Repositories</div>
        <div class="count">{{repos.length}}</div>
      </div>
<!--          <pre>{{repos}}</pre>-->
      <ul class="repos__list">
        <li
          class="repo__item"
          v-for="{ id, name, description, stargazers_count, forks_count } in repos"
          :key="id"
        >
          <card
            :title="name"
            :description="description"
            :stars="stargazers_count"
            :forks="forks_count"
          ></card>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { spiner } from '../../components/spiner'
import { card } from '../../components/card'

import { useStore } from 'vuex'
import { ref, computed } from 'vue'

export default {
  name: 'Repos',
  components: {
    spiner,
    card
  },
  setup () {
    const loading = ref(false)
    const error = ref(null)

    const { dispatch, state } = useStore()

    dispatch('repos/fetchRepos')

    const fetchRepos = async () => {
      loading.value = true
      try {
        await dispatch('repos/fetchRepos')
      } catch (e) {
        error.value = e.message
      } finally {
        loading.value = false
      }
    }

    return {
      loading,
      error,
      repos: computed(() => state.repos.data),
      fetchRepos
    }
  }
}
</script>

<style lang="scss" src="./repos.scss" scoped></style>
