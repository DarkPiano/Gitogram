import progress from './progress.vue'

export default {
  title: 'progress',
  component: progress,
  argType: {
    onFinish: {
      action: 'onFinish',
      description: 'files when progress reaches the and'
    }
  }
}

const template = (args) => ({
  components: { xProgress: progress },
  data () {
    return { args }
  },
  template: '<x-progress @onFinish="args.onFinish" />'
})

export const Default = template.bind({})
