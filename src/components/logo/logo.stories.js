import logo from './logo.vue'

export default {
  title: 'logo',
  components: {
    logo
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['logo_black', 'logo_white']
    }
  }
}

const template = (args) => ({
  props: Object.keys(args),
  components: {
    logo
  },
  data () {
    return {
      args
    }
  },
  template: '<logo :color="args.color"></logo>'
})

export const Default = template.bind({})
Default.args = {
  color: 'logo_black'
}
