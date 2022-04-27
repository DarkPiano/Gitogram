import feed from './feed.vue'
import { user } from '../user'
import { toggler } from '../toggler'
import { card } from '../card'
import { comment } from '../comment'

export default {
  title: 'feed',
  component: { feed },
  subcomponents: {
    user,
    toggler,
    card,
    comment
  },
  argTypes: {
    avatarUrl: { type: 'text' },
    username: { type: 'text' },
    size: {
      options: ['avatar_s', 'avatar_m', 'avatar_l'],
      control: { type: 'select' }
    },
    title: { type: 'text' },
    description: { type: 'text' },
    stars: { type: Number },
    forks: { type: Number }
  }
}

const template = (args) => ({
  components: {
    feed,
    user,
    toggler,
    card,
    comment
  },
  data () {
    return {
      args
    }
  },
  template: `
    <feed :avatarUrl="args.avatarUrl" :username="args.username">
      <template #card>
        <card :title="args.title" :description="args.description" :stars="args.stars" :forks="args.forks"></card>
      </template>
    </feed>
  `
})

export const Default = template.bind({})
Default.args = {
  avatarUrl: 'https://picsum.photos/300/300',
  username: 'Default Name',
  size: 'avatar_l',
  title: 'Default Title',
  description: 'Default descr',
  stars: 16,
  forks: 10
}
