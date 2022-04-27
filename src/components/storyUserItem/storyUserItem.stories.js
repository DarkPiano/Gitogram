import storyUserItem from './storyUserItem.vue'
import { avatar } from '../avatar'

export default {
  title: 'storyUserItem',
  components: { storyUserItem },
  subcomponents: { avatar },
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
  props: Object.keys(args),
  components: {
    storyUserItem,
    avatar
  },
  data () {
    return {
      args
    }
  },
  template: `
    <storyUserItem :avatarUrl="args.avatarUrl" :username="args.username" :size="args.size"></storyUserItem>
  `
})

export const Default = template.bind({})
Default.args = {
  avatarUrl: 'https://picsum.photos/300/300',
  username: 'Default Name',
  size: 'avatar_l'
}
