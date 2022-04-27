export default {
  namespaced: true,
  state: {
    foo: 'bar',
    nextFoo: 'bar_2',
    testUsers: [
      {
        id: 1,
        name: 'john',
        status: 'senior'
      },
      {
        id: 2,
        name: 'mary',
        status: 'senior'
      },
      {
        id: 3,
        name: 'max',
        status: 'middle'
      },
      {
        id: 4,
        name: 'bob',
        status: 'junior'
      }
    ],
    user: {
      data: {},
      loading: false,
      error: false
    }
  },
  getters: {
    getSeniors (state) {
      return state.testUsers.filter(user => user.status === 'senior')
    },
    getTestUserById: (state) => (id) => {
      return state.testUsers.filter(user => user.id === id)
    },
    getIfUserIsFemale (state) {
      return state.user.data.gender === 'female'
    }
  },
  mutations: {
    UPDATE_FOO (state, payload) {
      state.nextFoo = payload
    },
    SET_USER_DATA (state, payload) {
      state.user.data = payload
    },
    SET_USER_LOADING (state, payload) {
      state.user.loading = payload
    },
    SET_USER_ERROR (state, payload) {
      state.user.error = payload
    }
  },
  actions: {
    fetchMethod (store, payload) {
      console.log(payload)
    },
    async fetchUser ({ commit }) {
      commit('SET_USER_LOADING', true)
      try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()

        commit('SET_USER_DATA', data.results[0])

        // console.log(data)
      } catch (error) {
        commit('SET_USER_ERROR', 'Не удалось получить пользователя')
      } finally {
        commit('SET_USER_LOADING', false)
      }
    }
  }
}
