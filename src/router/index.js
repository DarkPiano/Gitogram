import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'authPage'

  try {
    await api.user.getUserData()
    next(authRoute ? { name: 'feeds' } : null)
  } catch (e) {
    next(authRoute ? null : { name: 'authPage' })
  }
})

export default router
