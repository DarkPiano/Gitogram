import { authPage } from '../pages/authPage'
import { feeds } from '../pages/feeds'
import { storiesPage } from '../pages/storiesPage'
import { userPage } from '../pages/userPage'
import { repos } from '../pages/repos'
import { following } from '../pages/following'
import { testPage } from '../pages/testPage'
import { testUser } from '../pages/testUser'

export default [
  {
    path: '/authPage',
    name: 'authPage',
    component: authPage
  },
  {
    path: '/',
    name: 'feeds',
    component: feeds
  },
  {
    path: '/storiesPage',
    name: 'storiesPage',
    component: storiesPage
  },
  {
    path: '/userPage',
    name: 'userPage',
    component: userPage,
    children: [{
      path: '',
      component: repos,
      name: 'repos',
      props: {
        pageTitle: 'Repositories'
      }
    }, {
      path: 'following',
      component: following,
      name: 'following',
      props: {
        pageTitle: 'Following'
      }
    }]
  },
  {
    path: '/testPage',
    name: 'testPage',
    component: testPage
  },
  {
    path: '/testUser',
    name: 'testUser',
    component: testUser
  }
]
