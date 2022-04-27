import topline from './topline.vue'
import { icon } from '../../icons'
import { avatar } from '../avatar'
import { storyUserItem } from '../storyUserItem'
import '../../pages/feeds/feeds.scss'
// import "../../pages/feeds/feeds.scss"

export default {
  title: 'topline',
  components: { topline },
  subcomponents: {
    icon,
    avatar,
    storyUserItem
  },
  argTypes: {
    avatarUrl: { type: 'text' },
    username: { type: 'text' },
    size: {
      options: ['avatar_s', 'avatar_m', 'avatar_l'],
      control: { type: 'select' }
    }
  }
}

const template = (args) => ({
  components: {
    topline,
    icon,
    avatar,
    storyUserItem
  },
  data () {
    return {
      args
    }
  },
  template: `
    <topline>
      <template #headline>
        <div class="headline__wrap fl-jc-between">
          <h1 class="mainTitle">Gitogram /</h1>
          <div class="headline__right fl">
            <div class="icon icon_home mr-12">
              <icon name="home"></icon>
            </div>
            <avatar :avatarUtl="args.avatarUrl" :size="args.size" class="ml-16 mr-16"></avatar>
            <div class="icon icon_logout ml-8">
              <icon name="logout"></icon>
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <div class="stories">
          <ul class="stories__list fl">
            <li
              class="stories__item mr-15 ml-15"
              v-for="(item,ndx) in 10"
              :key="ndx"
            >
              <story-user-item
                :avatarUrl="args.avatarUrl"
                :username="args.username"
                :size="args.size"
              ></story-user-item>
            </li>
          </ul>
        </div>
      </template>
    </topline>
  `
})

export const Default = template.bind({})
Default.args = {
  avatarUrl: 'https://picsum.photos/300/300',
  username: 'Default Name',
  size: 'avatar_l'
}
