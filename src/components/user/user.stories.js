import user from './user.vue'
import { avatar } from '../avatar'

export default {
  title: 'user',
  components: { user },
  subcomponents: {
    avatar
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
    user,
    avatar
  },
  data () {
    return {
      args
    }
  },
  template: `
    <user :avatarUtl="args.avatarUrl" :username="args.username" :size="args.size"></user>
  `
})

export const Default = template.bind({})
Default.args = {
  avatarUrl: 'https://picsum.photos/300/300',
  username: 'Default Name',
  size: 'avatar_m'
}
