import spiner from './spiner.vue'

export default {
  title: 'spiner',
  component: { spiner }
}

const template = () => ({
  components: {
    spiner
  },
  template: `
    <spiner></spiner>
  `
})

export const Default = template.bind({})
