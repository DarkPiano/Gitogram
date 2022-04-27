import slide from './slide.vue'
import { xProgress } from '../progress'
import { user } from '../user'
import { spiner } from '../spiner'
import { placeholder } from '../placeholder'
import { xButton } from '../button'

export default {
  title: 'slide',
  component: { slide },
  subcomponents: {
    xProgress,
    user,
    spiner,
    placeholder,
    xButton
  }
}

const template = () => ({
  components: {
    slide,
    xProgress,
    user,
    spiner,
    placeholder,
    xButton
  },
  template: `
    <slide></slide>
  `
})

export const Default = template.bind({})
