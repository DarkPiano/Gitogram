import placeholder from './placeholder.vue'

export default {
  title: 'placeholder',
  component: { placeholder }
}

const template = () => ({
  components: {
    placeholder
  },
  template: `
    <placeholder></placeholder>
  `
})

export const Default = template.bind({})
