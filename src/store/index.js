import { createStore } from 'vuex'
import auth from './modules/auth'
import user from './modules/user'
import trendings from './modules/trendings'
import starred from './modules/starred'
import repos from './modules/repos'

export default createStore({
  modules: {
    auth,
    user,
    trendings,
    starred,
    repos
  }
})
